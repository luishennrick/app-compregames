import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Thewitcher({ navigation }) {

  navigation.setOptions({
     headerTitle: 'The Witcher III'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/the-witcher-iii-wild-hunt.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>The Witcher III Wild Hunt</Text>
         </View>
         

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Descrição:
          </Text>
          <Text style={styles.textContent}>
           Torne-se um caçador de monstros profissional e embarque em uma aventura de proporções épicas! Em seu lançamento, The Witcher 3: complete edition logo se tornou um clássico, recebendo mais de 250 prêmios de Jogo do Ano.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Jogos
          </Text>
          <Text style={styles.textList}>
            - Console: PS4
          </Text>
         </View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 119.50</Text>
         </View>

          <Button/>

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
    width: '40%'
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