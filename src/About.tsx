import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page } from 'react-pdf';



export default function About() {
  return (
    <div>
      {/* <Document file="/static/pdf/SakethResume.pdf"/> */}
      <Document file="/static/pdf/SakethResume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
