import React from 'react';
import { AppBar, Box, Button, Card, CardContent, CardMedia, CardActionArea, Grid, Toolbar, Typography, IconButton } from '@mui/material';

export default function App() {
  const pages = [
    { id: 1, title: "Q learning with Tensorflow.js & planck.js", alt: "image of algorithm", body: "Q learing algorithm to eat the food", picture: "/static/images/cards/AI_agent.jpg", link: "https://sakethgetla.github.io/QLearningGames/" },
    { id: 2, title: "Path Finder with solid.js", alt: "image of algorithm", body: " Use Astar, Dijkstra and Heurisic algorithms to find a path through the map.", picture: "/static/images/cards/PathFinderSolidjs.jpg", link: "https://sakethgetla.github.io/PathFinder_Solidjs/" },
    { id: 3, title: "Path Finder with react.js", alt: "image of algorithm", body: " Use Astar, Dijkstra and Heurisic algorithms to find a path through the map.", picture: "/static/images/cards/pathFind.jpg", link: "https://sakethgetla.github.io/PathFinder_React/" },
    { id: 4, title: "Q learning with Tensorflow.js & matter.js [not finished]", alt: "image of algorithm", body: "Q learing algorithm to eat the correct food", picture: "/static/images/cards/scene.jpg", link: "https://sakethgetla.github.io/game_site/" },
  ]

  return (
    <Grid container spacing={5} paddingTop={5}>
      {
        pages.map(page => (
          <Grid key={page.id} item xs={12} sm={6} md={6} lg={2} >
            <Card sx={{ padding: 1, margin: 1, width: 1, height: 1 }} >
              {/* <Card > */}
              <CardActionArea
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = page.link;
                }} >
                <CardMedia
                  component="img"
                  /* height="100%" */
                  sx={{ maxWidth: "auto", height: 300 }}
                  /* sx={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%" }} */
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
  )
}
