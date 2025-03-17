import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Svg, Circle } from 'react-native-svg';

interface ProgressCircleProps {
    progress: number; // Value between 0 - 100
}

const ProgressCircle: FC<ProgressCircleProps> = ({ progress }) => {

    const radius = 30;
    const strokeWidth = 5;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (progress / 100) * circumference;

    return (
        <View style={styles.container}>
            <Svg width={80} height={80} viewBox="0 0 80 80">
                {/* Background Circle */}
                <Circle cx="40" cy="40" r={radius} stroke="#E5E5E5" strokeWidth={strokeWidth} fill="none" />
                {/* Progress Circle */}
                <Circle
                    cx="40"
                    cy="40"
                    r={radius}
                    stroke="#FF6B6B"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={progressOffset}
                    strokeLinecap="round"
                    fill="none"
                />
            </Svg>
            <Text style={styles.text}>{`${progress}%`}</Text>
        </View>
    )
}

export default ProgressCircle

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 20
    },
    text: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
});