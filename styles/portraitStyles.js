import {StyleSheet} from 'react-native';

const portraitStyles = StyleSheet.create({
  headerImage: {
    height: 100,
  },
  container: {
    paddingTop: 10,
    flexDirection: 'column',
  },
  channelListTitle: {
    fontSize: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  currentChannelIcon: {
    height: 40,
    width: 40,
  },
  currentChannelName: {
    fontSize: 30,
  },
  currentChannelInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  youtubeVideoPlayer: {
    height: 300,
  },
});

export default portraitStyles;
