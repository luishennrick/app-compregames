import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Codwwii({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Call Of Duty WWII'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/call-of-duty-wwii.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Call Of Duty WWII</Text>
         </View>
         

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Descrição:
          </Text>
          <Text style={styles.textContent}>
           A experiência definitiva da próxima geração da Segunda Guerra Mundial! Em três modos de jogos diferentes: Campanha, Multijogador e Cooperativo. 
          </Text>
          <Text style={styles.textList}>
            - Categoria: Jogos
          </Text>
          <Text style={styles.textList}>
            - Console: PS4
          </Text>
         </View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 249.99</Text>
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