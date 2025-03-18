import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AppCardContainer from '../../components/AppCardContainer';


interface MedicationProps {
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

const MedicationTimeline: FC<MedicationTimelineProps> = ({ medications }) => {

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

    //     const medicationHour = parseInt(medicationTime.split(':')[0]);
    //     const medicationMinute = parseInt(medicationTime.split(':')[1].split(' ')[0]);

    //     const now = new Date();
    //     const currentHour = now.getHours();
    //     const currentMinute = now.getMinutes();

    //     const medicationTimeInMinutes = medicationHour * 60 + medicationMinute;
    //     const currentTimeInMinutes = currentHour * 60 + currentMinute;

    //     const differenceInMinutes = medicationTimeInMinutes - currentTimeInMinutes;

    //     if (differenceInMinutes <= 0) {
    //         return "Past time";
    //     }

    //     const hours = Math.floor(differenceInMinutes / 60);
    //     const minutes = differenceInMinutes % 60;

    //     if (hours > 0) {
    //         return `in ${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`;
    //     } else {
    //         return `in ${minutes} minute${minutes > 1 ? 's' : ''}`;
    //     }
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Timeline</Text>
            <FlatList
                data={medications}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentContainer: {
        paddingVertical: 2,
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
});

export default MedicationTimeline;