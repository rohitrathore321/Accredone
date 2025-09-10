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

      {/* Circle Chart with Center Labels */}
      <View style={styles.chartWrapper}>
        <PieChart
          data={data}
          donut
          innerRadius={50}
          radius={60}
          centerLabelComponent={() => (
            <View style={styles.centerContent}>
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
      </View>
      <View style={{marginTop:1,marginBottom:2}}><Text style={styles.heading}>Task Status</Text></View>
    </View>
  );
};

export default CircleChart;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    // padding: 12,
    height: 150,              // ✅ same as carousel card
    width: width * 0.4,       // ✅ aligns with carousel width
    justifyContent: "center",
    alignItems: "center",
    elevation: 5

  },
  heading: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222",
    // marginBottom: 5,
    // marginTop:10,
  },
  chartWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom:5,
  },
  centerContent: {
    alignItems: "center",
  },
  legendText: {
    fontSize: 11,
    fontWeight: "600",
    marginVertical: 1,
  },
});
