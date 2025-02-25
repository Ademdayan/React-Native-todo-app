import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => alert("Menu Açıldı!")}>
        <Ionicons name="menu" size={24} color={"#333"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../assets/images/OKAN.png")}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    top: 5,
  },
});
