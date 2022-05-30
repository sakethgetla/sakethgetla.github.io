import React from 'react';
import { AppBar, Box, Button, Card, CardContent, CardMedia, CardActionArea, Toolbar, Typography, IconButton } from '@mui/material';
// import {MenuIcon} from '@mui/icons-material/Menu'

function App() {
  const pages = ['Products', 'Pricing', 'Blog'];

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
      <div className="App">
        <div>
          app
        </div>
        <a href="https://sakethgetla.github.io/game_site/">
          game site
        </a>
      </div>
    <Card sx={{ width: 1/2, maxWidth:350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/static/images/cards/pathFind.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Path Finding Algorithms
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Use Astar, Dijkstra and Heurisic algorithms to find a path through the map.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default App;
