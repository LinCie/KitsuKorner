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
      variant="h5"
      fontWeight="bold"
      marginBottom="1rem"
    >
      {children}
    </Typography>
  );
};

export default Title;
