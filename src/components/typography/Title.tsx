import { ReactNode } from "react";
import Typography from "@mui/material/Typography";

type Props = {
  children: ReactNode;
};

const Title = (props: Props) => {
  const { children } = props;
  return (
    <Typography
      component="h1"
      variant="h4"
      fontWeight="bold"
      textAlign="center"
      marginBottom="1rem"
    >
      {children}
    </Typography>
  );
};

export default Title;
