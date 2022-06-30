import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page } from 'react-pdf';
import { Grid } from '@mui/material';



export default function About() {
  return (
    <Grid container padding={10}>
      <Grid item xs={12}>
        {/* <Document file="/static/pdf/SakethResume.pdf"/> */}
        <img src="/static/images/SakethResume.jpg" alt="ire" />
        {/* </img> */}
        {/* <Document file="/static/pdf/SakethResume.pdf"> */}
        {/*   <Page pageNumber={1} /> */}
        {/* </Document> */}
      </Grid>
    </Grid>
  )
}
