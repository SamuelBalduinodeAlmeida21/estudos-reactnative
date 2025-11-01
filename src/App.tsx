//OBS: instale as bibliotecas que forem recomendadas pelo expo, pra evitar bugs e dor de cabeça

//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import { Text } from 'react-native';
// SafeAreaView = ele gerencia o espaço seguro de onde os components e tags devem estar
import { SafeAreaView } from "react-native-safe-area-context";
import { FirstComponent } from "./shared/components/FirstComponent";
import { MyBt } from "./shared/components/MyBt";
import { useState } from 'react';

export default function App() {
  const [state, setState] = useState("Teste do USESTATE");

  console.log("render")
  return (
  
  <SafeAreaView> 
    <FirstComponent order={1} />
    <FirstComponent order={2} />
    <FirstComponent order={3} />
      
    <MyBt order={4} onPress={() => setState('Teste 2')} /*esse concole.log, foi definido para mostrar a mensagem que tá dentro dele no proprio temrinal do VS CODE assim que for clicado*/>
      <Text> Botão {state}</Text>
    </MyBt>
    
    <MyBt order={5} onPress={() => <></>}>
      <Text> Botão</Text>
    </MyBt>
  </SafeAreaView>
  
  );
}