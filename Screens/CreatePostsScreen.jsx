import { View, Text, StyleSheet } from "react-native";

export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <Text>CreatePostScreen</Text>
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
