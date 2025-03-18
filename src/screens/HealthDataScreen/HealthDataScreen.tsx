import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from '../../components/Footer'

const HealthDataScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 12
            }}>

                <Text style={{
                    color: '#000',
                    fontSize: 20,
                    textAlign: 'center'
                }}>
                    Health Data Screen upcomming feature
                </Text>
            </View>

            <Footer />
        </SafeAreaView>
    )
}

export default HealthDataScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})