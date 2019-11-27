import {createContext, useContext} from 'react';

//context used for passing the state of the app
const ChannelContext = createContext({
  index: 0,
  // video: 'hY7m5jjJ9mM',
  name: 'Channel Name 1',
  playList: ['hY7m5jjJ9mM', 'KVZ-P-ZI6W4', 'Tl0DMTlwLw4'],
  icon:
    'https://cdn0.iconfinder.com/data/icons/emoticons-round-smileys/137/Emoticons-01-512.png',
  changeChannel: () => {},
});

export function useChannel() {
  return useContext(ChannelContext);
}

export default ChannelContext;
