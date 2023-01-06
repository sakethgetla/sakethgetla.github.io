import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page } from 'react-pdf';
import { Grid, Card } from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function standardImageList() {
  const item = {
    img: '/static/images/SakethResume.jpg',
    title: 'title'
  };
  return (
    // <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
    <ImageList sx={{ maxWidth: 1100 }} cols={1} >
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>
  );
}


export default function About() {
  return (
    <Grid container padding={10}>
      <Grid item xs={12}>

        {standardImageList()}
        {/* <Document file="/static/pdf/SakethResume.pdf"/> */}
        {/* <Card sx={{ padding: 1, margin: 1, width: 1, height: 1 }} > */}
        {/*   <img src="/static/images/SakethResume.jpg" alt="ire" /> */}
        {/* </Card> */}
        {/* </img> */}
        {/* <Document file="/static/pdf/SakethResume.pdf"> */}
        {/*   <Page pageNumber={1} /> */}
        {/* </Document> */}
      </Grid>
    </Grid>
  )
}
