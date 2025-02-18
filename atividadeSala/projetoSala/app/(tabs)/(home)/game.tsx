import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Text, View } from "react-native";
import { ThemedTextProps } from '../../../src/components/ThemedText';
import { type ComponentProps } from 'react';
import Details from './hard';
import { Link } from "expo-router";

export default function Game() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <ThemedText type="title"><Link href={'/easy'}>Facíl</Link></ThemedText>
       <ThemedText type="title"><Link href={'/medium'}>Intermadiario</Link></ThemedText>
       <ThemedText type="title"><Link href={'/hard'}>Dificil</Link></ThemedText>
      
    </ThemedView>
  );
}
