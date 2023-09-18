// MUI Components
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// Components
import Paragraph from "../../components/typography/Paragraph";
import Bold from "../../components/typography/Bold";
import Japanese from "../../components/typography/Japanese";
import Header from "../../components/typography/Header";
import {
  BottomNavigation,
  NavigationLink,
} from "../../components/navigations/BottomNavigation";

const Index = () => {
  return (
    <>
      {/* Main Section */}
      <Typography
        component="h1"
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        marginBottom="1rem"
      >
        Introduction to Japanese
      </Typography>
      <Paragraph>
        The Japanese language, with its rich history and unique writing systems,
        is a captivating and rewarding journey for language enthusiasts. In this
        section, we'll delve into the fundamentals of the Japanese language,
        giving you a taste of what awaits on your path to Japanese fluency.
      </Paragraph>
      <Paragraph>
        The Japanese language is believed to have evolved over thousands of
        years. While it is considered a language isolate, meaning it has no
        known relation to any other language, it has been influenced by Chinese,
        Korean, and other neighboring languages over time.
      </Paragraph>
      {/* Writing System */}
      <Header>Writing Systems</Header>
      <Paragraph>
        One of the most distinctive aspects of Japanese is its writing systems.
        Japanese employs three main scripts, each serving distinct purposes in
        the language.
      </Paragraph>
      <List
        sx={{
          listStyleType: "disc",
          p: 0,
          pb: "1rem",
          px: 5,
          "& .MuiListItem-root": {
            display: "list-item",
            p: 0,
            pb: 1,
          },
        }}
      >
        <ListItem>
          <Typography component="p" variant="body1" textAlign="justify">
            <Bold>Hiragana</Bold> (
            <Bold>
              <Japanese>平仮名</Japanese>
            </Bold>
            ). A syllabary used for native Japanese words and grammatical
            elements. For example,{" "}
            <Bold>
              <Japanese>たべる | た(ta)べ(be)る(ru) | taberu </Japanese>(to eat)
            </Bold>{" "}
            is written in Hiragana
          </Typography>
        </ListItem>
        <ListItem>
          <Typography component="p" variant="body1" textAlign="justify">
            <Bold>Katakana</Bold> (
            <Bold>
              <Japanese>片仮名</Japanese>
            </Bold>
            ). Another syllabary used primarily for loanwords, foreign names,
            and onomatopoeia. For example,{" "}
            <Bold>
              <Japanese>タベル | タ(ta)ベ(be)ル(ru) | taberu </Japanese>(to eat)
            </Bold>{" "}
            is the same word written in Katakana. While it's less common to
            write native Japanese words like "to eat" in Katakana, it might be
            used for emphasis or in specific contexts.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography component="p" variant="body1" textAlign="justify">
            <Bold>Kanji</Bold> (
            <Bold>
              <Japanese>漢字</Japanese>
            </Bold>
            ). Logographic characters borrowed from Chinese, representing words
            and concepts. There are thousands of Kanji characters in use, and
            mastering them is a lifelong endeavor. For example,{" "}
            <Bold>
              <Japanese>食べる | 食(ta)べ(be)る(ru) | taberu</Japanese> (to eat)
            </Bold>{" "}
            is the Kanji representation of "to eat." The Kanji character{" "}
            <Japanese>食 </Japanese>
            (shoku) means "food" or "to eat," and it adds depth and meaning to
            the word. Kanji allows for a more precise and nuanced expression of
            the concept.
          </Typography>
        </ListItem>
      </List>
      {/* Grammar structure */}
      <Header>Grammar and Sentence Structure</Header>
      <Paragraph>
        Japanese sentence structure differs from English and many other
        languages. It follows a subject-object-verb (SOV) order, meaning the
        verb typically comes at the end of the sentence. This structure can take
        some getting used to, but it's a key aspect of Japanese grammar.
      </Paragraph>
      <Paragraph>
        Japanese grammar also uses particles, small words that indicate the role
        of a word in a sentence. For example, "<Japanese>は</Japanese>" (wa) is
        used to mark the topic of a sentence, and "<Japanese>を</Japanese>" (o)
        indicates the direct object of a verb.
      </Paragraph>
      {/* Pronounciation */}
      <Header>Pronunciation</Header>
      <Paragraph>
        Japanese pronunciation is generally straightforward once you grasp the
        sounds of the language. There are five vowel sounds: "a," "i," "u," "e,"
        and "o." Consonant sounds are relatively limited compared to English,
        making Japanese phonetics less challenging.
      </Paragraph>
      <Paragraph>
        Accurate pronunciation is crucial in Japanese, as changing the
        intonation or stress pattern of a word can alter its meaning. Politeness
        levels, known as "keigo," also influence pronunciation and word choice,
        emphasizing the importance of context and respect in communication.
      </Paragraph>
      {/* Honorifics */}
      <Header>Politeness and Honorifics</Header>
      <Paragraph>
        Japanese culture places great importance on politeness, and this is
        reflected in the language. There are various levels of politeness,
        ranging from casual speech used among friends and family to formal
        language used in business and formal situations.
      </Paragraph>
      <Paragraph>
        Honorifics, such as "<Japanese>さん</Japanese>" (san) or "
        <Japanese>様</Japanese>" (sama), are added to names and titles to show
        respect. Understanding when and how to use honorifics is crucial in
        Japanese society.
      </Paragraph>
      {/* Navigation */}
      <BottomNavigation>
        <NavigationLink left link="/">
          Home
        </NavigationLink>
        <NavigationLink link="/introductory/intro-to-hiragana">
          Introduction to Hiragana
        </NavigationLink>
      </BottomNavigation>
    </>
  );
};

export default Index;
