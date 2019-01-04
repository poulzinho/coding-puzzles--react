import React, { Component } from 'react';
import PuzzleCard from '../PuzzleCard/PuzzleCard';

export default class NumbersTriangle extends Component {

    puzzleName = 'Numbers Triangle';
    puzzleDescription = 'A numbers Triangle where every level starts with 1.';
    puzzleInput = 'levels = 3';
    puzzleExpected = '1<br/>1 2 <br/>1 2 3';

    /*eslint-disable */
    puzzleLint =
        '(levels = 3) => {\n' +
        '\n' +
        '    const row = x => `${Array.from(Array(x))\n' +
        '        .reduce((acum, current, idx) => acum += `${idx + 1}`, \'\')}\\n`;\n' +
        '\n' +
        '    return Array.from(Array(levels), (_, x) => `${row(x + 1)}`);\n' +
        '}\n';
    /*eslint-enable */

    puzzleCode = (levels = 3) => {

        const row = x => `${Array.from(Array(x))
            .reduce((acum, current, idx) => acum += `${idx + 1}`, '')}\n`;

        return Array.from(Array(levels), (_, x) => `${row(x + 1)}`);
    };

    render() {
        return (
            <PuzzleCard puzzleName={this.puzzleName}
                        puzzleDescription={this.puzzleDescription}
                        puzzleInput={this.puzzleInput}
                        puzzleExpected={this.puzzleExpected}
                        puzzleLint={this.puzzleLint}
                        puzzleCode={this.puzzleCode}
            />
        );
    }
}
