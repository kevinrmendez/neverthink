import React from 'react';
import {View, Image} from 'react-native';

import ChannelContext from '../context/ChannelContext';

export default Header = props => {
  return (
    <ChannelContext.Consumer>
      {({screen}) => (
        <View style={props.style.imageHeader}>
          <Image
            //set Image same size as container
            style={{flex: 1, width: undefined, height: undefined}}
            source={
              screen.width < screen.height
                ? require('../assets/neverthink_banner_portrait.png')
                : require('../assets/neverthink_banner_landscape.png')
            }
          />
        </View>
      )}
    </ChannelContext.Consumer>
  );
};
