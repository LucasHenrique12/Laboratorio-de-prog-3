import { ThemedText } from "@/src/components/ThemedText";
import { Text, View } from "react-native";


export default function Details() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type='subtitle'>Details</ThemedText>
    </View>
  );
}