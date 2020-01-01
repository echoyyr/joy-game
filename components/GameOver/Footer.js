import React, { useEffect, useState } from 'react';
import { LayoutAnimation, Share, StyleSheet, View } from 'react-native';
import { isAvailableAsync } from 'expo-sharing';

import Colors from '../../src/Colors';
import Images from '../../src/Images';
import State from '../../src/state';
import Button from '../Button';

async function shareAsync() {
  await Share.share(
    {
      message: `Check out not-crossy-road by @baconbrix`,
      url: 'https://crossyroad.netlify.com',
      title: 'Not Crossy Road',
    },
    {
      dialogTitle: 'Share Not Crossy Road',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.AirDrop', // This speeds up showing the share sheet by a lot
        'com.apple.UIKit.activity.AddToReadingList', // This is just lame :)
      ],
      tintColor: Colors.blue,
    },
  );
}

export default function Footer({ style, showSettings, setGameState, navigation }) {

  const [canShare, setCanShare] = useState(true);

  useEffect(() => {
    isAvailableAsync().then(setCanShare).catch(() => { });
  }, []);

  LayoutAnimation.easeInEaseOut();

  return (
    <View style={[styles.container, style]}>
      <Button
        onPress={() => {
          setGameState(State.Game.playing);
        }}
        imageStyle={[styles.button, { marginLeft: canShare ? 4 : 0, aspectRatio: 1.9 }]}
        source={Images.button.long_play}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 4,
    minHeight: 56,
    maxHeight: 56,
    minWidth: '100%',
    maxWidth: '100%',
    flex: 1,
  },
  button: {
    height: 56,
  },
});
