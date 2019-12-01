import React, {Component} from 'react';
import YouTube from 'react-native-youtube';
import youtubeApikey from '../apikey.js';
import ChannelContext from '../context/ChannelContext';

import {View, StyleSheet, Button} from 'react-native';

export default class VideoPlayer extends Component {
  static contextType = ChannelContext;

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      error: '',
    };
    this.playNextVideo = this.playNextVideo.bind(this);
  }

  playNextVideo() {
    let playListIndex = this.state.index;
    let playList = this.context.playList;
    playListIndex++;
    if (playListIndex === playList.length) {
      playListIndex = 0;
    }
    this.setState({
      index: playListIndex,
    });
  }

  render() {
    // console.log(`INDEX:${this.state.index}`);
    return (
      <>
        <ChannelContext.Consumer>
          {({playList}) => (
            <YouTube
              showinfo={false}
              modestbranding={true}
              videoId={playList[this.state.index]['videoId']}
              play={true}
              fullscreen={false}
              apiKey={youtubeApikey}
              onReady={e => this.setState({isReady: true})}
              onChangeState={e => {
                this.setState({status: e.state});
                //check if video has ended
                if (e.state === 'ended') {
                  //change status of video to watched
                  playList[this.state.index]['watched'] = true;
                  this.playNextVideo();
                  // console.log('VIDEO WATCHED');
                  // console.log(playList[this.state.index]['watched']);
                }
              }}
              onError={e => this.setState({error: e.error})}
              style={[styles.youtubeVideoPlayer, this.props.style]}
            />
          )}
        </ChannelContext.Consumer>
        <View style={styles.buttonContainer}>
          <Button
            color="#FF00B4"
            title="NEXT"
            onPress={() => this.playNextVideo()}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: 300,
    marginHorizontal: 100,
    marginVertical: 10,
  },
  youtubeVideoPlayer: {
    alignSelf: 'stretch',
  },
});
