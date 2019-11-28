import {StyleSheet} from 'react-native';
const landscapeStyles = StyleSheet.create({
  imageHeader: {
    height: 15,
  },
  container: {
    paddingTop: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  videoPlayer: {
    flex: 2,
  },
  youtubeVideoPlayer: {
    height: 240,
  },
  channelListContainer: {
    flex: 0.6,
  },
  channelListTitle: {
    fontSize: 25,
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

export default landscapeStyles;
