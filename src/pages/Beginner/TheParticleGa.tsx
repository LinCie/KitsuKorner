// MUI Component
import Box from "@mui/material/Box";
// Components
import Title from "../../components/typography/Title";
import Header from "../../components/typography/Header";
import Paragraph from "../../components/typography/Paragraph";
import Japanese from "../../components/typography/Japanese";
import {
  BottomNavigation,
  NavigationLink,
} from "../../components/navigations/BottomNavigation";
import { KeyPoint, KeyPointText } from "../../components/components/KeyPoint";

const ExistSection = () => {
  return (
    <Box component="section" id="exist-section">
      <Header>
        The <Japanese>ある</Japanese> and <Japanese>いる</Japanese> verb
      </Header>
      <Paragraph>
        Have you wondered how you would say, "There is a dog" in Japanese? It is
        actually really simple! You have already learned how to create a copular
        sentence before. And now, you will learn how to create a sentence with
        simple verb like <Japanese>ある</Japanese> and <Japanese>いる</Japanese>{" "}
        in this section. Don't worry, it's not that different with the copular
        sentence and you will be able to create one in no time!
      </Paragraph>
      <Paragraph>
        But what is it? What is <Japanese>ある</Japanese> and{" "}
        <Japanese>いる</Japanese>? In simpler terms, both{" "}
        <Japanese>ある</Japanese> and <Japanese>いる</Japanese> are used when
        you want to say that something exist, or perhaps something does not
        exist (we're going to talk about that later). But why there is two of
        them? Well, in Japan, there is two kind of "to exist" verb, one
        <Japanese>「ある」</Japanese>is used for inanimate objects and the other
        one <Japanese>「いる」</Japanese> is used for animate objects. What do
        you mean by animate and inanimate object? Let's say animate objects are
        living beings that can move on its own, like human and animals. Do note
        that even though plants are living being, it does not move on its own.
        So, they are considered an inanimate object. Inanimate objects are,
        you've guessed it, objects that does not move on its own.
      </Paragraph>
      <KeyPoint>
        <KeyPointText>
          Japanese use 2 different kind of verbs to say "to exist",{" "}
          <Japanese>ある</Japanese> and <Japanese>いる</Japanese>.{" "}
          <Japanese>ある</Japanese> is used for inanimate objects like a book,
          tables, plants, etc. <Japanese>いる</Japanese> is used for animate
          objects like humans and animals.
        </KeyPointText>
      </KeyPoint>
    </Box>
  );
};

const TheParticleGa = () => {
  return (
    <>
      {/* Main Section */}
      <Title>
        The Particle<Japanese>「が」</Japanese>
      </Title>
      <ExistSection />
      {/* Navigation */}
      <BottomNavigation>
        <NavigationLink left link="/beginner/state-of-being-copular">
          State of Being: Copular Sentence
        </NavigationLink>
        <NavigationLink link="/">Lorem Ipsum Dolor Sit Amet</NavigationLink>
      </BottomNavigation>
    </>
  );
};

export default TheParticleGa;
