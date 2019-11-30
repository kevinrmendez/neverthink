import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import ChannelContext from '../context/ChannelContext';

export default CurrentChannelInfo = props => {
  return (
    <ChannelContext.Consumer>
      {({icon, name}) => (
        <View style={props.style.currentChannelInfo}>
          <Text
            style={[styles.currentChannelName, props.style.currentChannelName]}>
            {name}
          </Text>
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

const styles = StyleSheet.create({
  currentChannelName: {
    textAlign: 'center',
    color: 'white',
  },
});
