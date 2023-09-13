// React
import { useState } from "react";
// React Router
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
// MUI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Theme
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightMode, darkMode, DisplaySwitch } from "./theme";
import { createTheme } from "@mui/material";
// Pages
import { pages } from "./pages";

const DrawerContent = () => {
  let location = useLocation();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: 240 }}>
      <Toolbar />
      {pages.map((page) => {
        return (
          <Accordion
            disableGutters
            defaultExpanded={
              location.pathname == `/${page.root}` ? true : false
            }
            key={page.level}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="h2" variant="body1">
                {page.level}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  position: "relative",
                  overflow: "auto",
                  maxHeight: 300,
                  "& ul": { padding: 0 },
                }}
              >
                {page.contents.map((content) => {
                  return (
                    <ListItem key={content.link}>
                      <Link
                        component={RouterLink}
                        variant="body2"
                        underline="hover"
                        color={
                          location.pathname == `${page.root}/${content.link}`
                            ? "primary"
                            : "inherit"
                        }
                        to={`${page.root}/${content.link}`}
                      >
                        {content.name}
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

interface HeaderProps {
  displayMode: boolean;
  handleDisplayMode: () => void;
}

const Header = (props: HeaderProps) => {
  const { displayMode, handleDisplayMode } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSwitchChange = () => {
    handleDisplayMode();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", sm: "none" } }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            to="/"
          >
            KitsuKorner
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          <FormGroup>
            <FormControlLabel
              control={<DisplaySwitch sx={{ m: 1 }} />}
              label=""
              checked={displayMode}
              onChange={handleSwitchChange}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        aria-label="kitsu navigation"
      >
        <Drawer
          anchor="left"
          variant="temporary"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
    </Box>
  );
};

const Root = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = createTheme(isDark ? darkMode : lightMode);

  const handleDisplayMode = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleDisplayMode={handleDisplayMode} displayMode={isDark} />
      <Box sx={{ marginTop: 13, marginLeft: { xs: "0px", sm: "240px" }, paddingX: 5 }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
