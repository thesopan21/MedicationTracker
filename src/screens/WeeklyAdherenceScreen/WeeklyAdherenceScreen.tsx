import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const WeeklyAdherenceScreen = () => {
    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [1, 1, 1, 1, 0.8, 0.6, 1], // Example adherence data (adjust as needed)
            },
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1, index: any) =>
            chartData.datasets[0].data[index] === 1
                ? `rgba(0, 200, 0, ${opacity})` // Green for 100%
                : `rgba(255, 0, 0, ${opacity})`, // Red for < 100%
        barPercentage: 0.8,
        barRadius: 5,
        decimalPlaces: 0,
        props: {
            barPercentage: 0.8,
            barRadius: 5,
        },
        style: {
            borderRadius: 16,
        },
    };

    return (
        <View style={styles.container}>
            <Text style={styles.dateRange}>March 10 - March 16, 2025</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Weekly Adherence</Text>
                <BarChart
                    data={chartData}
                    width={screenWidth - 40} // Adjust width based on padding
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    yAxisLabel=''
                    yAxisSuffix=''
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Statistics</Text>
                <View style={styles.statsRow}>
                    <Text style={styles.statsLabel}>Overall Adherence</Text>
                    <Text style={styles.statsValue}>85.7%</Text>
                </View>
                <View style={styles.statsRow}>
                    <Text style={styles.statsLabel}>Doses Taken</Text>
                    <Text style={styles.statsValue}>18 of 21</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Medication Breakdown</Text>
                <View style={styles.medicationRow}>
                    <View style={[styles.medicationDot, { backgroundColor: 'orange' }]} />
                    <Text style={styles.medicationName}>Lisinopril</Text>
                    <Text style={styles.medicationValue}>100%</Text>
                </View>
                <View style={styles.medicationRow}>
                    <View style={[styles.medicationDot, { backgroundColor: 'skyblue' }]} />
                    <Text style={styles.medicationName}>Metformin</Text>
                    <Text style={styles.medicationValue}>85.7%</Text>
                </View>
                <View style={styles.medicationRow}>
                    <View style={[styles.medicationDot, { backgroundColor: 'purple' }]} />
                    <Text style={styles.medicationName}>Atorvastatin</Text>
                    <Text style={styles.medicationValue}>71.4%</Text>
                </View>
            </View>

            <View style={styles.tabBar}>
                <Text style={styles.tabItem}>Today</Text>
                <Text style={styles.tabItemActive}>Calendar</Text>
                <Text style={styles.tabItem}>Health Data</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    dateRange: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    statsLabel: {
        fontSize: 16,
    },
    statsValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    medicationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    medicationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    medicationName: {
        fontSize: 16,
        flex: 1,
    },
    medicationValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    tabItem: {
        fontSize: 16,
        color: '#888',
    },
    tabItemActive: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2196F3',
    },
});

export default WeeklyAdherenceScreen;