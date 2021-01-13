import generateUniqueId from 'generate-unique-id';
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Moment from "react-moment";
import Search from "../Search";
import axios from "axios";
import "./style.css";


const Employees = () => {
    const [ employees, setEmployees ] = useState([]);
    const [ searchState, setSearch ] = useState('');
    const [ tableState, setTable ] = useState([]);

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?results=142&nat=us')
            .then((res) => {
                setEmployees(res.data.results);
            });

    }, []);

    let filteredEmployees = employees.filter((employee) => {
        return (
          employee.name.first.toLowerCase().indexOf(searchState) !== -1 ||
          employee.name.last.toLowerCase().indexOf(searchState) !== -1 ||
          employee.email.toLowerCase().indexOf(searchState) !== -1 ||
          employee.phone.indexOf(searchState) !== -1
        );
      });

    function onChange(event) {
        setSearch(event.target.value );
    };

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
        
                setTable(...employees);
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
        
                setTable(...employees);
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
        
                setTable(...employees);
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
        
                setTable(...employees);
                break; 
            default:
                console.log(`${id}`);
                break;

        }
    }

    return (
        <div className="results">

            <Search onChange= { onChange }/>
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
                { filteredEmployees.map((employee, index) => {
                    const id = generateUniqueId({
                        length: 5,
                        useLetters: false
                    });

                    return (
                    <tr key={ index } id={ id }>
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
                }) }
                </tbody>
                
            </Table>
        </div>
    )
};

export default Employees;