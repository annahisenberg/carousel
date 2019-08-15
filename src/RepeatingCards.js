import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import graph from './images/graph.png'
import './RepeatingCards.css';

export default class RepeatingCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { id: 1, title: 'Hello World', content: '@ @ @ @ @ @', src: graph },
                { id: 2, title: 'blah', content: '@ @ @ @ @ @', src: graph },
                { id: 3, title: 'Helloooo', content: '& & & & &', src: graph },
                { id: 4, title: 'Verizon', content: '@ @ @ @ @ @', src: graph },
                { id: 5, title: 'second page', content: '& & & & &', src: graph },
                { id: 6, title: 'Card', content: '@ @ @ @ @ @', src: graph },
                { id: 7, title: 'blahblah', content: '& & & & &', src: graph },
                { id: 8, title: 'Installation', content: '@ @ @ @ @ @', src: graph },
                { id: 9, title: 'third page', content: '@ @ @ @ @ @', src: graph },
                { id: 10, title: 'blah', content: '@ @ @ @ @ @', src: graph },
                { id: 11, title: 'Helloooo', content: '& & & & &', src: graph },
                { id: 12, title: 'Verizon', content: '@ @ @ @ @ @', src: graph },
            ],
            start: 0,
            end: 4,
            currentRow: null
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    componentWillMount() {
        let cardsCopy = [...this.state.cards];

        if (cardsCopy.length > 4) {
            this.setState({
                currentRow: cardsCopy.splice(this.state.start, this.state.end),
                start: this.state.start + 4
            });
        }
    }

    increase() {
        let cardsCopy = [...this.state.cards];

        this.setState({
            currentRow: cardsCopy.splice(this.state.start, this.state.end),
            start: this.state.start + 4
        })
    }

    addFour() {
        this.setState({
            start: this.state.start + 4
        })
    }

    minusFour() {
        this.setState({
            start: this.state.start - 4,
            end: this.state.end - 4
        })
    }

    decrease() {
        let cardsCopy = [...this.state.cards];

        this.setState({
            currentRow: cardsCopy.splice(this.state.start, this.state.end)
        })
    }

    render() {
        const oneCard = this.state.currentRow.map((card) =>
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
                    <button onClick={this.decrease}>left arrow</button>
                    <button onClick={this.increase}>right arrow</button>
                </div>
                <div className="card-container">
                    {oneCard}
                </div>
            </section>
        )
    }
}