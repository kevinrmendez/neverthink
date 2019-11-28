import React, {useState, Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  Button,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import ChannelContext from '../ChannelContext';

export default CurrentChannelInfo = props => {
  return (
    <ChannelContext.Consumer>
      {({icon, name}) => (
        <View style={props.style.currentChannelInfo}>
          <Text style={props.style.headerTitle}>{name}</Text>
          <Image
            style={props.style.icon}
            source={{
              uri: icon,
            }}
          />
        </View>
      )}
    </ChannelContext.Consumer>
  );
};
