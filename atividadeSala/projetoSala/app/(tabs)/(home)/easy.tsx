import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Easy() {


  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        
        <ThemedText type="title">Easy</ThemedText>
        <ThemedText type="subtitle"><Link dismissTo href="/(tabs)">Voltar</Link></ThemedText>
        
      
    </ThemedView>
  );
}
