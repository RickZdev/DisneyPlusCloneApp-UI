import * as React from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const FadeInView = props => {
  const {width} = Dimensions.get('window');
  const viewRef = React.useRef(new Animated.Value(0)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(viewRef, {
      toValue: props.isHome ? 0 : -15,
      duration: 200,
      useNativeDriver: true,
    }).start();

    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: -width,
        useNativeDriver: true,
      }).start();

      Animated.timing(viewRef, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <View className="flex-1" style={{backgroundColor: props.backgroundColor}}>
      <Animated.View // Special animatable View
        style={{
          flex: 1,
          marginLeft: props.isHome ? 0 : 15,
          // marginRight: props.isHome ? 15 : 0,
          transform: [
            {
              translateX: viewRef,
            },
          ],
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    </View>
  );
};

export default FadeInView;
