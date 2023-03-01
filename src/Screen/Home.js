import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import {
  ChevronDownIcon,
  UserIcon,
  DocumentMagnifyingGlassIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native";
import Categories from "../Components/Category/Categories";
import FeaturedRow from "../Components/Featured/FeaturedRow";
import client from "../../sanity";

const Home = ({ navigation }) => {
  const [featuredCategories, featuredCategoriesF] = useState([]);

  // get data from Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured'] {
          ...,
        restaurants[]-> {
          ...,
          dishes[]->
        }
        }`
      )
      .then((data) => {
        featuredCategoriesF(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-2 flex-1">
      <View className=" flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className=" font-bold text-gray-400 text-xs">Deliver Now</Text>

          <View className=" flex-row items-center">
            <Text className="font-bold flex-row text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00ccbb" />
          </View>
        </View>
        <UserIcon
          size={32}
          onPress={() => navigation.navigate("MyModal")}
          color="#00ccbb"
        />
      </View>

      {/* Search  */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-2  flex-1 items-center">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants and cuisines" />
        </View>
        <AdjustmentsVerticalIcon
          onPress={() => navigation.navigate("mo")}
          size={25}
          color="#00ccbb"
        />
      </View>

      {/* Body  */}

      <ScrollView className="bg-gray-100">
        <Categories />

        {/* Featured  */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
