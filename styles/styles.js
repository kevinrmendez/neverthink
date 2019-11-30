import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {justifyContent: 'center', alignItems: 'center'},
  currentChannelName: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  channelListTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default styles;
