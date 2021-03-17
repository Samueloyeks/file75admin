import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'
import InfiniteScroll from "react-infinite-scroll-component";



// components 
import RequestTableHeader from '../atoms/RequestTableHeader';
import UnattendedCard from '../atoms/UnattendedCard';
import { requestService } from '../../services/requestService';



const RequestTable = ({
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
    handleLoadMore,
    ...rest
}) => (
        <div>
            <RequestTableHeader filterRequests={filterRequests} services={services} />
            {sortedby ?
                <div style={{  margin: 0 ,padding:5}}>
                    <p style={{ margin: 0}}>Filtered by: {sortedby}</p>
                </div> : null}
            <div>
                {
                    loading ?
                        <div style={{ textAlign: 'center', padding: 5 }}>
                            <Spinner />
                        </div>
                        :
                        // requests.map((request, index) =>
                        //     <UnattendedCard 
                        //         key={index}
                        //         index={index}
                        //         activate={activate}
                        //         active={activateIndex === index}
                        //         key={index}
                        //         request={request} />
                        // )
                        <InfiniteScroll
                            dataLength={requests.length}
                            next={handleLoadMore}
                            hasMore={true}
                            loader={<div style={{ textAlign: 'center', padding: 5 }}>
                                <Spinner />
                            </div>}
                        >
                            {requests.map((request, index) =>
                                <UnattendedCard
                                    key={index}
                                    index={index}
                                    activate={activate}
                                    active={activateIndex === index}
                                    key={index}
                                    request={request} />
                            )}
                        </InfiniteScroll>
                }
            </div>
        </div>
    )

export default RequestTable;