import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native';


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
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
});

export default AppCardContainer