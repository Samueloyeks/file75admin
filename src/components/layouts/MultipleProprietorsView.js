import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import IndividualPartnerView from './IndividualPartnerView';
import CorporatePartnerView from './CorporatePartnerView';
import MinorPartnerView from './MinorPartnerView';


const MultipleProprietorsView = ({ request }) => (
    <div>
        <div className='sub-header file-text-bold'>
            PARTICULARS OF PROPRIETORS
        </div>
        {
            request.individualPartners.map((individualPartner, index) =>
                <IndividualPartnerView
                    index={index}
                    individualPartner={individualPartner}
                />
            )
        }
        {
            request.corporatePartners.map((corporatePartner, index) =>
                <CorporatePartnerView
                    index={index}
                    corporatePartner={corporatePartner}
                />
            )
        }
                {
            request.minorPartners.map((minorPartner, index) =>
                <MinorPartnerView
                    index={index}
                    minorPartner={minorPartner}
                />
            )
        }
    </div>
)

export default MultipleProprietorsView;