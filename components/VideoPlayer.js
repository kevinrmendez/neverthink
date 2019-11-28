import React, {Component} from 'react';
import YouTube from 'react-native-youtube';
import youtubeApikey from '../apikey.js';

import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.playNextVideo = this.playNextVideo.bind(this);
  }

  //reset playlist playing index when playlist changes
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.playList !== this.props.playList) {
  //     this.setState({index: 0});
  //   }
  // }

  playNextVideo() {
    let playListIndex = this.state.index;
    let playList = this.props.playList;
    playListIndex++;
    if (playListIndex === playList.length) {
      playListIndex = 0;
    }

    this.setState({
      index: playListIndex,
    });
  }

  render() {
    console.log(`INDEX:${this.state.index}`);
    return (
      <>
        <YouTube
          showinfo={false}
          modestbranding={true}
          // controls={0}
          videoId={this.props.playList[this.state.index]['id']}
          play={true} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          apiKey={youtubeApikey}
          onReady={e => this.setState({isReady: true})}
          onChangeState={e => {
            // console.log(e.state);

            this.setState({status: e.state});
            //check if video has ended
            if (e.state === 'ended') {
              //change status of video to watched
              this.props.playList[this.state.index]['watched'] = true;
              this.playNextVideo();

              console.log('VIDEO WATCHED');
              console.log(this.props.playList[this.state.index]['watched']);
            }
          }}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          // onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: this.props.height}}
        />
        {/* <View style={styles.buttonIconContainer}>
          <TouchableOpacity
            onPress={() => this.playNextVideo()}
            style={{
              height: 50,
              width: 50,
              borderRadius: 150,
              marginTop: 10,
              backgroundColor: '#FF00B4',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/130/130884.png',
              }}
            />
          </TouchableOpacity>
        </View> */}
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
  buttonIconContainer: {
    maxWidth: 300,
    marginHorizontal: 100,
    marginVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
