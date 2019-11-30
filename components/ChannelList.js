import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import ChannelContext from '../context/ChannelContext';

export default class ChannelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.channels.map(channel => (
      <View key={channel.id}>
        <ChannelContext.Consumer>
          {({changeChannel}) => (
            <TouchableHighlight
              onPress={() => {
                //order videos by watched value
                channel.playlist.sort((a, b) => {
                  return a.watched === b.watched ? 0 : a.watched ? 1 : -1;
                });
                //change channel (update the state of App)
                changeChannel(channel);
                console.log(channel.name);
              }}>
              <>
                <View style={styles.channelRow}>
                  <Image
                    style={styles.channelIcon}
                    source={{
                      uri: channel.icon,
                    }}
                  />
                  <Text style={styles.channelText}> {channel.name}</Text>
                </View>
              </>
            </TouchableHighlight>
          )}
        </ChannelContext.Consumer>
      </View>
    ));
  }
}

const styles = StyleSheet.create({
  channelIcon: {width: 30, height: 30},
  channelRow: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 7,
    paddingVertical: 6,
  },
  channelText: {color: Colors.white, fontSize: 20},
});
