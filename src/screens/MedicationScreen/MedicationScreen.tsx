import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

const MedicationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41 AM</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Medications</Text>

      <View style={styles.progressContainer}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={67 / 100}
          progressColor={'#4CAF50'}
          backgroundColor={'#E0E0E0'}
          strokeWidth={8}
        />
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressText}>Today's Progress</Text>
          <Text style={styles.progressDetail}>2 of 3 medications taken</Text>
          <Text style={styles.progressDetail}>Next: Atorvastatin at 6:00 PM</Text>
        </View>
      </View>

      <Text style={styles.timelineTitle}>Timeline</Text>

      <View style={styles.medicationItem}>
        <Text style={styles.medicationName}>Lisinopril</Text>
        <Text style={styles.medicationTime}>8:00 AM</Text>
        <Text style={styles.medicationDetail}>10mg - 1 tablet - With breakfast</Text>
        <Text style={styles.medicationTaken}>Taken at 8:05 AM</Text>
      </View>

      <View style={styles.medicationItem}>
        <Text style={styles.medicationName}>Metformin</Text>
        <Text style={styles.medicationTime}>12:00 PM</Text>
        <Text style={styles.medicationDetail}>500mg - 1 tablet - With lunch</Text>
        <Text style={styles.medicationTaken}>Taken at 12:10 PM</Text>
      </View>

      <View style={styles.medicationItem}>
        <Text style={styles.medicationName}>Atorvastatin</Text>
        <Text style={styles.medicationTime}>6:00 PM</Text>
        <Text style={styles.medicationDetail}>20mg - 1 tablet - After dinner</Text>
        <Text style={styles.medicationComing}>Coming up in 2 hours</Text>
      </View>

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
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginTop: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  progressCircle: {
    height: 80,
    width: 80,
  },
  progressTextContainer: {
    marginLeft: 20,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressDetail: {
    fontSize: 14,
    color: '#888',
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
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  summaryButtonText: {
    color: '#fff',
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

export default MedicationScreen;