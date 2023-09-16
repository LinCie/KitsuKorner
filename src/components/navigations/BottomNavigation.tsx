// React
import { ReactNode } from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// MUI Components
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
// MUI Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface NavigationLinkProps {
  left?: boolean;
  children?: ReactNode;
  link: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {
  const { left, children, link } = props;
  return (
    <Link
      component={RouterLink}
      variant="body2"
      underline="hover"
      to={link}
      fontWeight="bold"
      color="primary.main"
    >
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        flexDirection={left ? "row" : "row-reverse"}
      >
        {left ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        {children}
      </Box>
    </Link>
  );
};

interface BottomNavigationProps {
  children: ReactNode
}

export const BottomNavigation = (props: BottomNavigationProps) => {
  const { children } = props;
  return (
    <Box display="flex" justifyContent="space-between" marginY="50px">
      {children}
    </Box>
  );
};
