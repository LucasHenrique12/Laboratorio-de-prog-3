import { UserProvider } from '@/src/state/user/prvd';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <UserProvider>
    <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
    </Stack>
    </UserProvider>
  );
}

/*
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}

*/