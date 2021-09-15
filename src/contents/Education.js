import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
           
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="MCA Software Engineering" where="VTU University" from="July 2018" to="Present"/>
            <Widecard title="SSLC | HSC | BCA" where="Karnataka Higher Secondary School" from="2010" to="2015"/>
            </div>
            )
        }
    }
    
export default Education
    