import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { AppBar, Box, Button, Card, CardContent, CardMedia, CardActionArea, Grid, Toolbar, Typography, IconButton } from '@mui/material';
import About from "./About"
import Home from "./Home"
// import { useNavigate } from "react-router-dom";
// import {MenuIcon} from '@mui/icons-material/Menu'


function App() {
  // const pages = ['Products', 'Pricing', 'Blog'];

  useEffect(() => {
    document.title = "Saketh Getla"
  }, [])

  // function redir() {
  // let a = useNavigate();
  // const redir = () => {
  //   a("https://sakethgetla.github.io/game_site/pathFinder");
  // }
  return (
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar enableColorOnDark={ true } position="fixed" color="primary">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Saketh Getla
              </Typography>
              <Button component={Link} to={'/'} color="inherit">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Projects
                </Typography>
              </Button>
              <Button component={Link} to={'/about'} color="inherit">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  About
                </Typography>
              </Button>
              {/* <Button component={Link} to={'/about'} variant="outlined" color="inherit" >About</Button> */}
              {/* <Link to="/about" color="inherit"> */}
              {/*   <Button variant="outlined" color="inherit" >About</Button> */}
              {/* </Link> */}
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
      {/* <div className="App"> */}
      {/*   <div> */}
      {/*     app */}
      {/*   </div> */}
      {/*   <a href="https://sakethgetla.github.io/game_site/"> */}
      {/*     game site */}
      {/*   </a> */}
      {/* </div> */}
      {/* <Grid container spacing={5} padding={5}> */}
    </>
  );
}

export default App;
