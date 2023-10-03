import { ReactNode } from "react";
import Typography from "@mui/material/Typography";

type Props = {
  children?: ReactNode;
};

const Subheader = (props: Props) => {
  const { children } = props;
  return (
    <Typography component="h2" variant="body1" fontWeight="bold" marginBottom="1rem">
      {children}
    </Typography>
  );
};

export default Subheader;
