import {StyleSheet} from 'react-native';
const portraitStyles = StyleSheet.create({
  imageHeader: {
    height: 100,
  },
  headerTitle: {
    fontSize: 30,
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
  icon: {
    height: 40,
    width: 40,
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
