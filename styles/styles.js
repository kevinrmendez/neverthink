import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {justifyContent: 'center', alignItems: 'center'},
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  channelListTitle: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  body: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default styles;
