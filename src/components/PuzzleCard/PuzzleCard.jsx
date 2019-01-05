import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Highlighter } from '../Highlighter/Highlighter';
import './PuzzleCard.css';

export default class PuzzleCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { renderCode: false };
    }

    render() {
        return (
            <Card className='puzzle-card' fluid>
                <Card.Content>
                    <Card.Header>{this.props.puzzleName}</Card.Header>
                    <Card.Description>
                        <div dangerouslySetInnerHTML={
                            this.getHTML(this.props.puzzleDescription)
                        }/>
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Card.Header><h5>Input:</h5></Card.Header>
                    <Card.Description>
                        <div dangerouslySetInnerHTML={
                            this.getHTML(this.props.puzzleInput)
                        }/>
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Card.Header><h5>Expected Output:</h5></Card.Header>
                    <Card.Description>
                        <div dangerouslySetInnerHTML={
                            this.getHTML(this.props.puzzleExpected)
                        }/>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Card.Header><h5>Code:</h5></Card.Header>
                    <Highlighter>
                        {this.props.puzzleLint}
                    </Highlighter>
                </Card.Content>
                <Card.Content>
                    <Card.Header>
                        <Button primary
                                onClick={() => this.renderCodeOutput()}>
                            Run Code
                        </Button>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Header><h5>Actual Output:</h5></Card.Header>
                    {this.state.renderCode ?
                        <Highlighter>{
                            this.codeOutput(this.props.puzzleCode)
                        }</Highlighter>
                        :
                        <p>Press Run Code to see the result</p>
                    }
                </Card.Content>
            </Card>
        )
    }

    getHTML(str) {
        return { __html: str }
    }

    renderCodeOutput() {
        this.setState({
            renderCode: true
        });
    }

    codeOutput(code) {
        /*eslint-disable */
        const fn = eval(code);
        /*eslint-enable */
        return fn();
    }
}
