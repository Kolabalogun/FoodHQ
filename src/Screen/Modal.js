import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import Marker from "react-native-maps";
import * as Animatable from "react-native-animatable";

const Modal = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 8.480308595880663,
        longitude: 4.664649971462295,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={[styles.box2, StyleSheet.absoluteFill]}
      mapType="hybrid"
    >
      <Marker
        coordinate={{
          latitude: 8.480308595880663,
          longitude: 4.664649971462295,
        }}
        title="Arafims"
        pinColor="green"
        identifier="origin"
      />
    </MapView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    position: "absolute",
    top: 40,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  box3: {
    position: "absolute",
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  text: {
    color: "#FFF",
    fontSize: 80,
  },
});
