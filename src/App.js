import React, { Component } from "react";
import { Hasil, ListCategories, NavbarComponent } from "./components";
import { Row, Col, Container } from "react-bootstrap";
//rrc

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
