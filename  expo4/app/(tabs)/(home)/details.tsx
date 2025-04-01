import { ThemedText } from "@/src/cp/ThemedText";
import { ThemedView } from "@/src/cp/ThemedView";

export default function Details() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type='title'>Details</ThemedText>
    </ThemedView>
  );
}
