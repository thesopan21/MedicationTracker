import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HealthDataScreen from './src/screens/HealthDataScreen/HealthDataScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MedicationScreen from './src/screens/MedicationScreen/MedicationScreen';
import MedicationDetailScreen from './src/screens/MedicationDetailScreen/MedicationDetailScreen';
import { MedicationProvider } from './src/context/MedicationContext';
import WeeklyAdherenceScreen from './src/screens/WeeklyAdherenceScreen/WeeklyAdherenceScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {


  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MedicationProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MedicationScreen" component={MedicationScreen} />
            <Stack.Screen name="MedicationDetailScreen" component={MedicationDetailScreen} />
            <Stack.Screen name="Calender" component={WeeklyAdherenceScreen} />
            <Stack.Screen name="HealthData" component={HealthDataScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MedicationProvider>
    </SafeAreaProvider>
  );
}

export default App;
