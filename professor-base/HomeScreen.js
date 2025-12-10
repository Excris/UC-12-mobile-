import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView }  from 'react-native-safe-area-context';
const background = require('../assets/background.png');
 
export default function HomeScreen() {
  return(  
    <ImageBackground source={background} style={styles.background}>
 
      {/* para utilizar o <SafeAreaView> é preciso instalar com "npm install react-native-safe-area-context" */}
      <SafeAreaView>
 
      </SafeAreaView>
    </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
});