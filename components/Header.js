import React from 'react';
import {View, Image} from 'react-native';

import ChannelContext from '../context/ChannelContext';

export default Header = props => {
  return (
    <ChannelContext.Consumer>
      {({screen}) => (
        <View style={props.style.imageHeader}>
          <Image
            //set image same size as container
            style={{flex: 1, width: undefined, height: undefined}}
            source={
              screen.width < screen.height
                ? // ? 'https://about.neverthink.tv/assets/img/neverthink-share.png'
                  require('../assets/neverthink_banner_portrait.png')
                : // : 'https://www.reaktor.com/wp-content/uploads/2017/11/neverthink_hero-1.png',
                  require('../assets/neverthink_banner_landscape.png')
            }
          />
        </View>
      )}
    </ChannelContext.Consumer>
  );
};
