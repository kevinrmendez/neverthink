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
  StatusBar,
  Button,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import YouTube from 'react-native-youtube';
// import {YouTubeStandaloneAndroid} from 'react-native-youtube';

import ChannelList from './ChannelList';
import youtubeApikey from './apikey.js';
import data from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Channel Name 1',
      playListId: ['hY7m5jjJ9mM', 'KVZ-P-ZI6W4', 'Tl0DMTlwLw4'],
      icon:
        'https://cdn0.iconfinder.com/data/icons/emoticons-round-smileys/137/Emoticons-01-512.png',
    };
    this.playnNextVideo = this.playnNextVideo.bind(this);
    this.child = React.createRef();
  }
  componentDidMount() {
    // YouTubeStandaloneAndroid.playVideos({
    //   apiKey: 'AIzaSyBGzR9hDllXVRtDnBVpEmhQsPTw1jc7WbY', // Your YouTube Developer API Key
    //   videoIds: ['hY7m5jjJ9mM', 'KVZ-P-ZI6W4', 'Tl0DMTlwLw4'], // YouTube video ID
    //   autoplay: false, // Autoplay the video
    //   startTime: 120, // Starting point of video (in seconds)
    // })
    //   .then(() => console.log('Standalone Player Exited'))
    //   .catch(errorMessage => console.error(errorMessage));
    // this.setState({myState: 'Florida'});
  }
  playnNextVideo() {
    this.child.current.nextVideo();
    // this.child.current.seekTo(20);
  }

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

            <Image
              style={{height: 80}}
              source={{
                uri:
                  'https://about.neverthink.tv/assets/img/neverthink-share.png',
              }}
            />
            <View style={styles.body}>
              <YouTube
                ref={this.child}
                showinfo={false}
                modestbranding={true}
                // controls={0}
                videoIds={this.state.playListId} // The YouTube video ID
                play={true} // control playback of video with true/false
                fullscreen={false} // control whether the video should play in fullscreen or inline
                loop={true} // control whether the video should loop when ended
                apiKey={youtubeApikey}
                onReady={e => this.setState({isReady: true})}
                onChangeState={e => {
                  console.log(e.state);

                  this.setState({status: e.state});
                }}
                // onChangeQuality={e => this.setState({quality: e.quality})}
                // onError={e => this.setState({error: e.error})}
                style={{alignSelf: 'stretch', height: 300}}
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
