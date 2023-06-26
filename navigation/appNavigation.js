import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddBudgetScreen from "../screens/AddBudgetScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import BudgetExpenseScreen from "../screens/BudgetExpenseScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddBudget"
          component={AddBudgetScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddExpense"
          component={AddExpenseScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BudgetExpense"
          component={BudgetExpenseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
