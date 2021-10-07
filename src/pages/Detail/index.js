import React, {useEffect, useState, useContext} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Button from '../../component/Button';
import Footer from '../../component/Footer';
import getProduct from '../../service/gameservice.js';
import CartContext from '../../cartcontext';

export default function Detail({navigation}) {

  
  const [product, setProduct] = useState({});
  
  const { addItemToCart } = useContext(CartContext);
  
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  function onAddToCart() {
    addItemToCart(product.id);
  }

  navigation.setOptions({
     headerTitle: 'Immortals Fenyx Rising'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/immortals_fenyx_rising.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Immortals Fenyx Rising</Text>
         </View>
         

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Descrição:
          </Text>
          <Text style={styles.textContent}>
           Em Immortals Fenyx Rising, jogue como Fenyx, um novo semideus alado, em uma missão para salvar os deuses gregos e seu lar de uma maldição.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Jogos
          </Text>
          <Text style={styles.textList}>
            - Console: Xbox One
          </Text>
         </View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 269.80</Text>
         </View>

          <Button onPress={onAddToCart} />

          <View style={styles.line} />

         <Footer/>

      </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '50%'
  },
  title:{
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});