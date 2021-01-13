import React from "react";
import { Form } from "react-bootstrap";
import Row from "../Row";
import Col from "../Col";

function Search() {
    return(
        <div class="search-box">
            <Row>
                <Col size="3">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="search" placeholder="search" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
};

export default Search;