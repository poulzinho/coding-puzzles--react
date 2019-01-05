import React from 'react'
import { Card } from 'semantic-ui-react'
import { Highlighter } from '../Highlighter/Highlighter';

export default class PuzzleCard extends React.Component {
    render() {
        return (
            <Card fluid>
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
                    <Card.Header><h5>Actual Output:</h5></Card.Header>
                    <Highlighter>
                        {this.codeOutput(this.props.puzzleCode)}
                    </Highlighter>
                </Card.Content>
            </Card>
        )
    }

    getHTML(str) {
        return { __html: str }
    }

    codeOutput(code) {
        /*eslint-disable */
        const fn = eval(code);
        /*eslint-enable */
        return fn();
    }
}
