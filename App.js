/**
 * Neverthink React Native App
 * https://github.com/kevinrmendez/neverthink/
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import ChannelContext from './context/ChannelContext';

import ChannelList from './components/ChannelList';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import CurrenChannelInfo from './components/CurrenChannelInfo';

//import styles
import portraitStyles from './styles/portraitStyles';
import landscapeStyles from './styles/landscapeStyles';
import styles from './styles/styles';

import data from './data/data.js';

//change data structure, make a video object with the property watched
var dataChanged = data.map(channel => ({
  id: channel.id,
  name: channel.name,
  icon: channel.icon,
  playlist: channel.playlist.map(video => ({videoId: video, watched: false})),
}));

console.log(dataChanged.map(i => i.playlist.map(j => j.watched)));

class App extends Component {
  constructor(props) {
    super(props);

    //callback to change App state from child components
    this.changeChannel = channel => {
      console.log(channel.playlist);
      this.setState({
        id: channel.id,
        name: channel.name,
        playList: channel.playlist,
        icon: channel.icon,
      });
    };

    this.state = {
      currentChannelId: dataChanged[0].id,
      screen: Dimensions.get('window'),
      name: dataChanged[0].name,
      playList: dataChanged[0].playlist,
      icon: dataChanged[0].icon,
      changeChannel: this.changeChannel,
    };
  }
  //onlayout handler called when the orientation of the device changed
  onLayout(e) {
    const {width, height} = Dimensions.get('window');
    this.setState({screen: Dimensions.get('window')});
  }
  //check device orientation
  getOrientation() {
    if (this.state.screen.width > this.state.screen.height) {
      return 'LANDSCAPE';
    } else {
      return 'PORTRAIT';
    }
  }
  //return style base on orientation
  getStyle() {
    if (this.getOrientation() === 'LANDSCAPE') {
      return landscapeStyles;
    } else {
      return portraitStyles;
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <ChannelContext.Provider value={this.state}>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <Header style={this.getStyle()} />
              <View
                style={this.getStyle().container}
                onLayout={this.onLayout.bind(this)}>
                <View style={this.getStyle().videoPlayer}>
                  <CurrenChannelInfo style={this.getStyle()} />
                  <VideoPlayer
                    key={this.state.id}
                    style={this.getStyle().youtubeVideoPlayer}
                  />
                </View>
                <View style={this.getStyle().channelListContainer}>
                  <Text
                    style={[
                      styles.channelListTitle,
                      this.getStyle().channelListTitle,
                    ]}>
                    Channels
                  </Text>
                  <ChannelList channels={dataChanged} />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ChannelContext.Provider>
      </View>
    );
  }
}
export default App;
