import React, { Component } from "react";
import { Hasil, ListCategories, NavbarComponent } from "./components";
import { Row, Col, Container } from "react-bootstrap";
import { API_URL } from "./utils/constants";
import axios from "axios";

//rrc
export default class App extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error ya: ",error);
      });
  }

  render() {
    // console.log(this.state.menus);
    const {menus} = this.state
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
                <Row>
                  {menus && menus.map((menu) => (
                    <h2>{menu.nama}</h2>
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
