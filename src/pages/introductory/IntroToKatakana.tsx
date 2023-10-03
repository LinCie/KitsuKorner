// Components
import Title from "../../components/typography/Title";
import {
  BottomNavigation,
  NavigationLink,
} from "../../components/navigations/BottomNavigation";

const IntroToKatakana = () => {
  return (
    <>
      {/* Main Section */}
      <Title>Introduction to Katakana</Title>
      {/* Navigation */}
      <BottomNavigation>
        <NavigationLink left link="/introductory/intro-to-hiragana">
          Introduction to Hiragana
        </NavigationLink>
        <NavigationLink link="/beginner/state-of-being">
          State-of-Being
        </NavigationLink>
      </BottomNavigation>
    </>
  );
};

export default IntroToKatakana;
