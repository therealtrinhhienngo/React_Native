import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

import ProductList from './src/screens/ProductList';

export default function App() {
  // Hàm trả về giá trị tên
  const adDataObject = (props) =>{
    return props;
  }

  const [status, setStatus] = useState(false);

  const list = [
    {id: 1, name: 'Bún Bò Huế', price: 30000},
    {id: 2, name: 'Bún Mọc', price: 30000},
    {id: 3, name: 'Bún Cua', price: 30000},
    {id: 4, name: 'Bún Bò Huế', price: 30000},
    {id: 5, name: 'Bún Mọc', price: 30000},
    {id: 6, name: 'Bún Cua', price: 30000},
  ];

  return (
    <View style={styles.container}>
      <View>
        <TextInput 
            placeholder='Họ và tên'
            style={styles.borderInput}
        />
        <TextInput
            placeholder='Mã sinh viên'
            style={styles.borderInput}/>
      </View>

      <Button
        title="Thêm Mới"
        color="blue"
      />

        <Button
          color='blue'
          title={
            status
              ? 'Ẩn'
              : 'Hiện'
          }
          onPress={() => setStatus(!status)}
        />
        {
          status
            ? <>
                <ProductList data={list}/>
              </>
            : <>
            <ProductList data={0}/>
          </>
        }
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

  borderInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
