import { css } from "@emotion/native";
import React from "react";
import { View, Text } from "react-native";
import randomInt from "random-int";
import { Button, Input } from "react-native-elements";

/**
 * Get an equation a human can read.
 */
function humanReadableEquation(eq: string): string {
  return eq.replace(/\//g, "÷").replace(/\*\*/g, "^").replace(/\*/g, "x");
}

/**
 * Generate a computer-readable equation.
 */
function generateNewEquation(): string {
  const first = randomInt(1, 15);
  const second = randomInt(1, 15);
  const operands = ["*", "/", "**", "+", "-"];
  const operand = operands[randomInt(0, operands.length - 1)];
  return `${first} ${operand} ${second}`;
}

/**
 * Interface for equation.
 */
export interface EquationProps {
  children?: any;
  eq: string;
}

const Equation: React.FC<EquationProps> = (props) => {
  return (
    <View style={css``}>
      <Text>{props.eq}</Text>
      <Input></Input>
    </View>
  );
};

/**
 * Interface for SimpleMaths props
 */
export interface SimpleMathsProps {
  children?: any;
}

/**
 *  A SimpleMaths component.
 */
const SimpleMaths: React.FC<SimpleMathsProps> = (props) => {
  const [equation, setEquation] = React.useState("");
  React.useEffect(() => {
    setEquation(generateNewEquation());
  }, []);
  return (
    <View>
      <Equation eq={humanReadableEquation(equation)} />
      <Button title="Go" />
    </View>
  );
};

export default SimpleMaths;
