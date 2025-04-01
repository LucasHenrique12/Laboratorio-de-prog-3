import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemedText } from './ThemedText';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
  title?: string;
}>;

export default function ModalScreen({ isVisible, children, onClose,title="Modal" }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.backDrop}>
        <View style={styles.modalContainer}>
          <View style={styles.titleBar}>
            <View style={styles.titleContainer}>
              <ThemedText type='subtitle'>{title}</ThemedText>
            </View>
            <View style={styles.titleButton}>
              <Pressable onPress={onClose}>
                <MaterialIcons name="close" color="#fff" size={22} />
              </Pressable>
            </View>
          </View>
          <View style={styles.modalContent}>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backDrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    opacity: 1.0,
    backgroundColor: '#25292e',
  },
  modalContent: {
    backgroundColor: '#25292e',
    margin: 12,
  },
  titleBar: {
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    padding: 8,
    height: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleButton: {
    backgroundColor: '#f7072f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
