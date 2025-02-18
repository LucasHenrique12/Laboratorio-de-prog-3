import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <ThemedText type="title"><Link href={'/(tabs)/(home)/game'}>Jogar</Link></ThemedText>
      <ThemedText type="title"><Link href={'/(tabs)/(home)/game'}>Recomeçar</Link></ThemedText>
      <ThemedText type="title"><Link href={'/(tabs)/(home)/ranking'}>Ranking</Link></ThemedText>
    </ThemedView>
  );
}
