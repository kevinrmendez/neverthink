import {StyleSheet} from 'react-native';

const landscapeStyles = StyleSheet.create({
  headerImage: {
    height: 15,
  },
  container: {
    paddingTop: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  videoPlayerContainer: {
    flex: 1,
  },
  youtubeVideoPlayer: {
    height: 180,
  },
  videoPlayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },

  currentChannelicon: {
    height: 50,
    width: 50,
    marginLeft: 7,
  },
  currentChannelName: {
    fontSize: 30,
  },
  currentChannelInfo: {
    flex: 0.3,
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default landscapeStyles;
