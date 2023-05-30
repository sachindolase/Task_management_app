import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

const ListDemo = () => {
  const names = [
    {
      index: "1",
      name: "vinod",
      
    },
    {
      index: "2",
      name: "sachin",
    },
    {
      index: "3",
      name: "rakesh",
    },
    {
      index: "4",
      name: "rohan",
    },
    {
      index: "5",
      name: "roshan",
    },
    {
      index: "6",
      name: "saurabh",
    },
    {
      index: "7",
      name: "Manish",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
      horizontal
      inverted
      //   numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text style={styles.textStyle}> {item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    padding: 30,
    backgroundColor: "red",
    margin: 15,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
  
    
  
});

export default ListDemo;