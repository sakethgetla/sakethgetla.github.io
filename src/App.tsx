import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import { AppBar, Box, Button, Card, CardContent, CardMedia, CardActionArea, Grid, Toolbar, Typography, IconButton } from '@mui/material';
import { AppBar, Box, Button,  Toolbar, Typography } from '@mui/material';
// import { Link as ULink } from '@mui/material';
import About from "./About"
import Home from "./Home"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import { useNavigate } from "react-router-dom";
// import {Menu} from '@mui/icons-material';


function App() {
  // const pages = ['Products', 'Pricing', 'Blog'];

  useEffect(() => {
    document.title = "Saketh Getla"
  }, [])

  return (
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar enableColorOnDark={true} position="fixed" color="primary" sx={{ broder: 1 }}>
            <Toolbar>

              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Saketh Getla
              </Typography>


              <a href="https://github.com/sakethgetla" target='_blank' rel="noreferrer" style={{textDecorationLine: 'none', "color": "white" }}>
                {/* <Button color="inherit"> */}
                <Button color="inherit" startIcon={<OpenInNewIcon/>}>

                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    github
                  </Typography>
                </Button>
              </a>

              <Button component={Link} to={'/'} color="inherit" >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Projects
                </Typography>
              </Button>
              {/* <Button component={Link} to={'/about'} color="inherit" variant="outlined"> */}
              <Button component={Link} to={'/about'} color="inherit" >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Resume
                </Typography>
              </Button>
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
    </>
  );
}

export default App;
