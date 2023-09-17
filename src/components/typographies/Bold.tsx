import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Japanese = (props: Props) => {
  const { children } = props;
  return <span style={{fontWeight: "bold"}}>{children}</span>;
};

export default Japanese;
