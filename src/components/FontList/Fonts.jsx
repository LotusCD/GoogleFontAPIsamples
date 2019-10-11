import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';



import { Card, CardImg, CardBody, CardTitle, CardText, Button , Row, Col, CardSubtitle } from 'reactstrap';



const Fonts = ({ family, category }) => (
 
      
    <div>
        <GoogleFontLoader
      fonts={[
        {
          font: Object.values({family}).join(','),
          weights: [400, '400i'],
        }
      ]}

    />
    
      <Card>
        <CardImg top width="60%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{family}</CardTitle>
          <CardSubtitle>{category}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <p style={{ fontFamily: Object.values({family}).join(',') }}>{family}</p>
        </CardBody>
      </Card>
    </div>
 
 
    
 
);


export default Fonts
