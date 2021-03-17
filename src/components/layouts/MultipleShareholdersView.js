import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import IndividualShareholderView from './IndividualShareholderView';
import CorporatePartnerView from './CorporatePartnerView';
import MinorPartnerView from './MinorPartnerView';
import CorporateShareholderView from './CorporateShareholderView';
import MinorShareholderView from './MinorShareholderView';


const MultipleShareholdersView = ({ request }) => (
    <div>
        <div className='sub-header file-text-bold'>
            SHAREHOLDERS
        </div>
        {
            request.individualShareholders.map((individualShareholder, index) =>
                <IndividualShareholderView
                    key={index}
                    title={'Individual Shareholder'}
                    index={index}
                    individualShareholder={individualShareholder}
                />
            )
        }
        {
            request.corporateShareholders.map((corporateShareholder, index) =>
                <CorporateShareholderView
                    key={index}
                    title={'Corporate Shareholder'}
                    index={index}
                    corporateShareholder={corporateShareholder}
                />
            )
        }
        {
            request.minorShareholders.map((minorShareholder, index) =>
                <MinorShareholderView
                    key={index}
                    index={index}
                    minorShareholder={minorShareholder}
                />
            )
        }
    </div>
)

export default MultipleShareholdersView;