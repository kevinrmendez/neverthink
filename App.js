/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import channelReducer from './channelReducer.js';

import ChannelList from './ChannelList';
import VideoPlayer from './VideoPlayer';
import data from './data.js';

const store = createStore(channelReducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      video: 'hY7m5jjJ9mM',
      name: 'Channel Name 1',
      playListId: ['hY7m5jjJ9mM', 'KVZ-P-ZI6W4', 'Tl0DMTlwLw4'],
      icon:
        'https://cdn0.iconfinder.com/data/icons/emoticons-round-smileys/137/Emoticons-01-512.png',
    };
  }
  // componentDidMount() {

  // }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <Header /> */}
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed!')}>
              <Image
                style={{height: 80}}
                source={{
                  uri:
                    'https://about.neverthink.tv/assets/img/neverthink-share.png',
                }}
              />
            </TouchableWithoutFeedback>

            <View style={styles.body}>
              <VideoPlayer
                playList={['hY7m5jjJ9mM', 'KVZ-P-ZI6W4', 'Tl0DMTlwLw4']}
              />

              <Button
                color="#FF00B4"
                title="next video"
                onPress={() => this.playnNextVideo()}
              />
              <View style={styles.header}>
                <Text style={styles.headerTitle}>{this.state.name}</Text>
                <Image
                  style={{width: 40, height: 40}}
                  source={{
                    uri: this.state.icon,
                  }}
                />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Channels</Text>
              </View>
              <View style={styles.sectionContainer}>
                {/* <Text style={styles.sectionDescription}>
                  Read the docs to discover what to sdf do next: sdf
                </Text> */}
              </View>
              {/* <LearnMoreLinks /> */}
              <ChannelList channels={data} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {justifyContent: 'center', alignItems: 'center'},
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: Colors.white,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
