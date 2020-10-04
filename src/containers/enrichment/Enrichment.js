import React, {Component} from 'react';
import './Enrichment.css';
import {Fade} from "react-reveal";
import {enrichment} from "../../portfolio";
import EnrichmentCard from '../../components/enrichmentCard/EnrichmentCard';

class Enrichment extends Component {
    render() {
        return (
					<div className="main" id="enrichment">
						<div className="enrichment-header-div">
							<Fade bottom duration={2000} distance="20px">
								<h1 className="enrichment-header">Enrichment</h1>
							</Fade>
						</div>
						<div className="enrichment-body-div">
							{enrichment.enrichment.map(cert => {
								return <EnrichmentCard enrichment={cert} />;
							})}
						</div>
					</div>
				);
    }
}


export default Enrichment;