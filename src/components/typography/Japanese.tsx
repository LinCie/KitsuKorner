import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Japanese = (props: Props) => {
  const { children } = props;
  return <span className="japanese">{children}</span>;
};

export default Japanese;
