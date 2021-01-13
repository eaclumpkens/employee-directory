import { useState, useEffect } from "react";
import Moment from "react-moment";
import axios from "axios";
import Col from "../Col";
import Row from "../Row";

const Employees = () => {
    const [ employees, setEmployees ] = useState([]);

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?results=142&nat=us')
            .then((res) => {
                setEmployees(res.data.results);
                console.log(res.data.results);
            });

    }, []);

    return (
        <div className="Results">
            { employees.map((employee) => {
                return(
                    <Row>
                        <Col id="img" size="2">
                            <img src= {employee.picture.medium} alt={`Employee ${employee.name.first} ${employee.name.last}`}></img>
                        </Col>
                        <Col id="name" size="2">
                            <p>{employee.name.first} {employee.name.last}</p>
                        </Col>
                        <Col id="phone" size="3">
                            <p>{employee.phone}</p>
                        </Col>
                        <Col id="email" size="3">
                            <p>{employee.email}</p>
                        </Col>
                        <Col id="dob" size="2">
                            <p><Moment format="MMM DD, YYYY">{employee.dob.date}</Moment></p>
                        </Col>
                    </Row>
                )
            }) }
        </div>

    )
};

export default Employees;