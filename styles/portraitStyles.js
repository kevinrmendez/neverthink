import {StyleSheet} from 'react-native';

const portraitStyles = StyleSheet.create({
  headerImage: {
    height: 100,
  },
  youtubeVideoPlayer: {
    height: 300,
  },
  container: {
    paddingTop: 10,
    flexDirection: 'column',
  },
  channelListTitle: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  currentChannelName: {
    fontSize: 30,
  },
  currentChannelicon: {
    height: 40,
    width: 40,
  },
  currentChannelInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default portraitStyles;
