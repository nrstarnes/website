import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from '../../containers/certifications/Certifications';
//import Enrichment from '../..containers/enrichment/Enrichment';
import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites';
import {competitiveSites}  from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    return (
      <div className="education-main">
        <Header />
        <div className="basic-education">
          <Fade bottom duration={1000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img src={require("../../assests/images/grad.svg")} alt="" />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text">Professional and Academic Qualifications</h1>
                <h3 className="heading-sub-text">
                  
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
              
            </div>
          </Fade>
          <Educations/>
          <Certifications/>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default Education;
