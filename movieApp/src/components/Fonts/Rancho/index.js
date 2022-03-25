import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const Rancho = ({style, children, type = 'Regular'}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const styles = StyleSheet.create({
    font: {
      fontFamily: `Rancho-${type}`,
      letterSpacing: moderateScale(1),
    },
  });

  return <Text style={[styles.font, {...passedStyles}]}>{children}</Text>;
};

export default Rancho;
