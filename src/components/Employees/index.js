import { useState, useEffect } from "react";
import Moment from "react-moment";
import axios from "axios";

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
        <div className="results">
            {/* TABLE HEADING */}
            <thead>
            <tr>    
                <th className="text-center">Photo</th>
                <th className="text-center">Name</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Email</th>
                <th className="text-center">Birthday</th>
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
            
        </div>
        

    )
};

export default Employees;