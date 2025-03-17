import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import AppIcon from '../../../components/AppIcon'
import { PlusIcon } from '../../../assets/appIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const safePadding = '2%';

const HomeScreenHeader = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={[styles.headerContainer, backgroundStyle]}>
            <Text>
                Medications Tracker
            </Text>
            <Pressable>
                <AppIcon source={PlusIcon} borderRadious={20} />
            </Pressable>
        </View>
    )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: safePadding,
        paddingVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})