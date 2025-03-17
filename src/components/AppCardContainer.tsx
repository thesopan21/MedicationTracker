import React, { FC } from 'react'
import { Platform, StyleSheet, View, ViewStyle } from 'react-native';


interface AppCardContainerProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const AppCardContainer: FC<AppCardContainerProps> = ({ children, style }) => {
    return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.85, 
                shadowRadius: 12, 
            },
            android: {
                elevation: 3, 
            },
        }),
    },
});

export default AppCardContainer