// Introductory
import IntroToJapan from "./pages/introductory/IntroToJapan"
import IntroToHiragana from "./pages/introductory/IntroToHiragana"
import IntroToKatakana from "./pages/introductory/IntroToKatakana"
// Beginner
import StateOfBeing from "./pages/Beginner/StateOfBeing"

export const pages = [
  {
    level: "Introductory",
    root: "introductory",
    contents: [
      {
        name: "Introduction to Japanese",
        link: "intro-to-japanese",
        element: <IntroToJapan />
      },
      {
        name: "Introduction to Hiragana",
        link: "intro-to-hiragana",
        element: <IntroToHiragana />
      },
      {
        name: "Introduction to Katakana",
        link: "intro-to-katakana",
        element: <IntroToKatakana />
      },
    ]
  },
  {
    level: "Beginner",
    root: "beginner",
    contents: [
      {
        name: "State-of-Being",
        link: "state-of-being",
        element: <StateOfBeing />
      }
    ]
  },
  {
    level: "Intermediate",
    root: "intermediate",
    contents: []
  },
  {
    level: "Advanced",
    root: "advanced",
    contents: []
  },
  {
    level: "Expert",
    root: "expert",
    contents: []
  },
  {
    level: "Tools",
    root: "tools",
    contents: []
  }
]