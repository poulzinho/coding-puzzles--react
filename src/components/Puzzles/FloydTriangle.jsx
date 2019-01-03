import React, { Component } from 'react';
import PuzzleCard from '../PuzzleCard/PuzzleCard';

export default class FloydTriangle extends Component {

    puzzleName = 'Floyd Triangle';
    puzzleDescription = 'A Floyd Triangle should look like:';
    puzzleExpected = '1<br/>2 3 <br/>4 5 6';

    puzzleLint =
        'const levels = 3;\n' +
        'let counter = 1;\n' +
        '\n' +
        'const row = x =>\n' +
        '    Array.from(Array(x)).reduce(\n' +
        '        (acum, current, idx) => acum += `${counter++}`, \'\') + \'\\n\';\n' +
        '\n' +
        'return Array.from(Array(levels), (_, x) => `${row(x + 1)}`);\n';

    puzzleCode = () => {
        const levels = 3;
        let counter = 1;

        const row = x =>
            Array.from(Array(x)).reduce(
                (acum, current, idx) => acum += `${counter++}`, '') + '\n';

        return Array.from(Array(levels), (_, x) => `${row(x + 1)}`);
    };

    render() {
        return (
            <div>
                <PuzzleCard puzzleName={this.puzzleName}
                            puzzleDescription={this.puzzleDescription}
                            puzzleExpected={this.puzzleExpected}
                            puzzleLint={this.puzzleLint}
                            puzzleCode={this.puzzleCode}
                />
            </div>
        );
    }
}
