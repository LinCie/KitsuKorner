// MUI Component
import Box from "@mui/material/Box";
// Components
import Title from "../../components/typography/Title";
import Header from "../../components/typography/Header";
import Paragraph from "../../components/typography/Paragraph";
import Japanese from "../../components/typography/Japanese";
import Bold from "../../components/typography/Bold";
import {
  Vocabulary,
  VocabularyItem,
} from "../../components/components/Vocabulary";
import { Example, ExampleItem } from "../../components/components/Example";
import {
  BottomNavigation,
  NavigationLink,
} from "../../components/navigations/BottomNavigation";

const NonPastSection = () => {
  return (
    <Box component="section" id="non-past-copular">
      <Header>Copular Sentences: Non Past Tense</Header>
      <Paragraph>
        You may wonder, what is copula? A copula is a linguistic term that
        refers to a word or grammatical element used to link the subject of a
        sentence to a subject complement or predicate. In simpler terms, it's a
        word that connects the subject of a sentence to a description or
        attribute that characterizes the subject. In English, the most common
        copula is the verb "to be" in its various forms (am, is, are, was, were,
        etc.). For example: She <Bold>is</Bold> a student
      </Paragraph>
      <Paragraph>
        In Japanese, the state of being is also often expressed using a copula,
        which are words like "<Japanese>だ</Japanese>" (da) and "
        <Japanese>です</Japanese>" (desu). These are essential components of
        Japanese grammar, and they are used to link subjects to predicates or to
        indicate the state of being. "Da" is a plain and less formal form of the
        copula. It is commonly used in informal or casual conversations among
        friends, family members, or in relaxed settings. It is used to link a
        subject to a predicate, indicating the state of being. On the other
        hand, "Desu" is a polite form of the copula and is used in formal or
        polite speech. It is often used in business settings, with strangers, or
        when speaking with superiors, to show respect and maintain politeness.
      </Paragraph>
      <Vocabulary>
        <VocabularyItem kana="学生" furigana="がくせい" translation="Student" />
        <VocabularyItem kana="本" furigana="ほん" translation="Book" />
        <VocabularyItem kana="犬" furigana="いぬ" translation="Dog" />
      </Vocabulary>
      <Example>
        <ExampleItem
          japanese="本だ"
          reading="Hon da"
          translation="(It's) a book"
        />
        <ExampleItem
          japanese="犬です"
          reading="Inu desu"
          translation="(It's) a dog"
        />
        <ExampleItem
          japanese="学生です"
          reading="Gakusei desu"
          translation="(I'm) a student"
        />
      </Example>
    </Box>
  );
};

const NegativeNonPastSection = () => {
  return (
    <Box component="section" id="non-past-copular">
      <Header>Copular Sentences: Negative Non Past Tense</Header>
      <Paragraph>
        Much like in English, you can transform copular sentences into negative
        forms to express the negation of a statement. To do this, you simply
        need to change the copula into its negative form. In informal speech,
        the plain form of the copula is "<Japanese>だ</Japanese>". To express
        the negative non past tense in informal language, you can replace "
        <Japanese>だ</Japanese>" with "<Japanese>ではない</Japanese>". In formal
        situtation, the copula "<Japanese>です</Japanese>" can be replaced with
        "<Japanese>ではありません</Japanese>"
      </Paragraph>
      <Example>
      <ExampleItem
          japanese="犬でわない"
          reading="inu dewanai"
          translation="(It's) not a dog"
        />
        <ExampleItem
          japanese="学生ではありません"
          reading="gakusei dewaarimasen"
          translation="(I'm) not a student"
        />
      </Example>
    </Box>
  );
};

const PastSection = () => {
  return (
    <Box component="section" id="non-past-copular">
      <Header>Copular Sentences: Past Tense</Header>
      <Paragraph></Paragraph>
      <Example></Example>
    </Box>
  );
};

const StateOfBeing = () => {
  return (
    <>
      {/* Main Section */}
      <Title>State-of-Being</Title>
      <NonPastSection />
      <NegativeNonPastSection />
      <PastSection />
      {/* Navigation */}
      <BottomNavigation>
        <NavigationLink left link="/introductory/intro-to-katakana">
          Introduction to Katakana
        </NavigationLink>
        <NavigationLink link="/introductory/intro-to-katakana">
          Lorem Ipsum Dolor Sit Amet
        </NavigationLink>
      </BottomNavigation>
    </>
  );
};

export default StateOfBeing;
