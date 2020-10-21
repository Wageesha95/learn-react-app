import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    const region = 'en-US';
    if (comments != null) {
        return (
            <div className="col-12 col-md-5  m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        let { date } = comment;
                        date = new Intl.DateTimeFormat(region, dateFormat).format(new Date(date));
                        return (
                            <li key={comment.id}>
                                <p> {comment.comment}</p>
                                <p>-- {comment.author}, {date}</p>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
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
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

export default DishDetail;