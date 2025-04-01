import ModalScreen from "@/src/cp/ModalScreen";
import { ThemedView } from "@/src/cp/ThemedView";
import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Product } from "@/src/model/product";
import { Button } from "@/src/cp/Button";
import { useContextProduct } from "@/src/state/product/ctx";
import { ProductActionTypes } from "@/src/state/product/types";
type RegisterProps = {
  visible: boolean;
  handleClose: () => void;
};
export function RegisterScreen({ visible, handleClose }: RegisterProps) {
  const { dispatch } = useContextProduct();
  const [ID, setID] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    const newProduct = new Product(price, name);
    setID(newProduct.id);
    dispatch({
      type: ProductActionTypes.ADD_PRODUCT,
      payload: { ...newProduct.data },
    });
    handleClose();
  };
  return (
    <ModalScreen
      isVisible={visible}
      onClose={handleClose}
      title="Registrar
    Produto"
    >
      <View style={styles.overlay}>
        <ThemedView style={styles.container}>
          <Text style={styles.id}>ID: {ID}</Text>
          <View style={styles.input}>
            <TextInput
              value={price}
              placeholder="Informe o preço: "
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              value={name}
              placeholder="Nome do produto: "
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <ThemedView style={styles.footer}>
            <Button
              label="Save"
              iconame="save"
              theme="primary"
              onPress={handleClick}
            />
          </ThemedView>
        </ThemedView>
      </View>
    </ModalScreen>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    maxHeight: 350,
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 8,
  },
  footer: {
    alignSelf: "center",
  },
  input: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    marginBottom: 6,
    padding: 6,
    width: "100%",
  },
  id: {
    color: "grey",
    margin: 10,
  },
});
