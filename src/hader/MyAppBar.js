import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { Outlet, Link } from "react-router-dom";

export default function MyAppBar(props) {
  const [auth, setAuth] = React.useState("" + props.loginStatus);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logInIcon, setlogInIcon] = React.useState(null);
  console.log("LOGIN STATUS- PROPSSS----" + auth);

  //   React.useEffect(() => {
  //     setAuth(props.loginStatus);
  //   }, [props.loginStatus]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuLogout = (event) => {
    setlogInIcon(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogin = () => {
    setlogInIcon(null);
    localStorage.setItem("login", "done1111");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth === "done" ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenuLogout}
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <></>
          )}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {auth === "done" ? (
              <> </>
            ) : (
              <MenuItem onClick={handleClose}>
                <Link to="/signIn">SignIn</Link>
              </MenuItem>
            )}

            <MenuItem onClick={handleClose}>
              <Link to="/api">API Component</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/myaccount">My account</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/classComponent">Class Component Example</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/functionCompnent">Functional Component Example</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/todo">To Do List Application</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/employee">Employee Management Application</Link>
            </MenuItem>
          </Menu>

          <Menu
            id="menu-appbar"
            anchorEl={logInIcon}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(logInIcon)}
            onClose={handleCloseLogin}
          >
            <MenuItem onClick={handleCloseLogin}>
              <Link to="/signIn">Logout</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
