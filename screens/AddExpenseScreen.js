import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../themes";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants/index";

export default function AddExpenseScreen() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const handleAddExpense = () => {
    if (title && amount && category) {
      //good to go
      navigation.goBack();
    } else {
      //show error
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0 z-10">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Add Expense
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-72 w-72"
              source={require("../assets/images/15.png")}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput
              value={title}
              onChangeText={(value) => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              How Much?
            </Text>
            <TextInput
              value={amount}
              onChangeText={(value) => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className="font-bold text-lg">Category</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map((cat) => {
                let bgColor = "bg-white";
                if (cat.value == category) bgColor = "bg-green-200";
                return (
                  <TouchableOpacity
                    key={cat.value}
                    onPress={() => setCategory(cat.value)}
                    className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}
                  >
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddExpense}
            style={{ backgroundColor: colors.button }}
            className="my-6 rounded-full p-4 shadow-sm mx-2"
          >
            <Text className="text-center text-white font-bold text-lg">
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
