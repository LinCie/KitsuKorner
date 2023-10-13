// React
import { ReactNode, createContext, useContext, useState } from "react";
// MUI Component
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
// Component
import Header from "../typography/Header";
import Japanese from "../typography/Japanese";

// Declare revealed context type
interface RevealContextType {
  isRevealed: boolean;
}
const RevealContext = createContext<RevealContextType>({ isRevealed: false });

interface ExerciseProps {
  children?: ReactNode;
}

export const WrittenExercise = (props: ExerciseProps) => {
  const { children } = props;

  // Add revealed functionality based on user click event
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const handleRevealChange = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <Box mb="1rem" id="written-exercise">
      <Header>Written Exercise</Header>
      {/* Exercise Note */}
      <Typography component="p" variant="body1" mb="1rem">
        Note: You're encouraged to use third party dictionary such as{" "}
        <Link href="https://jisho.org/" target="_blank">
          Jisho
        </Link>{" "}
        to look up several vocabularies in this exercise
      </Typography>
      {/* Exercise List */}
      <List
        sx={{
          listStyleType: "decimal",
          p: 0,
          px: 2,
          "& .MuiListItem-root": {
            display: "list-item",
            p: 0,
            marginLeft: "1rem",
          },
        }}
      >
        <RevealContext.Provider value={{ isRevealed }}>
          {children}
        </RevealContext.Provider>
      </List>
      {/* Button that is used to set isRevealed */}
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant={isRevealed ? "contained" : "outlined"}
          sx={{ textTransform: "none" }}
          onClick={handleRevealChange}
          aria-label="reveal answer"
        >
          Reveal Answer
        </Button>
      </Box>
    </Box>
  );
};

interface ExerciseItemProps {
  children?: ReactNode;
  answer?: string;
}

export const WrittenExerciseItemJapanese = (props: ExerciseItemProps) => {
  const { children, answer } = props;
  const { isRevealed } = useContext(RevealContext);
  return (
    <ListItem>
      <Box
        display="flex"
        justifyContent="space-between"
        marginBottom="1rem"
        sx={{
          borderBottomWidth: "1px",
          borderBottomStyle: { xs: "hidden", sm: "solid" },
          borderBottomColor: "primary.main",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          component="p"
          variant="body1"
          sx={{
            mb: { xs: "0.25rem", sm: "0" },
            width: { xs: "100%", sm: "50%" },
          }}
        >
          {children}
        </Typography>
        <Box display="flex" sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Typography
            variant="body1"
            component="p"
            mx="1rem"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {" = "}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              borderBottomWidth: "1px",
              borderBottomStyle: "dashed",
              borderBottomColor: "primary.main",
              width: "100%",
              px: "1rem",
              mb: "0.25rem",
            }}
          >
            <Typography
              component="p"
              variant="body1"
              sx={{
                // Allow select and show the answer based on isRevealed
                opacity: isRevealed ? "1" : "0",
                userSelect: isRevealed ? "inherit" : "none",
              }}
            >
              <Japanese>{answer}</Japanese>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};

export interface ChoiceExerciseItemProps {
  question: string;
  answers: {
    id: 1 | 2 | 3 | 4;
    answer: string;
  }[];
  correct: 1 | 2 | 3 | 4;
}

interface ChoiceExerciseProps {
  items: ChoiceExerciseItemProps[];
}

const ChoiseExerciseItem = (props: ChoiceExerciseItemProps) => {
  const { question, answers, correct } = props;
  const { isRevealed } = useContext(RevealContext);
  const [userAnswer, setUserAnswer] = useState<number | undefined>(undefined);

  // A function that change none if isRevealed is true and provide functionality 
  // that can setUserAnswer based on the button clicked, remove answer if user select the same answer
  const handleAnswer = (number: number) => {
    if (isRevealed) {
      return;
    }
    if (userAnswer === number) {
      setUserAnswer(undefined);
    } else {
      setUserAnswer(number);
    }
  };

  return (
    <ListItem sx={{ mb: "1rem" }}>
      <Box display="flex" flexDirection="column">
        <Typography component="p" variant="body1" mb="0.5rem">
          {question}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "1fr 1fr 1fr 1fr",
            },
            gap: "0.5rem",
          }}
        >
          {answers.map((answer) => {
            return (
              <Button
                key={answer.id}
                aria-label={answer.answer}
                variant={
                  isRevealed
                    ? answer.id === correct
                      ? "contained"
                      : answer.id === userAnswer
                      ? "contained"
                      : "outlined"
                    : answer.id === userAnswer
                    ? "contained"
                    : "outlined"
                }
                color={
                  isRevealed
                    ? answer.id === correct
                      ? "info"
                      : "primary"
                    : "primary"
                }
                sx={{
                  textTransform: "none",
                  fontWeight: "700",
                }}
                onClick={() => handleAnswer(answer.id)}
              >
                {answer.answer}
              </Button>
            );
          })}
        </Box>
      </Box>
    </ListItem>
  );
};

export const ChoiceExercise = (props: ChoiceExerciseProps) => {
  const { items } = props;
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleRevealChange = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <Box mb="1rem" id="choice-exercise">
      <Header>Choice Exercise</Header>
      <Typography component="p" variant="body1" mb="1rem">
        Note: You're encouraged to use third party dictionary such as{" "}
        <Link href="https://jisho.org/" target="_blank">
          Jisho
        </Link>{" "}
        to look up several vocabularies in this exercise
      </Typography>
      <List
        sx={{
          listStyleType: "decimal",
          p: 0,
          px: 2,
          "& .MuiListItem-root": {
            display: "list-item",
            p: 0,
            marginLeft: "1rem",
          },
        }}
      >
        <RevealContext.Provider value={{ isRevealed }}>
          {items.map((item, index) => {
            return (
              <ChoiseExerciseItem
                key={index}
                question={item.question}
                answers={item.answers}
                correct={item.correct}
              />
            );
          })}
        </RevealContext.Provider>
      </List>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant={isRevealed ? "contained" : "outlined"}
          sx={{ textTransform: "none" }}
          onClick={handleRevealChange}
          aria-label="reveal answer"
        >
          Reveal Answer
        </Button>
      </Box>
    </Box>
  );
};
