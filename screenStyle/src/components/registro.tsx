import { TextInput } from "react-native-gesture-handler";
import ModalScreen from "./modalscreen";
import { PropsWithChildren, useState } from "react";
import { Modal,StyleSheet,Text, View } from "react-native";
import { Button } from "./button";
import * as Crypto from 'expo-crypto'
import { ThemedText } from "./ThemedText";

type Props = PropsWithChildren<{isVisible: boolean;
   onClose: () => void;
   title?: string;
   }>;
   

export default function Registro({ isVisible, onClose}:Props){
   const [texto,setTexto] = useState("");
   const[codigo,setCodigo]=useState("");

   const genUUID = () => {
     
      setCodigo(Crypto.randomUUID()
   );
       
    };

   return (
      <ModalScreen isVisible={isVisible} onClose={onClose} title='MODAL'>
      <View> 
      <TextInput
          style={styles.input}
          placeholder="digite seu email"
          keyboardType="email-address"
          value={texto} 
         onChangeText={setTexto} 
        />
        <Button theme="primary" label="codeGen" onPress={genUUID} />
        <ThemedText type="subtitle">{texto}</ThemedText>
        <ThemedText type="subtitle">{codigo}</ThemedText>
      </View>
         </ModalScreen>
   );
}

   

const styles = StyleSheet.create({
   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
     backgroundColor:'#fff',
   },
   codigoText: {
      flex:1,
      justifyContent:'center',
      
    },
 })