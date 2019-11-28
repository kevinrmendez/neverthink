import React, {Component} from 'react';
import YouTube from 'react-native-youtube';
import youtubeApikey from '../apikey.js';

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
    };
    this.playNextVideo = this.playNextVideo.bind(this);
    this.child = React.createRef();
  }

  //recent playlist playing index when playlist changes
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.playList !== this.props.playList) {
  //     this.setState({index: 0});
  //   }
  // }

  playNextVideo() {
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
    console.log(`INDEX:${this.state.index}`);
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
            //check if video has ended
            if (e.state === 'ended') {
              this.props.playList[this.state.index]['watched'] = true;
              this.playNextVideo();

              console.log('VIDEO WATCHED');
              //change status of video to watched
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
          onPress={() => this.playNextVideo()}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  itemRow: {flexDirection: 'row'},
  item: {color: Colors.white, fontSize: 30},
});
