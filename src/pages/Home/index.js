import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Games from '../../component/Games';

export default function Home() {
    const navigation = useNavigation();

    return (
       <View style={styles.container}>
          <View style={styles.header}>
              <Image source={require('../../assets/games-thumb.png')}style={styles.image}>
              </Image>
            <View style={styles.textContainer}>
             <Text style={styles.text}>Video Game</Text>
             <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
             <Text style={[styles.text, { color: '#CECECF'} ]}>Jogos</Text>
                <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                  <MaterialIcons
                     name="filter-list"
                     size={24}
                     color="#000"/>
                </TouchableOpacity>
            </View>
          </View>

       <View style={styles.line} />
        <ScrollView>
         <Text style={styles.text}>DISPONÍVEIS</Text>

         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Games img={require('../../assets/fifa-18.png')} cost="R$195.39" onClick={()=> navigation.navigate('Fifa') }>
                   FIFA 18
             </Games>
             <Games img={require('../../assets/the-witcher-iii-wild-hunt.png')} cost="R$119.50" onClick={()=> navigation.navigate('thewitcher') }>
                   The Witcher III Wild Hunt
             </Games>
         </View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Games img={require('../../assets/call-of-duty-wwii.png')} cost="R$249.99" onClick={()=> navigation.navigate('codwwii') }>
                   Call Of Duty WWII
             </Games>
             <Games img={require('../../assets/call-of-duty-infinite-warfare.png')} cost="R$49.99" onClick={()=> navigation.navigate('codiw') }>
               Call Of Duty Infinite Warfare
             </Games>
         </View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Games img={require('../../assets/mortal-kombat-xl.png')} cost="R$69.99" onClick={()=> navigation.navigate('Mk') }>
                Mortal Kombat XL
             </Games>
             <Games img={require('../../assets/shards-of-darkness.png')} cost="R$71.94" onClick={()=> navigation.navigate('Sod') }>
               Shards of Darkness
             </Games>
         </View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Games img={require('../../assets/horizon-zero-dawn.png')} cost="R$115.80" onClick={()=> navigation.navigate('Hzd') }>
               Horizon Zero Dawn
             </Games>
             <Games img={require('../../assets/terra-media-sombras-de-mordor.png')} cost="R$79.99" onClick={()=> navigation.navigate('TM') }>
               Terra Média: Sombras de Mordor
             </Games>
         </View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Games img={require('../../assets/super-mario-odyssey.png')} cost="R$197.88" onClick={()=> navigation.navigate('SuperMario') }>
               Super Mario Odyssey
             </Games>
             <Games img={require('../../assets/immortals_fenyx_rising.png')} cost="R$269.80" onClick={()=> navigation.navigate('Detail') }>
               Immortals Fenyx Rising
             </Games>
         </View>
         
         </ScrollView>
      
      </View>
    );
    }

    const styles = StyleSheet.create({
        container:{
          flex:1,
          width: '100%',
          backgroundColor: '#FFF'
        },
        header:{
          marginBottom: 8
        },
        image:{
          width: '100%'
        },
        textContainer:{
          flexDirection: 'row',
          marginVertical: '5%',
          marginHorizontal: '5%'
        },
        text:{
          fontFamily: 'DotGothic16_400Regular',
          fontSize: 26,
          marginHorizontal: '1%'
        },
        line:{
          borderBottomColor: '#D8d8d8',
          borderBottomWidth: 2,
        }
      });