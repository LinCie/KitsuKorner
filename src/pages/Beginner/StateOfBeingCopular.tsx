// MUI Component
import Box from "@mui/material/Box";
// Components
import Title from "../../components/typography/Title";
import Header from "../../components/typography/Header";
import Paragraph from "../../components/typography/Paragraph";
import Japanese from "../../components/typography/Japanese";
import Bold from "../../components/typography/Bold";
import { KeyPoint, KeyPointText } from "../../components/components/KeyPoint";
import {
  Vocabulary,
  VocabularyItem,
} from "../../components/components/Vocabulary";
import { Example, ExampleItem } from "../../components/components/Example";
import {
  WrittenExercise,
  WrittenExerciseProps,
  ChoiceExercise,
  ChoiceExerciseItemProps,
} from "../../components/components/Exercise";
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
      <KeyPoint>
        <KeyPointText>
          If you want to declare something, you'll have to attach the thing you
          want to declare with "<Japanese>だ</Japanese>" in informal situations,
          or "<Japanese>です</Japanese>" in formal situations.
        </KeyPointText>
      </KeyPoint>
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
    <Box component="section" id="negative-non-past-copular">
      <Header>Copular Sentences: Negative Non Past Tense</Header>
      <Paragraph>
        Much like in English, you can transform copular sentences into negative
        forms to express the negation of a statement. To do this, you simply
        need to change the copula into its negative form. In informal speech,
        the plain form of the copula is "<Japanese>だ</Japanese>". To express
        the negative non past tense in informal language, you can replace "
        <Japanese>だ</Japanese>" with "<Japanese>ではない</Japanese>". In formal
        situtation, the copula "<Japanese>です</Japanese>" can be replaced with
        "<Japanese>ではありません</Japanese>".
      </Paragraph>
      <KeyPoint>
        <KeyPointText>
          Similar to Non Past Tense, if you want to declare something as a
          negation (declaring something that is not), you can attach "
          <Japanese>ではない</Japanese>" in informal situations, and "
          <Japanese>ではありません</Japanese>" in formal situations.
        </KeyPointText>
      </KeyPoint>
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
    <Box component="section" id="past-copular">
      <Header>Copular Sentences: Past Tense</Header>
      <Paragraph>
        In Japanese, the copular past tense is used to express past states or
        actions using the copula. As you have learned, there are 2 non past
        copulars, "<Japanese>だ</Japanese>" and "<Japanese>です</Japanese>". In
        order to use it to express past states, you'll have to transform it into
        "<Japanese>だった</Japanese>" and "<Japanese>でした</Japanese>"
        respectively.
      </Paragraph>
      <Vocabulary>
        <VocabularyItem kana="元気" furigana="げんき" translation="Healthy" />
      </Vocabulary>
      <Example>
        <ExampleItem
          japanese="元気だった"
          reading="Genki datta"
          translation="(I) was healthy"
        />
        <ExampleItem
          japanese="学生でした"
          reading="Gakusei deshita"
          translation="(I) was a student"
        />
      </Example>
    </Box>
  );
};

const NegativePastSection = () => {
  return (
    <Box component="section" id="negative-past-copular">
      <Header>Copular Sentences: Negative Past Tense</Header>
      <Paragraph>
        Similar to negative non past tense, the negative copular past tense is
        used to describe past states or conditions that were not true or actions
        that did not happen in the past. It involves attaching "
        <Japanese>ではなかった</Japanese>" for informal situations, or "
        <Japanese>ではありませんでした</Japanese>" for formal situations.
      </Paragraph>
      <Example>
        <ExampleItem
          japanese="犬ではなかった"
          reading="Inu dewanakatta"
          translation="(It) wasn't a dog"
        />
        <ExampleItem
          japanese="学生ではありませんでした"
          reading="Gakusei dewaarimasendeshita"
          translation="(I) wasn't a student"
        />
      </Example>
    </Box>
  );
};

const WrittenExerciseSection = () => {
  const exerciseItems: WrittenExerciseProps["items"] = [
    {
      romaji: "(It's) a dog.",
      japanese: "犬だ / 犬です",
    },
    {
      romaji: "(I) was a teacher.",
      japanese: "先生だった / 先生でした",
    },
    {
      romaji: "(I'm) healthy / fine.",
      japanese: "元気だ / 元気です",
    },
    {
      romaji: "(It's) not an animal.",
      japanese: "動物ではない / 動物ではありません",
    },
    {
      romaji: "(It) wasn't a book.",
      japanese: "本ではなかった / 本ではありませんでした",
    },
  ];

  return (
    <Box component="section" id="written-exercise">
      <WrittenExercise items={exerciseItems} />
    </Box>
  );
};

const ChoiceExerciseSection = () => {
  const exerciseItems: ChoiceExerciseItemProps[] = [
    {
      question: "(It's) a building",
      answers: [
        {
          id: 1,
          answer: "ビルだった",
        },
        {
          id: 2,
          answer: "ビルではない",
        },
        {
          id: 3,
          answer: "ビルだ",
        },
        {
          id: 4,
          answer: "ビルではなかった",
        },
      ],
      correct: 3,
    },
    {
      question: "(It's) not a train",
      answers: [
        {
          id: 1,
          answer: "電車ではない",
        },
        {
          id: 2,
          answer: "電車ではなかった",
        },
        {
          id: 3,
          answer: "電車だった",
        },
        {
          id: 4,
          answer: "電車だ",
        },
      ],
      correct: 1,
    },
    {
      question: "(It) was a cinema",
      answers: [
        {
          id: 1,
          answer: "映画館だ",
        },
        {
          id: 2,
          answer: "映画館ではない",
        },
        {
          id: 3,
          answer: "映画館だった",
        },
        {
          id: 4,
          answer: "映画館ではなかった",
        },
      ],
      correct: 3,
    },
  ];

  return (
    <Box component="section" id="choice-exercise">
      <ChoiceExercise items={exerciseItems} />
    </Box>
  );
};

const StateOfBeingCopular = () => {
  return (
    <>
      {/* Main Section */}
      <Title>State-of-Being: Copular Sentence</Title>
      <NonPastSection />
      <NegativeNonPastSection />
      <PastSection />
      <NegativePastSection />
      <WrittenExerciseSection />
      <ChoiceExerciseSection />
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

export default StateOfBeingCopular;
