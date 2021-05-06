import React from 'react';
import { Button } from 'react-bootstrap';
import {FaAngleRight} from 'react-icons/fa'

function CJobOfferItem({ title, time, companyName, location, desc, salary='' }) {
    return (
        <div className="c-job-offer-card ">
            <div className="head">
                <div className="info-container">
                    <h5>{title}</h5>
                    <div >
                        <span className="company">{companyName}</span>
                        <span className="location">{location}</span>
                    </div>
                </div>

                <span>{time}</span>

            </div>
            <p>
                {desc}
            </p>
            <p>
                {salary}
            </p>

            <Button className="action-btn">
                    <FaAngleRight />
            </Button>
        </div>
    )
}

export default CJobOfferItem
