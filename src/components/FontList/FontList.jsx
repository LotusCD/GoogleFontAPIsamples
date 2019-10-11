import React from 'react';
import { connect } from 'react-redux';

import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button , Row, Col, CardSubtitle } from 'reactstrap';


import Fonts from './Fonts'

import './parent.css'

const FontList = ({ data }) => (
  
    <div className="parent">

      {data.map(({ id, ...otherSectionProps }) => (
                  <Fonts key={id} {...otherSectionProps} />
       
      ))}
    </div>
  );

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(FontList);