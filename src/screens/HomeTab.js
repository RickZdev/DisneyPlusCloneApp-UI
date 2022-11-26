import {Text, ScrollView, Animated, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FadeInView from '../components/FadeInView';
import CustomStatusBar from '../components/CustomStatusBar';
import COLORS from '../constants/COLORS';
import DATA from '../constants/DATA';
import MovieList from '../components/MovieList';
import CategoryList from '../components/CategoryList';
import StickyHeader from '../components/StickyHeader';
import StickyFooter from '../components/StickyFooter';
import CarouselHeader from '../components/CarouselHeader';

const HomeTab = () => {
  const minHeight = 55;
  const [backgroundColor, setBackgroundColor] = useState(false);
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, minHeight);
  const translateY = diffClamp.interpolate({
    inputRange: [0, minHeight],
    outputRange: [0, -minHeight],
  });

  const translateY2 = diffClamp.interpolate({
    inputRange: [-minHeight, 0],
    outputRange: [-minHeight, 0],
  });

  return (
    <FadeInView backgroundColor={COLORS.primary} isHome={true}>
      <CustomStatusBar backgroundColor={COLORS.primary} />
      <Animated.View
        className="absolute top-0 left-0 right-0 z-50"
        style={{transform: [{translateY: translateY}]}}>
        <StickyHeader minHeight={minHeight} backgroundColor={backgroundColor} />
      </Animated.View>

      <Animated.View
        className="absolute bottom-0 -left-4 right-0 z-50"
        style={{transform: [{translateY: translateY2}]}}>
        <StickyFooter />
      </Animated.View>

      <ScrollView
        onScroll={e => {
          if (e.nativeEvent.contentOffset.y > 150) {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }

          if (e.nativeEvent.contentOffset.y < 150) {
            setBackgroundColor(false);
          } else {
            setBackgroundColor(true);
          }
        }}
        className="pb-20">
        <CarouselHeader data={DATA.carousel} />
        <View className="-right-3">
          <CategoryList data={DATA.categoryLogo} />
          <MovieList data={DATA.newToDisney} title="New to Disney+" />
          <MovieList data={DATA.newToDisney} title="Originals" />
          <MovieList data={DATA.newToDisney} title="Star Highlights" />
          <MovieList
            data={DATA.newToDisney}
            title="Movies Recommended For You "
          />
          <MovieList
            data={DATA.newToDisney}
            title="Shows Recommended For You "
          />
          <MovieList data={DATA.newToDisney} title="Featured Marvel " />
          <MovieList data={DATA.newToDisney} title="From Stage to Screen " />
          <MovieList data={DATA.newToDisney} title="Popular Movies " />
          <MovieList data={DATA.newToDisney} title="Popular Shows " />
          <MovieList data={DATA.newToDisney} title="Animated Movies " />
          <MovieList data={DATA.newToDisney} title="Korean Wave " />
          <MovieList data={DATA.newToDisney} title="U.S Series " />
          <MovieList data={DATA.newToDisney} title="Pixar Movies and Shorts " />
        </View>
      </ScrollView>
    </FadeInView>
  );
};

export default HomeTab;
