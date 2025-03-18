import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import { medications } from "../../data/sample_data.json";
import MedicationTimeline from '../MedicationTimeline/MedicationTimeline';
import AppCardContainer from '../../components/AppCardContainer';

const MedicationScreen = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Medications</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <AppCardContainer style={styles.progressCard}>
                <Text style={styles.progressText}>Today's Progress</Text>
                <View style={styles.progressContainer}>
                    <View style={styles.circleContainer}>
                        <ProgressCircle
                            style={styles.progressCircle}
                            progress={67 / 100}
                            progressColor={'#fc5d23'}
                            backgroundColor={'#E0E0E0'}
                            strokeWidth={8}
                        />
                        <Text style={styles.text}>{`${67}%`}</Text>
                    </View>
                    <View style={styles.progressTextContainer}>
                        <Text style={styles.progressDetail}>2 of 3 medications taken</Text>
                        <Text style={styles.progressDetail}>Next: Atorvastatin at 6:00 PM</Text>
                    </View>
                </View>
            </AppCardContainer>

            <MedicationTimeline medications={medications} />


            <TouchableOpacity style={styles.summaryButton}>
                <Text style={styles.summaryButtonText}>View Weekly Summary</Text>
            </TouchableOpacity>

            <View style={styles.tabBar}>
                <Text style={styles.tabItemActive}>Today</Text>
                <Text style={styles.tabItem}>Calendar</Text>
                <Text style={styles.tabItem}>Health Data</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#FF69B4',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    progressCard: {
        gap: 12
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    progressCircle: {
        height: 60,
        width: 60,
    },
    progressTextContainer: {
        gap: 6
    },
    progressText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    progressDetail: {
        fontSize: 14,
        color: '#000',
    },
    timelineTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
    },
    medicationItem: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    medicationName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    medicationTime: {
        fontSize: 16,
        color: '#888',
    },
    medicationDetail: {
        fontSize: 14,
        marginTop: 5,
    },
    medicationTaken: {
        fontSize: 14,
        color: '#4CAF50',
        marginTop: 5,
    },
    medicationComing: {
        fontSize: 14,
        color: '#FF9800',
        marginTop: 5,
    },
    summaryButton: {
        backgroundColor: '#e8e5e3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        position:'absolute',
        bottom: '10%',
        left: 0,
        right: 0,
        marginHorizontal: 12
    },
    summaryButtonText: {
        color: '#1483fa',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tabBar: {
        position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: '6%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:'#FFF'
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

export default MedicationScreen;