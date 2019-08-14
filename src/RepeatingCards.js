import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import graph from './images/graph.png'
import './RepeatingCards.css';

export default class RepeatingCards extends Component {
    render() {
        const cards = [
            { id: 1, title: 'Hello World', content: '@ @ @ @ @ @', src: graph },
            { id: 2, title: 'blah', content: '@ @ @ @ @ @', src: graph },
            { id: 1, title: 'Helloooo', content: '& & & & &', src: graph },
            { id: 2, title: 'Verizon', content: '@ @ @ @ @ @', src: graph },
            { id: 1, title: 'React', content: '& & & & &', src: graph },
            { id: 2, title: 'Card', content: '@ @ @ @ @ @', src: graph },
            { id: 1, title: 'blahblah', content: '& & & & &', src: graph },
            { id: 2, title: 'Installation', content: '@ @ @ @ @ @', src: graph },
        ];


        const oneCard = cards.map((card) =>
            <Card className="text-center">
                <Card.Header>{card.title}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={card.src} />
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className="footer-div">
                        <button>pop up</button>
                        <p>{card.content}</p>
                    </div>
                </Card.Footer>
            </Card>
        );

        return (
            <section>
                <div className="button-grp">
                    <button>left arrow</button>
                    <button>right arrow</button>
                </div>
                <div className="card-container">
                    {oneCard}
                </div>
            </section>
        )
    }
}
