import React from 'react';

function CCompanyItem({ companyName }) {
    return (
        <div className="c-company-item">
            <div>
                <img src={require('../../assets/images/icon-briefcase.svg').default} alt="" />
            </div>
            <h5>{companyName}</h5>
        </div>
    )
}

export default CCompanyItem;
