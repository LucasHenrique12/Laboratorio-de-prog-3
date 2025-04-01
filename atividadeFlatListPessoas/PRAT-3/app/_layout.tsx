/* import { Stack } from 'expo-router';
import UserProvider from '@/src/state/user';
import { ProductProvider } from '@/src/state/product/prvd';
export default function RootLayout() {
return (
<Product>
<Stack>
<Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
</Stack>
</Product>
);
} */

import { Suspense } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { Stack } from "expo-router";
import { SQLiteProvider, openDatabaseSync } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@/drizzle/migrations";
import { DATABASE_NAME } from "@/src/db/schema";
import { ProductProvider } from "@/src/state/product/prvd";
export default function RootLayout() {
  const expoDb = openDatabaseSync(DATABASE_NAME);
  const db = drizzle(expoDb);
  const { success, error } = useMigrations(db, migrations);
  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }
  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense
      >
        <ProductProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </ProductProvider>
      </SQLiteProvider>
    </Suspense>
  );
}
