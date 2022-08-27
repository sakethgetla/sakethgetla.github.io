import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { AppBar, Box, Button, Card, CardContent, CardMedia, CardActionArea, Grid, Toolbar, Typography, IconButton } from '@mui/material';
import {Link as ULink} from '@mui/material';
import About from "./About"
import Home from "./Home"
// import { useNavigate } from "react-router-dom";
// import {Menu} from '@mui/icons-material';


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
          <AppBar enableColorOnDark={true} position="fixed" color="primary" sx={{ broder: 1 }}>
            <Toolbar>
              {/* <IconButton */}
              {/*   size="large" */}
              {/*   edge="start" */}
              {/*   color="inherit" */}
              {/*   aria-label="menu" */}
              {/*   sx={{ mr: 2 }} */}
              {/* > */}
              {/*   <Menu/> */}
              {/* </IconButton> */}

              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Saketh Getla
              </Typography>
              {/* <Button component={Link} to={'/'} color="inherit"  sx={{padding:1, margin: 1}} variant="outlined"> */}
              {/* <ULink href="https://github.com/sakethgetla" color='inherit'> */}
              <ULink component={Button} underline="hover" href="https:github.com/sakethgetla" color='inherit'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  github
                </Typography>
              </ULink>

              {/* <Button component={Link} to={'/'} color="inherit" > */}
              {/*   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
              {/*     github */}
              {/*   </Typography> */}
              {/* </Button> */}
              <Button component={Link} to={'/'} color="inherit" >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Projects
                </Typography>
              </Button>
              {/* <Button component={Link} to={'/about'} color="inherit" variant="outlined"> */}
              <Button component={Link} to={'/about'} color="inherit" >
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

        <Box sx={{ margin: 1 }}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>

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
