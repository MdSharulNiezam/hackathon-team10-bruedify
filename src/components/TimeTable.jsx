import React from "react";
import { Container, Table } from "react-bootstrap";

function Timetable() {
  return (
    <Container>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Time</th>
            <th className="d-none d-md-table-cell">9.00 AM</th>
            <th className="d-none d-md-table-cell">10.00 AM</th>
            <th className="d-none d-md-table-cell">11.00 AM</th>
            <th className="d-none d-md-table-cell">12.00 AM</th>
            <th className="d-none d-md-table-cell">2.00 PM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td className="d-none d-md-table-cell">HTML & CSS</td>
            <td className="d-table-cell d-md-none">H</td>
            <td className="d-none d-md-table-cell">HTML & CSS</td>
            <td className="d-table-cell d-md-none">H</td>
            <td className="d-none d-md-table-cell">HTML & CSS</td>
            <td className="d-table-cell d-md-none">H</td>
            <td className="d-none d-md-table-cell">HTML & CSS</td>
            <td className="d-none d-md-table-cell">HTML & CSS</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td className="d-none d-md-table-cell">mySql</td>
            <td className="d-table-cell d-md-none">M</td>
            <td className="d-none d-md-table-cell">mySql</td>            
            <td className="d-none d-md-table-cell">mySql</td>
            <td className="d-none d-md-table-cell">mySql</td>
            <td className="d-none d-md-table-cell">mySql</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td className="d-none d-md-table-cell">Node.js</td>
            <td className="d-table-cell d-md-none">S</td>
            <td className="d-none d-md-table-cell">Workshop</td>
            <td className="d-table-cell d-md-none">M</td>
            <td className="d-none d-md-table-cell">Worshop</td>
            <td className="d-table-cell d-md-none">H</td>
            <td className="d-none d-md-table-cell">Node.js</td>
            <td className="d-none d-md-table-cell">Node.js</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td className="d-none d-lg-table-cell">React</td>
            <td className="d-table-cell d-md-none"></td>
            <td className="d-none d-md-table-cell">React</td>
            <td className="d-table-cell d-md-none">M</td>
            <td className="d-none d-md-table-cell">React</td>
            <td className="d-table-cell d-md-none">E</td>
            <td className="d-none d-md-table-cell">Workshop</td>
            <td className="d-none d-md-table-cell">Workshop</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td className="d-none d-md-table-cell">Workshop</td>
            <td className="d-table-cell d-md-none"></td>
            <td className="d-none d-md-table-cell">React Native</td>
            <td className="d-table-cell d-md-none">M</td>
            <td className="d-none d-md-table-cell">React Native</td>
            <td className="d-table-cell d-md-none">E</td>
            <td className="d-none d-md-table-cell">Intro Hackathon</td>
            <td className="d-none d-md-table-cell">Intro Hackathon</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Timetable;
