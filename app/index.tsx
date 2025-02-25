import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ToDoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ToDoType = {
  id: number;
  title: string;
  isDone: boolean;
};

export default function HomeScreen() {
  const [todos, setTodos] = useState<ToDoType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const getTodos = async () => {
      try {
        const todos = await AsyncStorage.getItem("my-todo");
        if (todos !== null) {
          setTodos(JSON.parse(todos));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, []);

  const saveTodos = async (newTodos: ToDoType[]) => {
    try {
      await AsyncStorage.setItem("my-todo", JSON.stringify(newTodos));
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = (title: string) => {
    const newTodo = { id: Date.now(), title, isDone: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const handleDone = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <FlatList
        data={[...filteredTodos].reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ToDoItem todo={item} deleteTodo={deleteTodo} handleDone={handleDone} />
        )}
      />

      <AddTodo addTodo={addTodo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
});
