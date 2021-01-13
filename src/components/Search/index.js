import React from "react";
import { Row, Col, Form } from "react-bootstrap";

function Search({ onChange }) {
    return(
        <div class="search-box">
            <Row>
                <Col/>
                <Col xs={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange= { onChange } type="search" placeholder="Search by Employee Name" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col/>
            </Row>
        </div>
    )
};

export default Search;