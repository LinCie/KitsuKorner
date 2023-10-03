// React
import { ReactNode } from "react";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// Components
import SubHeader from "../../components/typography/SubHeader";
import Japanese from "../../components/typography/Japanese";

interface VocabularyItemProps {
  translation?: ReactNode;
  furigana?: string;
  kana?: string;
}

export const VocabularyItem = (props: VocabularyItemProps) => {
  const { translation, furigana, kana } = props;
  return (
    <ListItem>
      <Typography component="p" variant="body1" fontWeight="700"></Typography>
      <Typography component="span" variant="body1" fontWeight="700">
        <Japanese>{kana}</Japanese>
      </Typography>
      <Typography component="span" variant="body2" fontWeight="500">
        <Japanese>{furigana ? ` (${furigana})` : null}</Japanese>
      </Typography>
      {" - "}
      <Typography component="span" variant="body1" fontWeight="700">
        {translation}
      </Typography>
    </ListItem>
  );
};

interface VocabularyProps {
  children?: ReactNode;
}

export const Vocabulary = (props: VocabularyProps) => {
  const { children } = props;
  return (
    <Box component="div" marginBottom="1rem">
      <SubHeader>Vocabulary</SubHeader>
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
        {children}
      </List>
    </Box>
  );
};