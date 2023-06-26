import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../themes";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";

const items = [
  {
    id: 1,
    place: "Lagos",
    country: "Nigeria",
  },
  {
    id: 2,
    place: "Santon",
    country: "South Africa",
  },
  {
    id: 3,
    place: "Manchester",
    country: "England",
  },
  {
    id: 4,
    place: "Washington D.C",
    country: "America",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Budgetify
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome")}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center mx-4 mb-4">
        <Image
          source={require("../assets/images/heroBanner.jpg")}
          className="w-full h-80 rounded-xl"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Budgets
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddBudget")}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          >
            <Text className={colors.heading}>Add Budget</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 600 }}>
          <FlatList
            data={items}
            numColumns={4}
            ListEmptyComponent={
              <EmptyList message={"You don't have any budget planed yet."} />
            }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("BudgetExpense", { ...item })
                  }
                  className="bg-white p-3 rounded-xl mb-3 shadow-sm"
                >
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs`}>
                      {item.place}
                    </Text>
                    <Text>{item.country}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
