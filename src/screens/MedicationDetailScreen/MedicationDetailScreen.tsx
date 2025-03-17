import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MedicationDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.medicationName}>Atorvastatin</Text>
          <Text style={styles.medicationDosage}>20mg - 1 tablet - After dinner</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Schedule</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Time</Text>
          <Text style={styles.detailValue}>6:00 PM</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Frequency</Text>
          <Text style={styles.detailValue}>Daily</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>How to take</Text>
          <Text style={styles.detailValue}>Take after dinner with water</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Special notes</Text>
          <Text style={styles.detailValue}>Avoid grapefruit juice</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inventory</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Remaining</Text>
          <Text style={[styles.detailValue, styles.lowInventory]}>
            3 tablets (Low)
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.markTakenButton}>
        <Text style={styles.markTakenText}>Mark as Taken</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Medication</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    flex: 1,
  },
  medicationName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  medicationDosage: {
    fontSize: 16,
    color: '#888',
  },
  section: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 16,
    color: '#888',
  },
  detailValue: {
    fontSize: 16,
  },
  lowInventory: {
    color: 'red',
  },
  markTakenButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  markTakenText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  editText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MedicationDetailScreen;