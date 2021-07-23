// rcc
import React, { Component } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class ListCategories extends Component {
  //rcons
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        // console.log("Response : ", res);
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log("Error ya: ", error);
      });
  }

  render() {
      console.log("Catgeories ", this.state.categories);
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
      </Col>
    );
  }
}
