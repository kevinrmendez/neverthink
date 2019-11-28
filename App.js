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
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ChannelContext from './ChannelContext';

import ChannelList from './components/ChannelList';
import VideoPlayer from './components/VideoPlayer';
import data from './data/data.js';

// const store = createStore(channelReducer);

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
      index: 0,
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
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              {/* <Header /> */}
              {/* {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )} */}

              <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed!')}>
                <View style={this.getStyle().imageHeader}>
                  <Image
                    style={{flex: 1, width: undefined, height: undefined}}
                    source={
                      this.state.screen.width < this.state.screen.height
                        ? // ? 'https://about.neverthink.tv/assets/img/neverthink-share.png'
                          require('./assets/neverthink_banner_portrait.png')
                        : // : 'https://www.reaktor.com/wp-content/uploads/2017/11/neverthink_hero-1.png',
                          require('./assets/neverthink_banner_landscape.png')
                    }
                  />
                </View>
              </TouchableWithoutFeedback>
              {/* <View
                style={this.getStyle().container}
                onLayout={this.onLayout.bind(this)}>
                {this.state.screen.width > this.state.screen.height ? (
                  <Text style={styles.headerTitle}>Landscape</Text>
                ) : (
                  <Text style={styles.headerTitle}>Portrait</Text>
                )}
              </View> */}
              <View
                style={this.getStyle().container}
                onLayout={this.onLayout.bind(this)}>
                <View style={this.getStyle().video}>
                  <ChannelContext.Consumer>
                    {({id, playList}) => (
                      //key atribute required for rendering new  component instance on playlist property changed
                      <VideoPlayer
                        height={this.getOrientation() == 'PORTRAIT' ? 300 : 200}
                        playList={playList}
                        key={id}
                      />
                    )}
                  </ChannelContext.Consumer>
                  <View style={this.getStyle().currentChannelInfo}>
                    <Text style={styles.headerTitle}>{this.state.name}</Text>
                    <Image
                      style={{width: 40, height: 40}}
                      source={{
                        uri: this.state.icon,
                      }}
                    />
                  </View>
                </View>
                <View style={this.getStyle().channelList}>
                  <Text style={this.getStyle().channelListTitle}>Channels</Text>
                  {/* <ChannelList channels={data} /> */}
                  <ChannelList channels={dataChanged} />
                </View>
              </View>

              <View style={styles.body}>{/* <LearnMoreLinks /> */}</View>
            </ScrollView>
          </SafeAreaView>
        </ChannelContext.Provider>
      </View>
    );
  }
}
const portraitStyles = StyleSheet.create({
  imageHeader: {
    height: 80,
  },
  container: {
    paddingTop: 20,
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
  currentChannelInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const landscapeStyles = StyleSheet.create({
  imageHeader: {
    height: 15,
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
  channelList: {
    flex: 0.6,
  },
  channelListTitle: {
    fontSize: 25,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
