import React, { Component } from 'react'
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

import hp from '../assets/image/jumbotron/hp-gadget.png'
import motor from '../assets/image/jumbotron/motor.png'
import car from '../assets/image/jumbotron/car.png'
import fashion from '../assets/image/jumbotron/fashion.png'
import home from '../assets/image/jumbotron/home.png'
import hobbie from '../assets/image/jumbotron/hobbie.png'
import baby from '../assets/image/jumbotron/baby.png'
import others from '../assets/image/jumbotron/others.png'
import book from '../assets/image/jumbotron/book.png'

class Jumbo_list_group_item extends Component {

  render() {
    return (
      <div>
        <div className="hidden-xs">
          <ListGroup>
            <ListGroupItem href="#link1">
              <img src={ hp } width="25" alt="" />
              Gadget
            </ListGroupItem>
            <ListGroupItem href="#link2">
              <img src={ fashion } width="25" alt="" />
              Clothes
            </ListGroupItem>
            <ListGroupItem href="#link3">
              <img src={ home } width="25" alt="" />
              House
            </ListGroupItem>
            <ListGroupItem href="#link4">
              <img src={ car } width="25" alt="" />
              Cars
            </ListGroupItem>
            <ListGroupItem href="#link5">
              <img src={ motor } width="25" alt="" />
              Motors
            </ListGroupItem>
            <ListGroupItem href="#link6">
              <img src={ hobbie } width="25" alt="" />
              Hobbie
            </ListGroupItem>
            <ListGroupItem href="#link6">
              <img src={ book } width="25" alt="" />
              Books
            </ListGroupItem>
            <ListGroupItem href="#link7">
              <img src={ baby } width="25" alt="" />
              Child
            </ListGroupItem>
            <ListGroupItem href="#link8">
              <img src={ others } width="25" alt="" />
              Others
            </ListGroupItem>
          </ListGroup>
        </div>
        <div className="visible-xs hidden-md">
          <Row className="row-xs-list-group-item">
            <Col xs={ 6 }>
              <a href="#hpAndGadget">
                <Col xs={ 4 }>
                  <img src={ hp } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Gadget
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a href="#motor">
                <Col xs={ 4 }>
                  <img src={ motor } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Motors
                </Col>
              </a>
            </Col>
          </Row>
          <Row className="row-xs-list-group-item">
            <Col xs={ 6 }>
              <a href="#car">
                <Col xs={ 4 }>
                  <img src={ car } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Cars
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a href="#fashion">
                <Col xs={ 4 }>
                  <img src={ fashion } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Clothes
                </Col>
              </a>
            </Col>
          </Row>
          <Row className="row-xs-list-group-item">
            <Col xs={ 6 }>
              <a href="#home">
                <Col xs={ 4 }>
                  <img src={ home } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  House
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a href="#hobbie">
                <Col xs={ 4 }>
                  <img src={ hobbie } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Hobbie
                </Col>
              </a>
            </Col>
          </Row>
          <Row className="row-xs-list-group-item">
            <Col xs={ 6 }>
              <a href="#baby">
                <Col xs={ 4 }>
                  <img src={ baby } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Child
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a href="#others">
                <Col xs={ 4 }>
                  <img src={ book } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Books
                </Col>
              </a>
            </Col>
          </Row>
          <Row className="row-xs-list-group-item">
            <Col xs={ 6 }>
              <a href="#baby">
                <Col xs={ 4 }>
                  <img src={ others } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Others
                </Col>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

}

export default Jumbo_list_group_item