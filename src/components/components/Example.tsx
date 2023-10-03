// React
import { ReactNode } from "react";
// MUI Component
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// Components
import SubHeader from "../../components/typography/SubHeader";
import Japanese from "../../components/typography/Japanese";

interface ExampleItemProps {
  japanese?: string;
  reading?: string;
  translation?: string;
}

export const ExampleItem = (props: ExampleItemProps) => {
  const { japanese, reading, translation } = props;
  return (
    <ListItem>
      <Box display="flex" flexDirection="column">
        <Typography component="div" variant="body1" fontWeight="700">
          <Japanese>{japanese}</Japanese>
        </Typography>
        <Typography
          component="div"
          variant="body2"
          fontStyle="italic"
          marginBottom="0.25rem"
          sx={{
            opacity: "0.75",
          }}
        >
          {reading}
        </Typography>
        <Typography component="div" variant="body1">
          {translation}
        </Typography>
      </Box>
    </ListItem>
  );
};

interface ExampleProps {
  children?: ReactNode;
}

export const Example = (props: ExampleProps) => {
  const { children } = props;
  return (
    <Box component="div" marginBottom="1rem">
      <SubHeader>Example</SubHeader>
      <List
        sx={{
          listStyleType: "decimal",
          p: 0,
          px: 2,
          "& .MuiListItem-root": {
            display: "list-item",
            p: 0,
            marginLeft: "1rem",
            marginBottom: "0.5rem",
          },
        }}
      >
        {children}
      </List>
    </Box>
  );
};
