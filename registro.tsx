import { TextInput } from "react-native-gesture-handler";
import ModalScreen from "./modalscreen";
import { PropsWithChildren } from "react";
import { Modal,StyleSheet } from "react-native";
import * as Crypto from 'expo-crypto'

type Props = PropsWithChildren<{isVisible: boolean;
   onClose: () => void;
   title?: string;
   }>;

export default function Registro({ isVisible, onClose}:Props){

   return (
      <ModalScreen isVisible={isVisible} onClose={onClose} title='MODAL'>
      <TextInput
          style={styles.input}
          placeholder="digite seu email"
          keyboardType="email-address"
        />
        Crypto.digest(algorithm, data)

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
 })