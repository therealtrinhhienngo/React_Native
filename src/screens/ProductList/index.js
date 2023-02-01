import { StyleSheet, Text, FlatList, Image } from "react-native";

const ProductItem = (props) => {
    const item = props.item;

    return (
        <>
            <Text>Họ và tên: {item.name}</Text>
            <Text>Mã sinh viên: {item.id}</Text>
            <Image source={
                {uri: 'https://picsum.photos/200/300'}
                // require('../../../assets/favicon.png')
            }
                style={styles.productImage} />
        </>
    );
}

const ProductList = (props) => {
    const list = props.data || {};

    return (
        <FlatList
            data={list}
            renderItem={({item}) => <ProductItem item={item}/>}
            keyExtractor={(item) => item.id}
        />
    );
};

export default ProductList;

const styles = StyleSheet.create({
    productImage: {
        width: 100,
        height: 100
    }
});