import { Button } from "@/src/cp/Button";
import { ThemedView } from "@/src/cp/ThemedView";
import { StyleSheet } from "react-native";
import { useState } from "react";
import RegisterScreen from "../register";
import ProductListScreen from "../productList";

export function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ProductListScreen />
      </ThemedView>
      <ThemedView style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Adicionar Produto"
          onPress={() => setIsModalVisible(true)}
        />
      </ThemedView>
      <RegisterScreen visible={isModalVisible} handleClose={onModalClose} />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  footerContainer: {
    height: 60,
    alignItems: "center",
  },
});
