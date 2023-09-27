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
      <Title>Introduction to Hiragana</Title>
      {/* Navigation */}
      <BottomNavigation>
        <NavigationLink left link="/introductory/intro-to-japanese">
          Introduction to Japanese
        </NavigationLink>
        <NavigationLink link="/introductory/intro-to-katakana">
          Introduction to Katakana
        </NavigationLink>
      </BottomNavigation>
    </>
  );
};

export default IntroToHiragana;
