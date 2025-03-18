import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import AppCardContainer from '../../components/AppCardContainer';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MedicationProps } from '../MedicationTimeline/MedicationTimeline';
import { medications } from "../../data/sample_data.json";
import { StackNavigationProp } from '@react-navigation/stack';

interface RootStackParamList extends ParamListBase {
  MedicationDetailScreen: { item: MedicationProps };
}

const MedicationDetailScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'MedicationDetailScreen'>>();
  const { item } = route.params as { item: MedicationProps };



  const handleMarkAsTaken = () => {
    // here i want to modify array itself by using forEach method
    const updatedMedications = medications.map((med) =>
      med.id === item.id ? { ...med, status: 'taken' } : med
  );
  
  console.log('handler mark as taken called for:', medications)
    // navigation.push('MedicationScreen')
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.medicationName}>{item.name}</Text>
          <Text style={styles.medicationDosage}>{item.dosage} - {item.quantity} - {item.instructions}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <AppCardContainer style={styles.section}>
          <Text style={styles.sectionTitle}>Schedule</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Time</Text>
            <Text style={styles.detailValue}>{item.time}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Frequency</Text>
            <Text style={styles.detailValue}>Daily</Text>
          </View>
        </AppCardContainer>

        <AppCardContainer style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>How to take</Text>
            <Text style={styles.detailValue}>{item.instructions}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Special notes</Text>
            <Text style={styles.detailValue}>{item.specialNotes}</Text>
          </View>
        </AppCardContainer>

        <AppCardContainer style={styles.section}>
          <Text style={styles.sectionTitle}>Inventory</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Remaining</Text>
            <Text style={[styles.detailValue, styles.lowInventory]}>
              {item.inventory} tablets (Low)
            </Text>
          </View>
        </AppCardContainer>

        <TouchableOpacity style={styles.markTakenButton} onPress={handleMarkAsTaken}>
          <Text style={styles.markTakenText}>Mark as Taken</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Medication</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    paddingHorizontal: '4%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: '6%',
    width: '100%',
    backgroundColor: '#fff',
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
    color: '#f77f07'
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
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
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
    color: '#2196F3'
  },
});

export default MedicationDetailScreen;