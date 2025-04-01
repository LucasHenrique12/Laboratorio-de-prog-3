import ModalScreen from "@/src/cp/ModalScreen";
import { ThemedView } from "@/src/cp/ThemedView";
import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { User } from "@/src/model/user";
import { Button } from "@/src/cp/Button";
import { useContextUser } from "@/src/state/user/ctx";
import { UserActionTypes } from "@/src/state/user/types";

type RegisterProps = {
  visible: boolean;
  handleClose: () => void;
};
export function RegisterScreen({ visible, handleClose }: RegisterProps) {
  const { dispatch } = useContextUser();
  const [ID, setID] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const handleClick = () => {
    const newUser = new User(email, name);
    setID(newUser.id);
    dispatch({ type: UserActionTypes.ADD_USER, payload: newUser.data });
    handleClose();
  };
  return (
    <ModalScreen
      isVisible={visible}
      onClose={handleClose}
      title="Registro de
    Usuário"
    >
      <ThemedView style={styles.container}>
        <Text style={styles.id}>ID: {ID}</Text>
        <View style={styles.input}>
          <TextInput
            value={email}
            placeholder="Informe e-mail: "
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            value={name}
            placeholder="Informe nome: "
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
    </ModalScreen>
  );
}
const styles = StyleSheet.create({
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
