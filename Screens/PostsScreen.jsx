import { View, Text, StyleSheet } from "react-native";

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <Text>PostScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
