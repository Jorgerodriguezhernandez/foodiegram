import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BarraTop from './components/BarraTop';
import Comentarios from './components/Comentarios';
import Tarjeta from './components/Tarjeta';
export default function App() {
  return (
    <View style={styles.container}>
      
      <BarraTop/>
      <Tarjeta/>
      
      <StatusBar style="auto"/>
      <Comentarios/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
 
});
