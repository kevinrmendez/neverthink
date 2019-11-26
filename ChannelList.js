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

export default class ChannelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.channels.map(item => (
      <TouchableHighlight
        key={item.id}
        onPress={() => Alert.alert(`${item.name} clicked`)}>
        <View style={styles.itemRow} k>
          <Image
            style={{width: 30, height: 30}}
            source={{
              uri: item.icon,
            }}
          />
          <Text style={styles.item}> {item.name}</Text>
        </View>
      </TouchableHighlight>
    ));
  }
}

const styles = StyleSheet.create({
  itemRow: {flexDirection: 'row'},
  item: {color: Colors.white, fontSize: 30},
});
