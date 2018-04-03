import React, { Component } from 'react'
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'
import {
  withRouter
} from 'react-router-dom'

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

  constructor(props) {
    super(props)

    this.gadgetCat = this.gadgetCat.bind(this)
    this.clothesCat = this.clothesCat.bind(this)
    this.houseCat = this.houseCat.bind(this)
    this.carsCat = this.carsCat.bind(this)
    this.motorsCat = this.motorsCat.bind(this)
    this.hobbieCat = this.hobbieCat.bind(this)
    this.booksCat = this.booksCat.bind(this)
    this.childCat = this.childCat.bind(this)
    this.othersCat = this.othersCat.bind(this)
  }

  gadgetCat() {
    this.props.history.push('/search-result=gadget')
  }

  clothesCat() {
    this.props.history.push('/search-result=clothes')
  }

  houseCat() {
    this.props.history.push('/search-result=house')
  }

  carsCat() {
    this.props.history.push('/search-result=cars')
  }

  motorsCat() {
    this.props.history.push('/search-result=motors')
  }

  hobbieCat() {
    this.props.history.push('/search-result=hobbie')
  }

  booksCat() {
    this.props.history.push('/search-result=books')
  }

  childCat() {
    this.props.history.push('/search-result=child')
  }

  othersCat() {
    this.props.history.push('/search-result=others')
  }

  render() {
    return (
      <div>
        <div className="hidden-xs">
          <ListGroup>
            <ListGroupItem onClick={ this.gadgetCat }>
              <img src={ hp } width="25" alt="" />
              Gadget
            </ListGroupItem>
            <ListGroupItem onClick={ this.clothesCat }>
              <img src={ fashion } width="25" alt="" />
              Clothes
            </ListGroupItem>
            <ListGroupItem onClick={ this.houseCat }>
              <img src={ home } width="25" alt="" />
              House
            </ListGroupItem>
            <ListGroupItem onClick={ this.carsCat }>
              <img src={ car } width="25" alt="" />
              Cars
            </ListGroupItem>
            <ListGroupItem onClick={ this.motorsCat }>
              <img src={ motor } width="25" alt="" />
              Motors
            </ListGroupItem>
            <ListGroupItem onClick={ this.hobbieCat }>
              <img src={ hobbie } width="25" alt="" />
              Hobbie
            </ListGroupItem>
            <ListGroupItem onClick={ this.booksCat }>
              <img src={ book } width="25" alt="" />
              Books
            </ListGroupItem>
            <ListGroupItem onClick={ this.childCat }>
              <img src={ baby } width="25" alt="" />
              Child
            </ListGroupItem>
            <ListGroupItem onClick={ this.othersCat }>
              <img src={ others } width="25" alt="" />
              Others
            </ListGroupItem>
          </ListGroup>
        </div>
        <div className="visible-xs hidden-md">
          <Row className="row-xs-list-group-item">
            <Col xs={ 6 }>
              <a onClick={ this.gadgetCat }>
                <Col xs={ 4 }>
                  <img src={ hp } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Gadget
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a onClick={ this.motorsCat }>
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
              <a onClick={ this.carsCat }>
                <Col xs={ 4 }>
                  <img src={ car } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Cars
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a onClick={ this.clothesCat }>
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
              <a onClick={ this.houseCat }>
                <Col xs={ 4 }>
                  <img src={ home } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  House
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a onClick={ this.hobbieCat }>
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
              <a onClick={ this.childCat }>
                <Col xs={ 4 }>
                  <img src={ baby } width="25" alt="" />
                </Col>
                <Col xs={ 8 }>
                  Child
                </Col>
              </a>
            </Col>
            <Col xs={ 6 }>
              <a onClick={ this.booksCat }>
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
              <a onClick={ this.othersCat }>
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

export default withRouter(Jumbo_list_group_item)