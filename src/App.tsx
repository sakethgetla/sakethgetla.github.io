import React from 'react';
import { AppBar, Box, Button, Card, CardContent, CardMedia, CardActionArea, Grid, Toolbar, Typography, IconButton } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import {MenuIcon} from '@mui/icons-material/Menu'


function App() {
  // const pages = ['Products', 'Pricing', 'Blog'];
  const pages = [
    { title: "Path Finder with Solidjs", alt: "image of algorithm", body: " Use Astar, Dijkstra and Heurisic algorithms to find a path through the map.", picture: "/static/images/cards/pathFind.jpg", link: "https://sakethgetla.github.io/PathFinder_Solidjs/" },
    { title: "Path Finder with React", alt: "image of algorithm", body: " Use Astar, Dijkstra and Heurisic algorithms to find a path through the map.", picture: "/static/images/cards/pathFind.jpg", link: "https://sakethgetla.github.io/game_site/" },
    { title: "Q learning [not finished]", alt: "image of algorithm", body: "Q learing algorithm to eat the correct food", picture: "/static/images/cards/scene.jpg", link: "https://sakethgetla.github.io/game_site/" }
  ]

  // function redir() {
  // let a = useNavigate();
  // const redir = () => {
  //   a("https://sakethgetla.github.io/game_site/pathFinder");
  // }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Saketh Getla
            </Typography>
            <Button color="inherit">games</Button>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      {/* <div className="App"> */}
      {/*   <div> */}
      {/*     app */}
      {/*   </div> */}
      {/*   <a href="https://sakethgetla.github.io/game_site/"> */}
      {/*     game site */}
      {/*   </a> */}
      {/* </div> */}
      {/* <Grid container spacing={5} padding={5}> */}
      <Grid container spacing={5} paddingTop={5}>
        {
          pages.map(page => (
            <Grid item xs={4} lg={2} >
              <Card sx={{ padding: 1, margin: 1, width: 1, height:1 }} >
              {/* <Card > */}
                <CardActionArea
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = page.link;
                  }} >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={page.picture}
                    alt={page.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {page.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {page.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}

export default App;
