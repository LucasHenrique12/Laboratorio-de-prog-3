import { Stack } from 'expo-router';
export default function StackLayout() {
return (
<Stack screenOptions={{ headerShown: false }}>
<Stack.Screen name="easy" />
<Stack.Screen name="medium" />
<Stack.Screen name="hard" />
</Stack>
);
}