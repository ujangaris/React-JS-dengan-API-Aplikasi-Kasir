// rcc
import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "./../utils/utils";
import TotalBayar from "./TotalBayar";

export default class ListCategories extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} className="mt-3">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr />
        {keranjangs.length !== 0 && (
          <ListGroup variant="flush">
            {keranjangs.map((menuKeranjang) => (
              <ListGroup.Item>
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill bg="success">
                        {menuKeranjang.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{menuKeranjang.product.nama}</h5>
                    <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                  </Col>
                  <Col>
                    <strong className="float-right">
                      Rp. {numberWithCommas(menuKeranjang.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <TotalBayar keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}
