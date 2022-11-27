import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

import HomeTab from '../screens/HomeTab';
import COLORS from '../constants/COLORS';
import FONTS from '../constants/FONTS';
import {Image, TouchableOpacity, View} from 'react-native';
import SearchTab from '../screens/SearchTab';
import ProfileTab from '../screens/ProfileTab';

const Tab = createBottomTabNavigator();

const BottomTab = ({navigation}) => {
  const iconSize = 20;
  return (
    <Tab.Navigator
      initialRouteName={HomeTab}
      screenOptions={{
        unmountOnBlur: false,
        tabBarStyle: {
          backgroundColor: '#0f1014',
          height: 55,
          borderTopWidth: 1,
          borderTopColor: '#1c1c22',
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: '#9fa2b1',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: FONTS.RobotoBold,
          fontSize: 10,
          top: -5,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeTab}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Foundation name="home" color={color} size={iconSize} />
            ) : (
              <Octicons name="home" color={color} size={iconSize} />
            ),
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="SearchStack"
        component={SearchTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="search" color={color} size={iconSize} />
          ),
          tabBarLabel: 'Search',
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <View className="w-5 h-5 rounded-full bg-primary">
              <Image
                source={require('../assets/images/moon-knight-avatar.webp')}
                resizeMode={'contain'}
                className="w-full h-full rounded-full"
              />
            </View>
          ),
          tabBarLabel: 'My Space',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
