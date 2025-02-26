
import { Button } from "@/src/components/button";
import { ImageViewer } from "@/src/components/ImageViewer";
import { ThemedView } from "@/src/components/ThemedView";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import ModalScreen from "@/src/components/modalscreen";
const PlaceholderImage = require("@/assets/images/kapo.png");

export function HomeScreen() {
   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
   const onModalClose = () => {
   setIsModalVisible(false);
   };
   const clickDetails = () => {
   router.navigate("/details")
   }
   return (
   <ThemedView style={styles.container}>
   <ThemedView style={styles.imageContainer}>
   <ImageViewer imgSource={PlaceholderImage} />
   </ThemedView>
   <ThemedView style={styles.footerContainer}>
   <Button theme="primary" label="Modal" onPress=
   {()=>setIsModalVisible(true)} />
   <Button label="Details" onPress={clickDetails} />
   </ThemedView>
   <ModalScreen isVisible={isModalVisible} onClose={onModalClose}>
   {/* aqui fica o conteúdo do modal */}
   </ModalScreen>
   </ThemedView>
   );
   }
   const styles = StyleSheet.create({
   container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   },
   imageContainer: {
   flex: 1,
   },
   footerContainer: {
   flex: 1 / 3,
   alignItems: "center",
   },
   });