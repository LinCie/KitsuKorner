// Components
import Title from "../../components/typography/Title";
import {
  BottomNavigation,
  NavigationLink,
} from "../../components/navigations/BottomNavigation";

const IntroToHiragana = () => {
  return (
    <>
      {/* Main Section */}
      <Title>Introduction to Katakana</Title>
      {/* Navigation */}
      <BottomNavigation>
        <NavigationLink left link="/introductory/intro-to-hiragana">
          Introduction to Hiragana
        </NavigationLink>
        <NavigationLink link="/introductory/intro-to-katak">
          Lorem Ipsum Dolor Sit Amet
        </NavigationLink>
      </BottomNavigation>
    </>
  );
};

export default IntroToHiragana;
