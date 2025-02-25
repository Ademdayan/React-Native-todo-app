import { View, TextInput, TouchableOpacity, StyleSheet, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type AddTodoProps = {
  addTodo: (text: string) => void;
};

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [todoText, setTodoText] = useState<string>("");

  const handleAdd = () => {
    if (todoText.trim() === "") return;
    addTodo(todoText);
    setTodoText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.footer}>
      <TextInput
        placeholder=" Yeni bir görev ekleyin..."
        value={todoText}
        onChangeText={setTodoText}
        style={styles.newTodoInput}
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Ionicons name="add" size={34} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  newTodoInput: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#4630EB",
    padding: 8,
    borderRadius: 10,
    marginLeft: 20,
  },
});
