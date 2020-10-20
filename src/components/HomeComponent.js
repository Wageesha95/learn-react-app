import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle><b>{item.name}</b></CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <dev className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </dev>
    )
}

export default Home;