import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Function/Navigation";
import "react-native-url-polyfill/auto";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
