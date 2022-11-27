import {useRef} from 'react';
import {Animated, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const FadeInView = props => {
  const viewRef = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();

    Animated.timing(viewRef, {
      toValue: props.isHome ? 0 : -16,
      duration: 200,
      useNativeDriver: true,
    }).start();

    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
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
      <Animated.View
        style={{
          flex: 1,
          marginLeft: props.isHome ? 0 : 16,
          transform: [
            {
              translateX: viewRef,
            },
          ],
          opacity: fadeAnim,
        }}>
        {props.children}
      </Animated.View>
    </View>
  );
};

export default FadeInView;
