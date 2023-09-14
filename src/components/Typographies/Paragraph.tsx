import { ReactNode } from "react";

import Typography from "@mui/material/Typography";

type Props = {
  children: ReactNode;
};

const Japanese = (props: Props) => {
  const { children } = props;
  return (
    <Typography
      paragraph
      textAlign="justify"
      sx={{
        textIndent: 25,
      }}
    >
      {children}
    </Typography>
  );
};

export default Japanese;
