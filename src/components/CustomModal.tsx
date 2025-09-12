import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Card, IconButton } from "react-native-paper";
import { useAppTheme } from "../hooks/colorTheme";

interface ModalItem {
  id: string;
  icon: string;
  label: string;
  onPress: () => void;
}

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  items: ModalItem[];
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  items,
}) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.modalTitle}>{title}</Text>
            <IconButton icon="close" size={24} onPress={onClose} />
          </View>

          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
            
                <TouchableOpacity style={styles.itemCard} onPress={item.onPress}>
                  <View style={styles.itemRow}>
                    <IconButton icon={item.icon} size={24} />
                    <Text style={styles.itemText}>{item.label}</Text>
                  </View>
                </TouchableOpacity>

            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const getStyles = (theme: any) =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    modalContainer: {
      backgroundColor: theme.card,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 16,
      maxHeight: "70%",
    },
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },
    modalTitle: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 18,
      color: theme.text,
    },
    itemCard: {
      marginVertical: 5,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#d1d5db",
      backgroundColor: theme.background,
      elevation: 2,
    },
    itemRow: {
      flexDirection: "row",
      alignItems: "center",
    
    },
    itemText: {
      fontFamily: "Poppins-Regular",
      fontSize: 15,
      color: theme.text,
      marginLeft: 8,
    },
  });
