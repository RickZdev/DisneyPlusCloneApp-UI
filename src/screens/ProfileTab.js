import {View, Text} from 'react-native';
import React from 'react';
import FadeInView from '../components/FadeInView';
import CustomStatusBar from '../components/CustomStatusBar';

const ProfileTab = () => {
  return (
    <FadeInView backgroundColor={'skyblue'}>
      <CustomStatusBar barStyle="light-content" backgroundColor="skyblue" />
      <View>
        <Text className="text-white">ProfileTab</Text>
      </View>
    </FadeInView>
  );
};

export default ProfileTab;
