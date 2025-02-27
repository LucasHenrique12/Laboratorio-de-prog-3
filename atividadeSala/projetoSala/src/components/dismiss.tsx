import { Button, View, Text } from 'react-native';

import { useRouter } from 'expo-router';


export default function Settings() {
  const router = useRouter();

  const handleDismissAll = () => {
    router.dismissTo('/')
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Voltar" onPress={handleDismissAll} />
    </View>
  );
}
