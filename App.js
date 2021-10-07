import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts,DotGothic16_400Regular } from '@expo-google-fonts/dotgothic16';

import Routes from './src/router';


export default function App() {

  let [fontsLoaded] = useFonts({
    DotGothic16_400Regular,
  });


  if(!fontsLoaded){
    return <AppLoading/>;
  } 
  
  else{

  return(
    <>
      <StatusBar style="light" backgroundColor="#444" translucent={true}/>
      <Routes></Routes>
    </>
  );

}

}