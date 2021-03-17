
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


const MultiplePSCView = ({ request }) => (
    <div>
        <div className='sub-header file-text-bold'>
            PSCs
        </div>
        {
            request.PSCs.map((PSC, index) => {
                return (
                    PSC.PSCType === 'naturalPerson' ?
                        <IndividualShareholderView
                            key={index}
                            title={'Natural Person PSC'}
                            index={index}
                            individualShareholder={PSC}
                        />
                        :

                        PSC.PSCType === 'legalEntituy' ?
                            <CorporateShareholderView
                                key={index}
                                title={'Legal Entity PSC'}
                                index={index}
                                individualShareholder={PSC}
                            /> :
                            null

                )
            })
        }
    </div>
)

export default MultiplePSCView;