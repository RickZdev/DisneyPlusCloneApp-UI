import {View, Text} from 'react-native';
import React from 'react';
import FadeInView from '../components/FadeInView';
import CustomStatusBar from '../components/CustomStatusBar';
import COLORS from '../constants/COLORS';

const SearchTab = () => {
  return (
    <FadeInView backgroundColor={COLORS.primary}>
      <CustomStatusBar barStyle="default" backgroundColor={COLORS.primary} />
      <View className="bg-primary flex-1">
        <Text className="text-white">SearchTab</Text>
      </View>
    </FadeInView>
  );
};

export default SearchTab;
