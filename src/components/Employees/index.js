import { useState, useEffect } from "react";
import Moment from "react-moment";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./style.css";


const Employees = () => {
    const [ employees, setEmployees ] = useState([]);
    const [ sortState, setSortState ] = useState();

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?results=142&nat=us')
            .then((res) => {
                setEmployees(res.data.results);
                console.log(res.data.results);
            });

    }, []);

    function sortTable(event) {
        const id = event.target.id;
        
        switch(id) {
            case "name": 
                employees.sort((a, b) => {
                    if (a.name.last < b.name.last) {
                        return -1;
                    }
                    else if (b.name.last > a.name.last) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
        
                setSortState(...employees);
                break;
            case "phone": 
                employees.sort((a, b) => {
                    if (a.phone < b.phone) {
                        return -1;
                    }
                    else if (b.phone > a.phone) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
        
                setSortState(...employees);
                break;
            case "email": 
                employees.sort((a, b) => {
                    if (a.email < b.email) {
                        return -1;
                    }
                    else if (b.email > a.email) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
        
                setSortState(...employees);
                break;    
            case "dob": 
                employees.sort((a, b) => {
                    if (a.dob.date < b.dob.date) {
                        return -1;
                    }
                    else if (b.dob.date > a.dob.date) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
        
                setSortState(...employees);
                break; 
            default:
                console.log(`${id}`);
                break;

        }

        // employees.sort((a, b) => {
        //     if (a.name.first < b.name.first) {
        //       return -1;
        //     }
        //     else if (b.name.first > a.name.first) {
        //       return -1;
        //     }
        //     else {
        //       return 0;
        //     }
        //   });

        //   setSortState(...employees);
    }

    return (
        <div className="results">
            <Table striped hover variant="dark">
                {/* TABLE HEADING */}
                <thead>
                <tr>    
                    <th></th>
                    <th id="name" onClick={ sortTable }>Name</th>
                    <th id="phone" onClick={ sortTable }>Phone</th>
                    <th id="email" onClick={ sortTable }>Email</th>
                    <th id="dob" onClick={ sortTable }>DOB</th>
                </tr>
                </thead>

                {/* TABLE BODY */}
                <tbody>
                {employees.map((employee) => {
                    return (
                    <tr>
                        <td id="image">
                            <img
                                src={employee.picture.medium}
                                alt={`Employee ${employee.name.first} ${employee.name.last}`}
                            ></img>
                        </td>
                        <td id="name">
                            {employee.name.first} {employee.name.last}
                        </td>
                        <td id="phone">{employee.phone}</td>
                        <td id="email">
                            <a href={`mailto:${employee.email}`}>{employee.email}</a>
                        </td>
                        <td id="dob">
                            <Moment format="MMM DD, YYYY">{employee.dob.date}</Moment>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
                
            </Table>
        </div>
    )
};

export default Employees;