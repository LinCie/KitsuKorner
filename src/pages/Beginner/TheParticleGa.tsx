// MUI Component
import Box from "@mui/material/Box";
// Components
import Title from "../../components/typography/Title";
import Header from "../../components/typography/Header";
import Paragraph from "../../components/typography/Paragraph";
import Japanese from "../../components/typography/Japanese";
import { KeyPoint, KeyPointText } from "../../components/components/KeyPoint";
import { Example, ExampleItem } from "../../components/components/Example";
import {
  Vocabulary,
  VocabularyItem,
} from "../../components/components/Vocabulary";
import {
  BottomNavigation,
  NavigationLink,
} from "../../components/navigations/BottomNavigation";

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

const GaSection = () => {
  return (
    <Box component="section" id="ga-section">
      <Header>
        The Particle<Japanese>「が」</Japanese>
      </Header>
      <Paragraph>
        What is a particle? A particle is a hiragana characters that are a
        crucial component of Japanese grammar, as they are used to indicate the
        relationship between words and phrases in a sentence. Japanese particles
        help specify the roles of nouns, verbs, and other elements in a
        sentence, such as subject, object, location, direction, and more. Some
        common Japanese particles include <Japanese>「は」</Japanese> (wa),
        <Japanese>「の」</Japanese> (no), <Japanese>「へ」</Japanese> (e),
        <Japanese>「で」</Japanese> (de), and <Japanese>「が」</Japanese> (ga),
        among others.
      </Paragraph>
      <Paragraph>
        In this section, we're going to talk about the{" "}
        <Japanese>「が」</Japanese> particle. <Japanese>「が」</Japanese> is
        often used to mark the subject of a sentence. It specifies who or what
        is performing the action of the verb. For example, if you want to say
        "There is a dog", you would say <Japanese>犬がいる</Japanese> (Inu ga
        iru), or if you want to say "John is a teacher", you would say{" "}
        <Japanese>ジョンが先生です</Japanese> (John ga sensei desu).
      </Paragraph>
      <Vocabulary>
        <VocabularyItem translation="Fish" furigana="さかな" kana="魚" />
        <VocabularyItem translation="Doctor" furigana="いしゃ" kana="医者" />
        <VocabularyItem translation="This" kana="これ" />
        <VocabularyItem translation="Pencil" furigana="えんぴつ" kana="鉛筆" />
      </Vocabulary>
      <Example>
        <ExampleItem
          japanese="魚がいる"
          reading="Sakana ga iru"
          translation="There is a fish"
        />
        <ExampleItem
          japanese="マイクが医者です"
          reading="Maiku ga isha desu"
          translation="Mike is a doctor"
        />
        <ExampleItem
          japanese="これが鉛筆です"
          reading="Kore ga enpitsu desu"
          translation="This is a pencil"
        />
      </Example>
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
      <GaSection />
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
