import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import dashboard from "../../../assets/styles/Dashboard";

const OperatorDashboard = () => {
  return (
    <View>
      <View style={dashboard.linkContainer}>
        <Text style={dashboard.linkTitle}>Fitur:</Text>
        <TouchableOpacity>
          <Text style={dashboard.link}>{`\u003e Produk`}</Text>
        </TouchableOpacity>
      </View>
      <View style={dashboard.linkContainer}>
        <Text style={dashboard.linkTitle}>Pesanan:</Text>
        <TouchableOpacity>
          <Text style={dashboard.link}>{`\u003e Pesanan Baru`}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={dashboard.link}>{`\u003e Pesanan Dikirim`}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={dashboard.link}>{`\u003e Pesanan Selesai`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OperatorDashboard;
