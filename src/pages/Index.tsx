// MUI Components
import Typography from "@mui/material/Typography";
// Components
import Japanese from "../components/typographies/Japanese";
import Bold from "../components/typographies/Bold";
import Paragraph from "../components/typographies/Paragraph";
import { BottomNavigation, NavigationLink } from "../components/navigations/BottomNavigation";

const Index = () => {
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        marginBottom="1rem"
      >
        Welcome to KitsuKorner
      </Typography>
      <Paragraph>
        <Bold>
          Kon'nichiwa (<Japanese>こんにちは</Japanese>)!
        </Bold>{" "}
        Are you ready to embark on an exciting journey into the world of the
        Japanese language and culture? Look no further than KitsuKorner, your
        ultimate destination for mastering everything Japanese.
      </Paragraph>
      <Paragraph>
        Learning a new language can be a thrilling adventure, and Japanese is no
        exception. Whether you're a complete beginner or already have some
        knowledge of the language, KitsuKorner is here to guide you every step
        of the way. Our mission is to make your Japanese learning experience
        both enjoyable and effective.
      </Paragraph>
      <Paragraph>
        So, are you ready to take the first step towards becoming a Japanese
        language master? Dive into the captivating world of KitsuKorner and
        discover the beauty of Japanese language and culture. Start your
        learning adventure now, and who knows, you might soon be able to say, "
        <Bold>
          <Japanese>日本語を話せます!</Japanese>
        </Bold>
        " (I can speak Japanese!)
      </Paragraph>
      <BottomNavigation>
        <NavigationLink left link="/">Home</NavigationLink>
        <NavigationLink link="introductory/intro-to-japanese">Introduction to Japanese</NavigationLink>
      </BottomNavigation>
    </>
  );
};

export default Index;
