import { FlatList } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled5 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <FlatList renderItem={() => <View style={{
      width: 92,
      minHeight: 60,
      backgroundColor: '#FFFFFF'
    }}></View>} ItemSeparatorComponent={() => <View style={{
      backgroundColor: '#000000',
      height: 1
    }} />} data={[1, 2, 3]} keyExtractor={item => item.toString()} style={{
      left: 31,
      top: 38,
      position: "absolute",
      width: 100,
      height: 150
    }}></FlatList></View>;
};

export default Untitled5;