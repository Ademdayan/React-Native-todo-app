import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
};

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={24} color={"#333"} />
      <TextInput
        placeholder="Ara..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
        clearButtonMode="always"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
