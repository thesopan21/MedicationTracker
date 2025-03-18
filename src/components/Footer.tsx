import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface RootStackParamList extends ParamListBase {
    MedicationScreen: undefined;
    Calender: undefined;
    HealthData: undefined;
}

const Footer = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const route = useRoute();

    const handleScreenNavigation = (screenName: keyof RootStackParamList) => {
        navigation.navigate(screenName as string);
    };

    return (
        <View style={styles.tabBar}>
            <Pressable onPress={() => handleScreenNavigation('MedicationScreen')}>
                <Text style={route.name === 'MedicationScreen' ? styles.tabItemActive : styles.tabItem}>
                    Today
                </Text>
            </Pressable>
            <Pressable onPress={() => handleScreenNavigation('Calender')}>
                <Text style={route.name === 'Calender' ? styles.tabItemActive : styles.tabItem}>
                    Calendar
                </Text>
            </Pressable>
            <Pressable onPress={() => handleScreenNavigation('HealthData')}>
                <Text style={route.name === 'HealthData' ? styles.tabItemActive : styles.tabItem}>
                    Health Data
                </Text>
            </Pressable>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
    },
    tabItem: {
        fontSize: 16,
        color: '#888',
        paddingVertical: 10,
    },
    tabItemActive: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2196F3',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#2196F3',
    },
});