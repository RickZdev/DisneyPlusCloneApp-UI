import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import ProfileTab from '../screens/ProfileTab';
import SearchTab from '../screens/SearchTab';
import SampleScreen from '../screens/SampleScreen';
import HomeTab from '../screens/HomeTab';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={BottomTab}>
      <Stack.Screen
        name="HomeTab"
        component={BottomTab}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SearchTab"
        component={SearchTab}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="SampleScreen"
        component={SampleScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{presentation: 'card'}}
      />
    </Stack.Navigator>
  );
};

export {HomeStack, SearchStack, ProfileStack};
