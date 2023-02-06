import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isStateOpen, setStateOpen] = useState(true);
  return (
    <View style={styles.container}>
      <Image
          source={
              {uri: 'https://picsum.photos/200/300'}
          }
      />

      <View>
        <Button
          title='Quản Lí abc'
        />

        <Button
          title='About'
        />
      </View>
      <StatusBar style="auto" />
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
});
