import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import Settings from "@/src/components/dismiss";
export default function Hard() {

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type="title">Melhore</ThemedText>
       <Settings></Settings>
    </ThemedView>
  );
}
