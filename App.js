/**
 * Neverthink React Native App
 * https://github.com/kevinrmendez/neverthink/
 *
 * @format
 * @flow
 */

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

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ChannelContext from './context/ChannelContext';

import ChannelList from './components/ChannelList';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import data from './data/data.js';
import CurrenChannelInfo from './components/CurrenChannelInfo';

import portraitStyles from './styles/portraitStyles';
import landscapeStyles from './styles/landscapeStyles';
import styles from './styles/styles';

//change data structure
var dataChanged = data.map(item => ({
  id: item.id,
  name: item.name,
  icon: item.icon,
  playlist: item.playlist.map(x => ({id: x, watched: false})),
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
    // console.log(this.state.screen);
  }
  onLayout(e) {
    const {width, height} = Dimensions.get('window');
    // console.log(width, height);
    // console.log(this.getStyle());
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
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              // style={styles.scrollView}
            >
              {/* {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )} */}

              <Header style={this.getStyle()} />
              <View
                style={this.getStyle().container}
                onLayout={this.onLayout.bind(this)}>
                <View style={this.getStyle().videoPlayer}>
                  <CurrenChannelInfo style={this.getStyle()} />
                  <VideoPlayer
                    // height={this.getOrientation() == 'PORTRAIT' ? 300 : 240}
                    key={this.state.id}
                    //
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
