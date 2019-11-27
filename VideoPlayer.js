import React, {Component} from 'react';
import YouTube from 'react-native-youtube';
import youtubeApikey from './apikey.js';

import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      //   video: 'hY7m5jjJ9mM',
    };
    this.playnNextVideo = this.playnNextVideo.bind(this);
    this.child = React.createRef();
  }

  playnNextVideo() {
    var playListIndex = this.state.index;
    var playList = this.props.playList;
    playListIndex++;
    if (playListIndex === playList.length) {
      playListIndex = 0;
    }

    this.setState({
      index: playListIndex,
      //   video: this.state.playList[playListIndex],
    });
    // this.child.current.nextVideo();
    // this.child.current.seekTo(20);
  }

  render() {
    return (
      <>
        <YouTube
          ref={this.child}
          showinfo={false}
          modestbranding={true}
          // controls={0}
          videoId={this.props.playList[this.state.index]['id']}
          // videoIds={this.state.playListId} // The YouTube video ID
          play={true} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          // control whether the video should loop when ended
          apiKey={youtubeApikey}
          onReady={e => this.setState({isReady: true})}
          onChangeState={e => {
            // console.log(e.state);

            this.setState({status: e.state});
            if (e.state === 'ended') {
              this.props.playList[this.state.index]['watched'] = true;
              this.playnNextVideo();

              console.log('VIDEO WATCHED');
              console.log(this.props.playList[this.state.index]['watched']);
            }
          }}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          // onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: this.props.height}}
        />
        <Button
          color="#FF00B4"
          title="next video"
          onPress={() => this.playnNextVideo()}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  itemRow: {flexDirection: 'row'},
  item: {color: Colors.white, fontSize: 30},
});
