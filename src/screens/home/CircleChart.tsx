import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const { width } = Dimensions.get("window");

const CircleChart = () => {
  const data = [
    { value: 50, color: "#4CAF50", text: "Completed" },
    { value: 30, color: "#FFC107", text: "Pending" },
    { value: 20, color: "#F44336", text: "Overdue" },
  ];

  return (
    <View style={styles.card}>
      <PieChart
        data={data}
        donut
        innerRadius={50}
        radius={75}
        centerLabelComponent={() => (
          <View >
            {data.map((item, index) => (
              <Text
                key={index}
                style={[styles.legendText, { color: item.color }]}
              >
                {item.text}: {item.value}%
              </Text>
            ))}
          </View>
        )}
      />
      <Text style={styles.heading}>Task Status</Text>
    </View>
  );
};

export default CircleChart;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 200,
    width: width * 0.92,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginBottom: 8,
    paddingVertical: 12
  },
  heading: {
    fontSize: 14,
    color: "#222",
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10
  },
  legendText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'poppins-Regular'
  },
});
