/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
import Banner from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import data from './data/data.js';
import CurrenChannelInfo from './components/CurrenChannelInfo';

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
                <View style={this.getStyle().video}>
                  <CurrenChannelInfo style={this.getStyle()} />
                  <VideoPlayer
                    height={this.getOrientation() == 'PORTRAIT' ? 300 : 240}
                    playList={this.state.playList}
                    key={this.state.id}
                  />
                </View>
                <View style={this.getStyle().channelListContainer}>
                  <Text style={this.getStyle().channelListTitle}>Channels</Text>
                  <ChannelList channels={dataChanged} />
                </View>
              </View>

              {/* <View style={styles.body}><LearnMoreLinks /></View> */}
            </ScrollView>
          </SafeAreaView>
        </ChannelContext.Provider>
      </View>
    );
  }
}
const portraitStyles = StyleSheet.create({
  imageHeader: {
    height: 100,
  },
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: Colors.white,
  },
  container: {
    paddingTop: 10,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  channelListTitle: {
    fontSize: 30,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
  currentChannelInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
const landscapeStyles = StyleSheet.create({
  imageHeader: {
    height: 15,
  },
  headerTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
  container: {
    paddingTop: 5,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  video: {
    flex: 2,
  },
  channelListContainer: {
    flex: 0.6,
  },
  channelListTitle: {
    fontSize: 25,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 7,
  },
  currentChannelInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  header: {justifyContent: 'center', alignItems: 'center'},
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: Colors.white,
  },
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.white,
    textTransform: 'uppercase',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    padding: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
