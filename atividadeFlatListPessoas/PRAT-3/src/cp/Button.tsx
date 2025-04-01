import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type IconSymbolName = React.ComponentProps<typeof FontAwesome>['name'];

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
  iconame?: IconSymbolName;
};

export function Button({ label, theme, iconame='picture-o', onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#e6d6a0', borderRadius: 18 },
        ]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <FontAwesome name={iconame} size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
