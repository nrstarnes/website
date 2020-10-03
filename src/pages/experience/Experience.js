import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work Experience and Volunteerism",
	description:
		"I breathe life into business systems, specializing in finance, accounting, and quantitative systems engineering. My passion is finance and banking, however, my medium within this field is the technical side of the financial world. I have experience working for banking and financial firms, both domestically in the U.S. and internationally. I have worked as a developer, analyst, programmer, proejct manager and more. I take pride in project management and innovative concepts that can create superior UX execution with intuitive back-end design.",
	header_image_path: "resume_updated.svg",
	sections: [
		{
			title: "Experience",
			experiences: [
				{
					title: "Application Pogrammer Analyst",
					company: "BBVA",
					company_url: "https://bbva.com",
					logo_path: "BBVA.png",
					duration: "August 2018 - PRESENT",
					location: "Birmingham, Alabama",
					description: "",
					color: "#0879bf"
				},
				{
					title: "Freelance Full Stack Developer",
					company: "Freelance",
					company_url: "https://nicholasrstarnes.com",
					logo_path: "userlogo.png",
					duration: "June 2018 - PRESENT",
					location: "Remote",
					description:
						"",
					color: "#9b1578"
				},
				{
					title: "Financial Analyst / Consulant",
					company: "Lifevest Financial",
					company_url: "https://nicholasrstarnes.com",
					logo_path: "blankcompany.jpeg",
					duration: "May 2017 - July 2018",
					location: "Birmingham, Alabama",
					description:
						"",
					color: "#0094ff"
				},
				{
					title: "Business Systems Analyst",
					company: "IronBook",
					company_url: "https://nicholasrstarnes.com",
					logo_path: "ironbook.png",
					duration: "January 2017 - January 2018",
					location: "Remote",
					description:
						"",
					color: "#7d7788"
				},
				{
					title: "TM - Site Manager",
					company: "Euro Auctions",
					company_url: "https://euroauctions.com/",
					logo_path: "euroauctions.jpg",
					duration: "June 2015 - May 2017",
					location: "Northern Ireland, United Kingdom",
					description:
						"",
					color: "#f50a15"
				},
				{
					title: "E-Commerce Administrator / Application Developer",
					company: "PSN Purchasing",
					company_url: "https://nicholasrstarnes.com",
					logo_path: "psnpurchasing.png",
					duration: "June 2013 - May 2015",
					location: "Remote",
					description:
						"",
					color: "#ddb116"
				},
				{
					title: "Accounting Associate",
					company: "PSN Purchasing",
					company_url: "https://nicholasrstarnes.com",
					logo_path: "psnpurchasing.png",
					duration: "August 2012 - June 2013",
					location: "Birmingham, Alabama",
					description:
						"",
					color: "#ddb116"
				}
			]
		},
		{
			title: "Volunteer",
			experiences: [
				
				{
					title: "Runner and Voluteer",
					company: "Ronald McDonald House",
					company_url: "https://www.rmhca.org/events/red-shoe-run/",
					logo_path: "RMHC.jpeg",
					duration: "September 2019, September 2020",
					location: "Birminghm, Alabama",
					description:
						"",
					color: "#e9c400"
				},
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "December 2019 - PRESENT",
					location: "Remote",
					description:
						"",
					color: "#181717"
				},
				{
					title: "Program Volunteer and Facility Maintenance Volunteer",
					company: "Campfire",
					company_url: "https://campfire.org",
					logo_path: "cf.jpg",
					duration: "November 2019",
					location: "Birmingham, Alabama",
					description:
						"",
					color: "#3117e8"
				},
				{
					title: "University of Alabama STEM Camp",
					company: "University of Alabama",
					company_url: "https://ua.edu",
					logo_path: "ua.png",
					duration: "June 2013 - August 2013",
					location: "Tuscaloosa, Alabama",
					description:
						"",
					color: "#ef110b"
				},
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
