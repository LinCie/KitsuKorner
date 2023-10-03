import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Japanese from "./Japanese";
import Typography from "@mui/material/Typography";

type Props = {
  children?: ReactNode;
  furigana?: string;
};

const Furigana = (props: Props) => {
  const { children, furigana } = props;
  return (
    <Box className="japanese" display="flex" flexDirection="column" maxWidth="max-content">
      <Typography component="div" variant="caption" textAlign="center" marginBottom="-8px">
        <Japanese>{furigana}</Japanese>
      </Typography>
      <Typography component="div" variant="body1" fontWeight="700" textAlign="center">
        <Japanese>{children}</Japanese>
      </Typography>
    </Box>
  );
};

export default Furigana;
