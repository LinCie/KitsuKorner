// React
import { ReactNode } from "react";
// MUI Component
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Component
import Subheader from "../typography/SubHeader";

interface KeyPointProps {
  children?: ReactNode;
}

export const KeyPoint = (props: KeyPointProps) => {
  const { children } = props;
  return (
    <Box
      sx={{
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "primary.main",
        p: "1rem",
        mb: "1rem",
        mx: { xs: 0, sm: "5rem" },
      }}
    >
      <Subheader>Key Points</Subheader>
      {children}
    </Box>
  );
};

interface KeyPointTextProps {
  children?: ReactNode;
}

export const KeyPointText = (props: KeyPointTextProps) => {
  const { children } = props;
  return (
    <Typography component="p" variant="body1">
      {children}
    </Typography>
  )
};
