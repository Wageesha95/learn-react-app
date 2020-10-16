import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    renderComments(comments = []) {
        const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        const region = 'en-US';
        return (
            <div>
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


    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5  m-1">
                        <Card>
                            <CardImg width='100%' object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5  m-1">

                        <div> {this.renderComments(dish.comments)} </div>
                    </div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    render() {

        return (
            <div className='container'>
                <div className="row">
                    {this.renderDish(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;