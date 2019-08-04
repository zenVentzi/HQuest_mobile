import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

interface TextButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: (event: GestureResponderEvent) => void;
}

const TextButton = (props: TextButtonProps) => {
  const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
