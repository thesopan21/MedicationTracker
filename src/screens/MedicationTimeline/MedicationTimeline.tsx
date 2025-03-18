import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppCardContainer from '../../components/AppCardContainer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export interface MedicationProps {
    id: string,
    name: string,
    dosage: string,
    quantity: string,
    time: string,
    instructions: string,
    specialNotes: string
    status: string
    takenAt: string | null
    inventory: number
    adherence: {
        weekly: number
    }
}

interface MedicationTimelineProps {
    medications: MedicationProps[]
}

interface RootStackParamList extends ParamListBase {
    MedicationDetailScreen: {
        item: MedicationProps
    }
}

const MedicationTimeline: FC<MedicationTimelineProps> = ({ medications }) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const weeklySummeryhandler = (item: MedicationProps) => {
        navigation.push('MedicationDetailScreen', { item })
    }

    const renderItem = ({ item, index }: { item: MedicationProps, index: number }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.dotContainer}>
                    <View style={[styles.dot, item.status === 'taken' ? styles.takenDot : styles.upcomingDot]} />
                    <View style={styles.line} />
                </View>
                <AppCardContainer style={styles.medicationInfo}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.medicationName}>{item.name}</Text>
                        <Text style={styles.medicationTime}>{item.time}</Text>
                    </View>
                    <Text style={styles.medicationDetail}>{item.dosage} - {item.quantity} - {item.instructions}</Text>
                    {
                        item.status === 'taken' ? (
                            <Text style={styles.takenText}>Taken at {item.takenAt}</Text>
                        ) : (
                            <Text style={styles.comingText}>Coming up in {item.time}</Text>
                        )
                    }
                </AppCardContainer>
            </View>
        );
    };


    const renderFooterComponent = () => {


        if (medications.length === 0) return null;
        const lastItem = medications[medications.length - 1];

        return (
            <TouchableOpacity style={styles.summaryButton} onPress={() => weeklySummeryhandler(lastItem)}>
                <Text style={styles.summaryButtonText}>View Weekly Summary</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Timeline</Text>
            <FlatList
                data={medications}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={renderFooterComponent}
                ListFooterComponentStyle={styles.listFooterStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentContainer: {
        height: '100%',
        paddingVertical: 2,
        paddingHorizontal: 6
    },
    listFooterStyle: {
    },
    itemContainer: {
        flexDirection: 'row',
    },
    dotContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    takenDot: {
        backgroundColor: 'green',
    },
    upcomingDot: {
        backgroundColor: 'lightgray',
    },
    line: {
        width: 2,
        height: 100,
        backgroundColor: 'lightgray',
    },
    medicationInfo: {
        flex: 1,
        marginBottom: 10,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    medicationName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    medicationTime: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 'auto',
    },
    medicationDetail: {
        fontSize: 14,
        marginTop: 4,
    },
    takenText: {
        fontSize: 14,
        color: 'green',
        marginTop: 4,
    },
    comingText: {
        fontSize: 14,
        color: '#1483fa',
        marginTop: 4,
    },
    summaryButton: {
        backgroundColor: '#e8e5e3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        bottom: -40,
    },
    summaryButtonText: {
        color: '#1483fa',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MedicationTimeline;