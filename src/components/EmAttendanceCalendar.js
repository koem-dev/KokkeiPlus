import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { db, auth } from "../services/firebase";

const AttendanceCalendar = ({ userId }) => {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const userRef = db.collection("user-res").doc(userId);
        const snapshot = await userRef.get();

        if (snapshot.exists) {
          const userData = snapshot.data();
          const attendanceData = userData.attendance || [];

          const marked = {};

          attendanceData.forEach((item) => {
            const { date } = item;
            marked[date] = { marked: true, dotColor: "green" };
          });

          setMarkedDates(marked);
        }
      } catch (error) {
        console.log("Error fetching attendance data:", error);
      }
    };

    fetchAttendanceData();
  }, [userId]);

  return (
    <View>
      <Calendar markedDates={markedDates} />
    </View>
  );
};

export default AttendanceCalendar;
