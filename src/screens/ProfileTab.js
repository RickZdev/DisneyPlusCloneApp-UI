import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import FadeInView from '../components/FadeInView';
import CustomStatusBar from '../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import COLORS from '../constants/COLORS';

const ProfileTab = () => {
  const {width} = Dimensions.get('window');
  return (
    <FadeInView backgroundColor={'#0f1014'}>
      <CustomStatusBar barStyle="light-content" backgroundColor="#021841" />
      <View className="flex-1 pl-4 bg-[#0f1014]">
        {/* header */}
        <View className="">
          <LinearGradient
            style={{
              position: 'absolute',
              width: width,
              height: '100%',
              // zIndex: 100,
              left: -16,
              marginRight: 16,
            }}
            colors={['#021841', '#0d1627']}></LinearGradient>
          <View className="flex-row items-center justify-between">
            <View className="w-16 h-14 justify-center items-center">
              <Image
                source={require('../assets/logo/disney-plus-logo.png')}
                resizeMode="contain"
                className="w-full h-full"
              />
            </View>

            <View className="flex-row space-x-2 items-center">
              <Feather name="settings" size={16} color={COLORS.white} />
              <Text className="text-white font-RobotoBold text-sm">
                Help & Settings
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between pt-2 mb-6">
            {/* first column */}
            <View>
              <View className="flex-row">
                <Text className="text-white font-RobotoMedium text-base">
                  Subscribe to enjoy
                </Text>
                <Entypo
                  name="chevron-small-down"
                  size={22}
                  color={COLORS.white}
                />
              </View>
              <Text className="text-white font-RobotoMedium text-base">
                Disney+
              </Text>
              <Text className="text-xs font-RobotoMedium text-[#9fa2b1]">
                +63 9*********1
              </Text>
              <Text className="text-xs font-RobotoMedium text-[#9fa2b1]">
                ric********@gmail.com
              </Text>
            </View>

            {/* second column */}
            <View className="items-center space-y-1">
              <LinearGradient
                start={{x: -1, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#0957dd', '#043280']}
                style={{borderRadius: 10}}>
                <TouchableOpacity className="justify-center items-center px-10 py-2 rounded-full ">
                  <Text className="text-white font-RobotoMedium">
                    Subscribe
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
              <Text className="text-[#757d89] text-xs font-RobotoRegular">
                Plans start at ₱159.0
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-1">
          <LinearGradient
            style={{
              position: 'absolute',
              width: width,
              height: '100%',
              // zIndex: 100,
              left: -16,
              marginRight: 16,
            }}
            colors={['#0d1424', '#0f1014']}></LinearGradient>

          <View className="w-full h-[2px] bg-[#1c2333]" />

          <View className="pt-6 ">
            <View className="flex-row items-center justify-between">
              <Text className="text-white font-RobotoBold text-lg">
                Profiles
              </Text>

              <View className="flex-row items-center space-x-2">
                <Octicons name="pencil" size={12} color={COLORS.white} />
                <Text className="text-white font-RobotoMedium text-xs">
                  Edit
                </Text>
              </View>
            </View>

            <View className="flex-row space-x-4 items-center mt-2">
              <View className="items-center justify-center space-y-1">
                <View className="w-14 h-14 rounded-full overflow-hidden border-white border-[1px] ">
                  <Image
                    source={require('../assets/images/moon-knight-avatar.webp')}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                </View>
                <Text className="text-white font-RobotoMedium text-[10px]">
                  Fred
                </Text>
              </View>

              <View className="items-center justify-center space-y-1">
                <View className="w-12 h-12 rounded-full overflow-hidden  bg-[#212129] justify-center items-center">
                  <Feather name="plus" size={22} color={'#5b5f70'} />
                </View>
                <Text className="text-white font-RobotoMedium text-[10px]">
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </FadeInView>
  );
};

export default ProfileTab;
