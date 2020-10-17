import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({ comments }) {
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    const region = 'en-US';
    return (
        <div className="col-12 col-md-5  m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {
                    comments.map((comment) => {
                        let { id, comment: text, author, date } = comment;
                        date = new Intl.DateTimeFormat(region, dateFormat).format(new Date(date));
                        return (
                            <li key={id}>
                                <div>{text}</div>
                                <br />
                                <div>-- {author} , {date}</div>
                                <br />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}


function RenderDish({ dish }) {

    return (
        <div className="col-12 col-md-5  m-1">
            <Card>
                <CardImg width='100%' object src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )

}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className='container'>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

export default DishDetail;