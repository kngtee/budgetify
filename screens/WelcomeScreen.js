import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../themes";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="flex h-full justify-around">
        <View className="flex-col items-center justify-center mt-10">
          <Image
            source={require("../assets/images/welcome.png")}
            className="h-96 w-96"
          />
          <View>
          <Text
            className={`text-center font-bold text-4xl ${colors.heading} mb-10`}
          >
            Budgetify
          </Text>
          </View>
        </View>
        <View>
          
        </View>
        <View className="mx-5 mb-20">
          {/* <Text
            className={`text-center font-bold text-4xl ${colors.heading} mb-10`}
          >
            Budgetify
          </Text> */}

          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            className="p-3 rounded-full shadow mb-5"
            style={{ backgroundColor: colors.button }}
          >
            <Text className="text-center text-lg text-white font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="p-3 rounded-full shadow"
            style={{ backgroundColor: colors.button }}
          >
            <Text className="text-center text-lg text-white font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
