import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello World!</Text>
      </View>
      <Text style={{margin: 8, borderWidth: 2, borderColor: 'red', padding:16}}>Hello, Dmitry!!!</Text>
      <Button title='Click me' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 8,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue'
  }
});
