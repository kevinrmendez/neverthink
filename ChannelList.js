import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import ChannelContext from './ChannelContext';

export default class ChannelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.channels.map(item => (
      <View key={item.id}>
        <ChannelContext.Consumer>
          {({index, video, name, playList, icon, changeChannel}) => (
            <TouchableHighlight onPress={() => changeChannel(item)}>
              <>
                <View style={styles.itemRow}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={{
                      uri: item.icon,
                    }}
                  />
                  <Text style={styles.item}> {item.name}</Text>
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
  itemRow: {flexDirection: 'row', marginBottom: 10, marginLeft: 10},
  item: {color: Colors.white, fontSize: 20},
});
