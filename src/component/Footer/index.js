import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import Games from '../Games';

export default function Footer() {
  const navigation = useNavigation();

 return (
   <View>
       <Text style={styles.title}>MAIS PROCURADOS</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
             <Games img={require('../../assets/mortal-kombat-xl.png')} cost="R$69.99" onClick={()=> navigation.navigate('Mk') }>
                Mortal Kombat XL
             </Games>
            </View>
            <View style={{marginHorizontal: 10}}>
             <Games img={require('../../assets/horizon-zero-dawn.png')} cost="R$115.80" onClick={()=> navigation.navigate('Hzd') }>
               Horizon Zero Dawn
             </Games>
            </View>
            <View style={{marginHorizontal: 10}}>
             <Games img={require('../../assets/immortals_fenyx_rising.png')} cost="R$269.80" onClick={()=> navigation.navigate('Detail') }>
               Immortals Fenyx Rising
             </Games>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'DotGothic16_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})