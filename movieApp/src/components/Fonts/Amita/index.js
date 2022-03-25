import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Amita = ({style, children, type = 'Regular'}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const styles = StyleSheet.create({
    font: {
      fontFamily: `Amita-${type}`,
    },
  });

  return <Text style={[styles.font, {...passedStyles}]}>{children}</Text>;
};

export default Amita;
