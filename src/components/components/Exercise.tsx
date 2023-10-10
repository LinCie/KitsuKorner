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

interface RevealContextType {
  isRevealed: boolean;
}

const RevealContext = createContext<RevealContextType>({ isRevealed: false });

interface ExerciseProps {
  children?: ReactNode;
}

export const WrittenExercise = (props: ExerciseProps) => {
  const { children } = props;
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleRevealChange = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <Box>
      <Header>Written Exercise</Header>
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
          {children}
        </RevealContext.Provider>
      </List>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
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
              sx={{ opacity: `${isRevealed ? "1" : "0"}` }}
            >
              <Japanese>{answer}</Japanese>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};
