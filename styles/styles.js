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
  },
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 30,
  //   fontWeight: '600',
  //   color: Colors.white,
  //   textTransform: 'uppercase',
  //   borderBottomColor: Colors.white,
  //   borderBottomWidth: 1,
  //   padding: 10,
  // },
  // icon: {
  //   height: 40,
  //   width: 40,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default styles;
