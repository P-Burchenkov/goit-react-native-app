import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import PostScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName="Post"
    >
      <MainTab.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => (
            <TouchableOpacity
              style={styles.logout}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...styles.tabBarIconWrapper,
                  width: focused ? 70 : 40,
                  backgroundColor: focused ? "#FF6C00" : "#FFFFFF",
                }}
              >
                <Ionicons
                  name="md-grid-outline"
                  size={24}
                  color={focused ? "#FFFFFF" : "#212121"}
                />
              </View>
            );
          },
          tabBarAccessibilityLabel: "Screen of user`s posts",
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitleStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...styles.tabBarIconWrapper,
                  width: focused ? 70 : 40,
                  backgroundColor: focused ? "#FF6C00" : "#FFFFFF",
                }}
              >
                <Ionicons
                  name="add"
                  size={24}
                  color={focused ? "#FFFFFF" : "#212121"}
                />
              </View>
            );
          },
          tabBarAccessibilityLabel: "Screen of creating post",
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...styles.tabBarIconWrapper,
                  width: focused ? 70 : 40,
                  backgroundColor: focused ? "#FF6C00" : "#FFFFFF",
                }}
              >
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={focused ? "#FFFFFF" : "#212121"}
                />
              </View>
            );
          },
          tabBarAccessibilityLabel: "Screen of user profile",
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    fontFamily: "Roboto-Medium",
    color: "#212121",
  },
  logout: {
    marginRight: 10,
  },

  tabBarIconWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
  },
  tabBarStyle: {
    height: 60,
    paddingTop: 9,
    paddingBottom: 9,
  },
});
