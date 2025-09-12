import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-gifted-charts';
import { useAppTheme } from '../../hooks/colorTheme';

const GraphChart = () => {

  const theme = useAppTheme();
  const styles = getStyles(theme);
  // Data for Blue Line
  const blueLine = [
    { value: 20, label: 'Jan' },
    { value: 45, label: 'Feb' },
    { value: 28, label: 'Mar' },
    { value: 80, label: 'Apr' },
    { value: 99, label: 'May' },
    { value: 43, label: 'Jun' },
  ];

  // Data for Gray Line
  const grayLine = [
    { value: 15, label: 'Jan' },
    { value: 35, label: 'Feb' },
    { value: 55, label: 'Mar' },
    { value: 60, label: 'Apr' },
    { value: 85, label: 'May' },
    { value: 70, label: 'Jun' },
  ];

  return (
    <View >
      <Text style={styles.title}>Monthly Data Comparison</Text>

      <LineChart
        data={blueLine}
        data2={grayLine}
        height={250}
        spacing={50}
        initialSpacing={20}
        color1="blue"
        color2="gray"
        hideRules={false}
        showVerticalLines={true}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        yAxisTextStyle={{ color: 'black' }}
        xAxisLabelTextStyle={{ color: 'black' }}
        dataPointsHeight={6}
        dataPointsWidth={6}
        dataPointsColor1="blue"
        dataPointsColor2="gray"
        thickness={3}
        
      />
    </View>
  );
};

export default GraphChart;

const getStyles = (theme: any) =>
  StyleSheet.create({
    title: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 16,
      color: theme.text,
      fontFamily:'Poppins-SemiBold'
    },
  });
