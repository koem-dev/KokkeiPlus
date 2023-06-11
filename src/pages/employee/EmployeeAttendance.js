import React, { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { db, auth } from "../../services/firebase";
import firebase from "firebase/compat";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment/moment";
import global from "../../../assets/styles/GlobalStyles";
import AttedanceModal from "../../components/modals/AttendanceModal";
import BarcodeScan from "../../components/BarcodeScan";
import SkeletonLoader from "../../features/SkeletonLoader";

const EmployeeAttendance = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showInScanner, setShowInScanner] = useState(false);
  const [showOutScanner, setShowOutScanner] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [location, setLocation] = useState("");
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [attendanceType, setAttendanceType] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const [hasCheckedOut, setHasCheckedOut] = useState(false);
  const userId = auth.currentUser.uid;
  const userRef = db.collection("users-res").doc(userId);

  const groupedAttendanceHistory = attendanceHistory.reduce(
    (acc, curr) => {
      const date = moment(curr.date, "DD/MM/YYYY");
      const diffInDays = moment().diff(date, "days");

      if (diffInDays === 0) {
        acc.today.push(curr);
      } else if (diffInDays === 1) {
        acc.yesterday.push(curr);
      } else if (diffInDays <= 7) {
        acc.lastWeek.push(curr);
      } else {
        acc.older.push(curr);
      }

      return acc;
    },
    { today: [], yesterday: [], lastWeek: [], older: [] }
  );

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = (new Date().getMonth() + 1).toString().padStart(2, "0"); //Current Month with leading zero
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(date + "/" + month + "/" + year);
    setCurrentTime(hours + ":" + min + ":" + sec);
  }, []);

  useEffect(() => {
    userRef.get().then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        if (userData && userData.attendance) {
          setAttendanceHistory(userData.attendance);
          setLoading(false);

          // Check if user has already checked in or checked out for today
          const today = moment().format("DD/MM/YYYY");
          const hasCheckedInToday = userData.attendance.some(
            (entry) => entry.date === today && entry.type === "in"
          );
          const hasCheckedOutToday = userData.attendance.some(
            (entry) => entry.date === today && entry.type === "out"
          );
          setHasCheckedIn(hasCheckedInToday);
          setHasCheckedOut(hasCheckedOutToday);
        } else {
          setAttendanceHistory([]);
        }
      }
    });
  }, [refresh]);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  const getLocation = (data) => {
    if (data == "001F6") {
      setLocation("Palem Residence F06\nSurabaya, Jawa Timur");
      setModalVisible(true);
    } else if (data == "002SNL") {
      setLocation("Safe and Lock\nSidoarjo, Jawa Timur");
      setModalVisible(true);
    } else {
      setLocation("Lokasi tidak ditemukan");
      setModalVisible(false);
    }
  };

  const handleAttendance = () => {
    setModalVisible(false);

    if (attendanceType === "in" && hasCheckedIn) {
      alert("Anda sudah melakukan absensi kehadiran hari ini.");
      return;
    } else if (attendanceType === "out" && hasCheckedOut) {
      alert("Anda sudah melakukan absensi kepulangan hari ini.");
      return;
    }

    if (attendanceType === "in") {
      setHasCheckedIn(true);
    } else if (attendanceType === "out") {
      setHasCheckedOut(true);
    }

    userRef
      .update({
        attendance: firebase.firestore.FieldValue.arrayUnion({
          date: currentDate,
          time: currentTime,
          location: location,
          type: attendanceType,
        }),
      })
      .then(() => {
        alert("Anda berhasil melakukan absensi pada lokasi ini");
        setRefresh(!refresh);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleInBarCodeScanner = ({ type, data }) => {
    if (hasCheckedIn) {
      alert("You have already checked in for today.");
      return;
    }

    setScanned(true);
    setShowInScanner(false);
    setAttendanceType("in");
    getLocation(data);
  };

  const handleOutBarCodeScanner = ({ type, data }) => {
    if (hasCheckedOut) {
      alert("You have already checked out for today.");
      return;
    }

    setScanned(true);
    setShowOutScanner(false);
    setAttendanceType("out");
    getLocation(data);
  };

  const handleShowInScanner = () => {
    setShowInScanner(true);
    setScanned(false);
  };

  const handleShowOutScanner = () => {
    setShowOutScanner(true);
    setScanned(false);
  };

  const renderItem = ({ item }) => (
    <View style={global.itemWrapper}>
      <Text style={global.itemDate}>{item.date}</Text>
      <Text>Waktu: {item.time}</Text>
      <Text>Lokasi: {item.location}</Text>
      <Text>Jenis: {item.type === "in" ? "Kedatangan" : "Kepulangan"}</Text>
    </View>
  );

  // Check if user granted permission to use the camera
  if (hasPermission === null) {
    return (
      <View style={global.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  // Check if user granted permission to use the camera
  if (hasPermission === false) {
    return (
      <View style={global.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Pressable
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        >
          <Text>Allow Camera</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperPageTitle}>Absensi Karyawan</Text>
        </View>
        <View style={[global.boxWrapper, global.wh]}>
          <Pressable
            onPress={handleShowInScanner}
            style={[global.button, global.w45]}
          >
            <Text style={global.buttonText}>Kehadiran</Text>
          </Pressable>
          <Pressable
            onPress={handleShowOutScanner}
            style={[global.buttonWarning, global.w45, global.whSpace]}
          >
            <Text style={global.buttonWarningText}>Kepulangan</Text>
          </Pressable>
        </View>

        <BarcodeScan
          visible={showInScanner}
          result={handleInBarCodeScanner}
          scanned={scanned}
          cancel={() => setShowInScanner(false)}
        />
        <BarcodeScan
          visible={showOutScanner}
          result={handleOutBarCodeScanner}
          scanned={scanned}
          cancel={() => setShowOutScanner(false)}
        />

        <AttedanceModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          ModalTitle={attendanceType == "in" ? "Absen Masuk" : "Absen Keluar"}
          ModalDescription={
            attendanceType == "in"
              ? "Apakah Anda yakin ingin masuk pada lokasi tersebut?"
              : "Apakah Anda yakin ingin keluar pada lokasi tersebut?"
          }
          ModalLocation={location}
          ModalDate={currentDate}
          ModalTime={currentTime}
          onConfirm={handleAttendance}
        />

        <View style={global.boxWrapper}>
          <View style={[global.wh, { marginBottom: 20 }]}>
            <FontAwesome name="clock-o" size={20} color="black" />
            <Text style={[global.boxWrapperTitle, global.whSpace]}>
              Riwayat Kehadiran
            </Text>
          </View>
          {loading === true ? (
            <SkeletonLoader />
          ) : (
            <>
              {groupedAttendanceHistory.today.length > 0 && (
                <>
                  <Text style={global.itemDate}>Hari ini</Text>
                  <FlatList
                    data={groupedAttendanceHistory.today}
                    renderItem={renderItem}
                    keyExtractor={(item, index) =>
                      item.id + refresh.toString() + index
                    }
                  />
                </>
              )}
              {groupedAttendanceHistory.yesterday.length > 0 && (
                <>
                  <Text style={global.itemDate}>Kemarin</Text>
                  <FlatList
                    data={groupedAttendanceHistory.yesterday}
                    renderItem={renderItem}
                    keyExtractor={(item, index) =>
                      item.id + refresh.toString() + index
                    }
                  />
                </>
              )}
              {groupedAttendanceHistory.lastWeek.length > 0 && (
                <>
                  <Text style={global.itemDate}>Minggu ini</Text>
                  <FlatList
                    data={groupedAttendanceHistory.lastWeek}
                    renderItem={renderItem}
                    keyExtractor={(item, index) =>
                      item.id + refresh.toString() + index
                    }
                  />
                </>
              )}
              {groupedAttendanceHistory.older.length > 0 && (
                <>
                  <Text style={global.itemDate}>
                    Lebih dari seminggu yang lalu
                  </Text>
                  <FlatList
                    data={groupedAttendanceHistory.older}
                    renderItem={renderItem}
                    keyExtractor={(item, index) =>
                      item.id + refresh.toString() + index
                    }
                  />
                </>
              )}
              {attendanceHistory.length === 0 && (
                <Text>Tidak ada riwayat absensi</Text>
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default EmployeeAttendance;
