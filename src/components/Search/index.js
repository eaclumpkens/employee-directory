import React from "react";
import { Form } from "react-bootstrap";

function Search() {
    return(
        <div class="search-box">
            <Form>
                <Form.Group className="col-md-5" controlId="formBasicEmail">
                    <Form.Control type="search" placeholder="search" />
                </Form.Group>
            </Form>
        </div>
    )
};

export default Search;