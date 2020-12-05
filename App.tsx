import React, { useState } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/pages/HomeScreen";
import styled, { css } from "@emotion/native";
import MenuPage from "./components/pages/MenuPage";
import SimpleMaths from "./components/pages/maths/SimpleMaths";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  let currentPage = (
    <HomeScreen
      onNextPage={() => {
        setPage("menu");
      }}
    />
  );

  if (page === "menu") {
    // Bind back button to go back to home
    BackHandler.addEventListener("hardwareBackPress", () => {
      setPage("home");
      return true;
    });
    currentPage = (
      <MenuPage
        setPage={(page) => {
          setPage(page);
        }}
      />
    );
  } else if (page === "simple-maths") {
    // Bind back button to go back to menu
    BackHandler.addEventListener("hardwareBackPress", () => {
      setPage("menu");
      return true;
    });
    currentPage = <SimpleMaths />;
  }

  return (
    <View
      style={css`
        flex: 1;
        padding-top: 40px;
      `}
    >
      {currentPage}
    </View>
  );
}
