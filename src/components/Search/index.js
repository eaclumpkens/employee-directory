import React from "react";
import { Row, Col, Form } from "react-bootstrap";

function Search() {
    return(
        <div class="search-box">
            <Row>
                <Col/>
                <Col xs={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="search" placeholder="search" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col/>
            </Row>
        </div>
    )
};

export default Search;