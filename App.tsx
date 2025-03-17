import React from 'react';
import {
  Image,
  ImageComponent,
  Pressable,
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
import { PlusIcon } from './src/assets/appIcons';
import AppIcon from './src/components/AppIcon';
import HomeScreenHeader from './src/screeens/HomeScreen/HomeScreenHeader/HomeScreenHeader';


const safePadding = '5%';

function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <HomeScreenHeader />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
