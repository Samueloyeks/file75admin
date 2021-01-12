import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'


// components 
import RequestTableHeader from '../atoms/RequestTableHeader';
import DeployedCard from '../atoms/DeployedCard';



const DeployTable = ({
    name,
    placeholder,
    value,
    type,
    requests,
    services,
    filterRequests,
    sortedby,
    loading,
    activate,
    activateIndex,
    ...rest
}) => (
        <div>
            <RequestTableHeader filterRequests={filterRequests} services={services} />
            {sortedby ?
                <div style={{ backgroundColor: 'red', margin: 0 }}>
                    <p style={{ margin: 0, padding: 5 }}>Filtered by: {sortedby}</p>
                </div> : null}
            <div>
                {
                    loading ?
                        <div style={{ textAlign: 'center', padding: 5 }}>
                            <Spinner />
                        </div>
                        :
                        requests.map((request, index) =>
                            <DeployedCard
                                key={index}
                                index={index}
                                activate={activate}
                                active={activateIndex === index}
                                key={index}
                                request={request} />
                        )
                }
            </div>
        </div>
    )

export default DeployTable;