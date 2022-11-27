import {View, Text, TextInput, FlatList, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FadeInView from '../components/FadeInView';
import CustomStatusBar from '../components/CustomStatusBar';
import DATA from '../constants/DATA';
import COLORS from '../constants/COLORS';

const SearchTab = () => {
  return (
    <FadeInView backgroundColor={COLORS.primary}>
      <CustomStatusBar barStyle="default" backgroundColor={COLORS.primary} />
      <View className="bg-primary flex-1 pl-4">
        {/* search */}
        <SearchBar />

        {/* content */}
        <FlatList
          data={DATA.searchList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          ListFooterComponent={() => <View className="mb-10" />}
          ListHeaderComponent={() => <ListHeader />}
          renderItem={({item}) => <Card data={item} />}
        />
      </View>
    </FadeInView>
  );
};

const Card = ({data}) => {
  return (
    <View className="flex-row items-center space-x-3 mb-4">
      <View className="w-[85px] h-12 rounded-xl ">
        <Image
          source={data.cover}
          resizeMode="cover"
          className="w-full h-full rounded-md"
        />
      </View>

      <Text className="font-RobotoMedium text-[#9fa2b1] text-sm flex-1">
        {data.title}
      </Text>

      <Entypo name="chevron-small-right" size={18} color={'#9fa2b1'} />
    </View>
  );
};

const SearchBar = () => {
  return (
    <View className="pt-11 mb-6">
      <View>
        <View className="absolute z-50 h-full justify-center pl-4">
          <Feather name="search" color={'#626773'} size={24} />
        </View>
        <TextInput
          placeholder="Movies, shows and more"
          placeholderTextColor={'#9fa2b1'}
          className="font-RobotoRegular text-base bg-[#212227] text-white rounded-lg pl-14 py-2"
        />
      </View>
    </View>
  );
};

const ListHeader = () => {
  return (
    <View className="flex-row items-center space-x-2 mb-4 ">
      <Ionicons name="md-trending-up-outline" size={18} color={COLORS.white} />
      <Text className="text-white font-RobotoMedium text-xs">
        POPULAR SEARCHES
      </Text>
    </View>
  );
};
export default SearchTab;
