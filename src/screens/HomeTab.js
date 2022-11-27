import {ScrollView, Animated, View} from 'react-native';

import FadeInView from '../components/FadeInView';
import CustomStatusBar from '../components/CustomStatusBar';
import Carousel from '../components/Carousel';
import StickyHeader from '../components/StickyHeader';
import StickyFooter from '../components/StickyFooter';
import CategoryList from '../components/CategoryList';
import MovieList from '../components/MovieList';
import DATA from '../constants/DATA';
import COLORS from '../constants/COLORS';

const HomeTab = () => {
  const minHeight = 55;
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, minHeight);
  const translateHeader = diffClamp.interpolate({
    inputRange: [0, minHeight],
    outputRange: [0, -minHeight],
  });

  const translateFooter = diffClamp.interpolate({
    inputRange: [-minHeight, 0],
    outputRange: [-minHeight, 0],
  });

  return (
    <FadeInView backgroundColor={COLORS.primary} isHome={true}>
      <CustomStatusBar backgroundColor={COLORS.black} />
      <StickyHeader minHeight={minHeight} translateHeader={translateHeader} />
      <StickyFooter translateFooter={translateFooter} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <Carousel data={DATA.carousel} />
        <View className="-right-3">
          <CategoryList data={DATA.categoryLogo} />
          <MovieList data={DATA.newToDisney} title="New to Disney+" />
          <MovieList data={DATA.newToDisney} title="Originals" />
          <MovieList data={DATA.newToDisney} title="Star Highlights" />
          <MovieList data={DATA.newToDisney} title="Featured Marvel " />
          <MovieList data={DATA.newToDisney} title="From Stage to Screen " />
          <MovieList data={DATA.newToDisney} title="Popular Movies " />
          <MovieList data={DATA.newToDisney} title="Popular Shows " />
          <MovieList data={DATA.newToDisney} title="Pixar Movies and Shorts " />
        </View>
      </ScrollView>
    </FadeInView>
  );
};

export default HomeTab;
