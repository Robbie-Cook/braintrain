import React from "react";
import { View, Text, Button } from "react-native";

/**
 * Interface for MenuPage props
 */
export interface MenuPageProps {
	children?: any;
	setPage: (pageName: Page) => void;
}

/**
 *  A MenuPage component.
 */
const MenuPage: React.FC<MenuPageProps> = (props) => {
  return (
    <View>
      <View>
        <Button title="Simple Maths" onPress={() => {props.setPage("simple-maths")}} />
      </View>
    </View>
  );
};

export default MenuPage;
