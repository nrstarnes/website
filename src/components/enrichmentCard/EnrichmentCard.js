import React, { Component} from 'react';
import "./EnrichmentCard.css";
import {Fade} from 'react-reveal';

class EnrichmentCard extends Component {
    render(){
        const enrichment = this.props.enrichment;
        return (
			<Fade bottom duration={2000} distance="20px">
					<div className="enrichment-card">
						<div className="content">
							<a href={enrichment.enrichment_link} target="_blank" rel="noopener noreferrer">
								<div className="content-overlay"></div>
								<div className="enrichment-header" style={{ backgroundColor: enrichment.color_code}}>
									<img
										className="logo_img"
										src={require(`../../assests/images/${enrichment.logo_path}`)}
										alt={enrichment.alt_name}
									/>
								</div>
								<div className="content-details fadeIn-top">
									<h3 className="content-title">Enrichment</h3>
								</div>
							</a>
						</div>
						<div className="enrichment-body">
							<h2 className="enrichment-body-title">{enrichment.title}</h2>
							<h3 className="enrichment-body-subtitle">{enrichment.subtitle}</h3>
						</div>
					</div>
			</Fade>
				);
    }
}

export default EnrichmentCard;