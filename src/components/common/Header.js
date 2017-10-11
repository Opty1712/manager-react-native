import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F50000',
    paddingTop: 15,
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowOffset: {width: 30, height: 50},
    shadowColor: '#f00',
    elevation: 20,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
