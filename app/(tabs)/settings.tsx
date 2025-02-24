import { Text, View } from "react-native";
import { ThemedText } from '../../src/components/ThemedText';

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type="subtitle">Settings</ThemedText>
    </View>
  );
}
