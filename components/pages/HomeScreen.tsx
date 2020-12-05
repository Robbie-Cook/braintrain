import React from "react";
import { View, Text, Button, AppRegistry } from "react-native";
import styled, { css } from "@emotion/native";

/**
 * Interface for HomeScreen props
 */
export interface HomeScreenProps {
	children?: any;
	onNextPage: () => void;
}

/**
 *  A HomeScreen component.
 */
const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <View
      style={css`
        border-radius: 10px;
				background-color: red;
				width: 100%;
				height: 100%;
      `}
    >
      <Text>Brain Train</Text>
      <Button title="Go" onPress={props.onNextPage} />
    </View>
  );
};

export default HomeScreen;
