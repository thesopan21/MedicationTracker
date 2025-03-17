import React from 'react';

import {
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreenHeader from './HomeScreenHeader/HomeScreenHeader';
import AppCardContainer from '../../components/AppCardContainer';
import ProgressCircle from '../../components/ProgressCircle';
import { medications } from "../../data/sample_data.json";


const safePadding = '4%';

const HomeScreen = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={[backgroundStyle, { paddingHorizontal: safePadding }]}>

            <HomeScreenHeader />

            <AppCardContainer style={styles.progressCard}>
                <Text>Today's Progress</Text>
                <View style={styles.progressRow}>
                    <ProgressCircle progress={67} />
                    <View style={styles.progressTextContainer}>
                        <Text style={styles.progressText}>2 of 3 medications taken</Text>
                        <Text style={styles.nextMed}>Next: Atorvastatin at 6:00 PM</Text>
                    </View>
                </View>
            </AppCardContainer>


            <Text style={styles.timelineTitle}>Timeline</Text>
            <FlatList
                data={medications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <AppCardContainer style={styles.medicationCard}>
                        <Text style={styles.medicationName}>{item.name}</Text>
                        <Text style={styles.medicationDose}>{item.dosage}</Text>
                        <Text style={[styles.medicationTime, { color: item.status === 'taken' ? '#28A745' : '#888' }]}>
                            {item.status}
                        </Text>
                    </AppCardContainer>
                )}
            />

            <AppCardContainer style={styles.summaryCard}>
                <Text style={styles.summaryText}>View Weekly Summary</Text>
            </AppCardContainer>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    progressCard: {
    },
    progressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    progressTextContainer: {
        marginLeft: 20
    },
    progressText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    nextMed: {
        fontSize: 14,
        color: '#6C757D'
    },
    timelineTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
    medicationCard: { padding: 12 },
    medicationName: { fontSize: 16, fontWeight: 'bold' },
    medicationDose: { fontSize: 14, color: '#6C757D' },
    medicationTime: { fontSize: 14, marginTop: 5 },
    summaryCard: { alignItems: 'center', backgroundColor: '#D1ECF1' },
    summaryText: { fontSize: 16, fontWeight: 'bold', color: '#007BFF' },
});