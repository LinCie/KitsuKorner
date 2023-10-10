// Introductory
import IntroToJapan from "./pages/introductory/IntroToJapan"
import IntroToHiragana from "./pages/introductory/IntroToHiragana"
import IntroToKatakana from "./pages/introductory/IntroToKatakana"
// Beginner
import StateOfBeingCopular from "./pages/Beginner/StateOfBeingCopular"

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
        name: "State-of-Being: Copular Sentence",
        link: "state-of-being-copular",
        element: <StateOfBeingCopular />
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