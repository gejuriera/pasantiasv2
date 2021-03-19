import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,Text,View } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import CreateUserScreen from "./screens/CreateUserScreen";
import Login from "./screens/Login";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
          
          
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen}
        options={{ title: "Registrarse" }}
      />
      <Stack.Screen name="Login" component={Login}
        options={{ title: "Iniciar Sesion" }}
      />
      
      <Stack.Screen name="UsersList"component={UsersList}
        options={{ title: "Users List" }}
      />
      
      <Stack.Screen name="UserDetailScreen"component={UserDetailScreen}
        options={{ title: "User Detail" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
  },
});

