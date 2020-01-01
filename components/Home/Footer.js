import React, { Component } from 'react';
import { LayoutAnimation, Animated, StyleSheet, View } from 'react-native';

import Images from '../../src/Images';
import Button from '../Button';
import isWebColor from "react-native-web/dist/modules/isWebColor";

const imageStyle = { width: 60, height: 48 };

export default function Footer(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const collapse = onPress => () => {
    setMenuOpen(false);
    onPress();
  };

  const renderMenu = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Button
          onPress={collapse(props.onMultiplayer)}
          style={[{ marginBottom: 8 }, imageStyle]}
          imageStyle={imageStyle}
          source={Images.button.controller}
        />
        <Button
          onPress={collapse(props.onShop)}
          style={[{ marginBottom: 8 }, imageStyle]}
          imageStyle={imageStyle}
          source={Images.button.shop}
        />
        <Button
          onPress={collapse(props.onCamera)}
          style={[{ marginBottom: 8 }, imageStyle]}
          imageStyle={imageStyle}
          source={Images.button.camera}
        />
      </View>
    );
  };


  return (
    <Animated.View style={[styles.container, props.style]}>
      {/*<Button*/}
      {/*  onPress={props.onCharacterSelect}*/}
      {/*  imageStyle={imageStyle}*/}
      {/*  source={Images.button.character}*/}
      {/*/>*/}

      <button style={{backgroundColor: '#f7e124'}}>
        <span style={{color: '#3f3f3f',fontSize: 'bold'}}>Joy早早的起了床，因为他要去参加日本东京举办的23届夏季奥林匹克运动会，帮他完成这段奇妙的旅程吧...</span></button>

      {/*<View style={{ flex: 1 }} />*/}

      {/*<View style={{ flexDirection: 'column-reverse' }}>*/}
      {/*  <Button*/}
      {/*    onPress={() => {*/}
      {/*      setState(!menuOpen);*/}
      {/*    }}*/}
      {/*    style={[{ opacity: menuOpen ? 0.8 : 1.0 }, imageStyle]}*/}
      {/*    imageStyle={imageStyle}*/}
      {/*    source={Images.button.menu}*/}
      {/*  />*/}

      {/*  {menuOpen && renderMenu()}*/}
      {/*</View>*/}
    </Animated.View>
  );

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    maxHeight: 48,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
