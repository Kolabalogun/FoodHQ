import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard title="Testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Testing" imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  );
};

export default Categories;
