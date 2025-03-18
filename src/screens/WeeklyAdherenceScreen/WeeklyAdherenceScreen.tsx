import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Dimensions } from 'react-native';
import Footer from '../../components/Footer';
import AppCardContainer from '../../components/AppCardContainer';
import { weeklyAdherence } from "../../data/sample_data.json";

const screenWidth = Dimensions.get('window').width;

const WeeklyAdherenceScreen = () => {

    const { overall, dosesTaken, totalDoses, daily } = weeklyAdherence;
    const maxRate = Math.max(...daily.map((day) => day.rate));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.dateRange}>March 10 - March 16, 2025</Text>
            </View>

            <ScrollView style={{ paddingHorizontal: '4%' }}>
                <AppCardContainer style={styles.card}>
                    <Text style={styles.cardTitle}>Weekly Adherence</Text>
                    <View style={styles.chartContainer}>
                        {daily.map((day) => (
                            <View key={day.day} style={styles.barContainer}>
                                <View
                                    style={[
                                        styles.bar,
                                        {
                                            height: (day.rate / maxRate) * 100, // Scale the bar height
                                            backgroundColor: day.rate === 33.3 ? 'red' : '#07d969', // Highlight low adherence
                                        },
                                    ]}
                                />
                                <Text style={styles.dayLabel}>{day.day}</Text>
                            </View>
                        ))}
                    </View>
                </AppCardContainer>

                <AppCardContainer style={styles.card}>
                    <Text style={styles.cardTitle}>Statistics</Text>
                    <View style={styles.statsRow}>
                        <Text style={styles.statsLabel}>Overall Adherence</Text>
                        <Text style={styles.statsValue}>85.7%</Text>
                    </View>
                    <View style={styles.statsRow}>
                        <Text style={styles.statsLabel}>Doses Taken</Text>
                        <Text style={styles.statsValue}>18 of 21</Text>
                    </View>
                </AppCardContainer>

                <AppCardContainer style={styles.card}>
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
                </AppCardContainer>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    headerStyle: {
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: '#FFFFFF'
    },
    dateRange: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 14,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: 125,
        marginBottom: 10,
    },
    barContainer: {
        alignItems: 'center',
    },
    bar: {
        width: 30,
        borderRadius: 4,
        backgroundColor: 'green',
        marginBottom: 5,
    },
    dayLabel: {
        fontSize: 12,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 6,
        padding: 8,
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
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 8
    },
    medicationDot: {
        width: 18,
        height: 18,
        borderRadius: 10,
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