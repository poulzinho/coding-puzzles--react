import React, { Component } from 'react';
import PuzzleCard from '../../PuzzleCard/PuzzleCard';

export default class BribingLines extends Component {

    puzzleName = 'Bribing lines';
    puzzleDescription = 'An item can bribe and advance the line maximum 2 times. ' +
        'Having the final line positions. Determine how many bribes were done.';
    puzzleInput = `finalLine = [2, 1, 5, 3, 4];`;
    puzzleExpected = '3';

    /*eslint-disable */
    puzzleLint =
        '(q = this.finalLine) => {\n' +
        '    let bribes = 0;\n' +
        '\n' +
        '    for (let i = q.length - 1; i >= 0; i--) {\n' +
        '        if (q[i] - (i + 1) > 2) {\n' +
        '            return \'Too chaotic\';\n' +
        '        }\n' +
        '\n' +
        '        for (let j = Math.max(0, q[i] - 2); j < i; j++) {\n' +
        '            if (q[j] > q[i]) bribes++;\n' +
        '        }\n' +
        '    }\n' +
        '\n' +
        '    return bribes;\n' +
        '\n' +
        '};';
    /*eslint-enable */

    finalLine = [2, 1, 5, 3, 4];


    puzzleCode = (q = this.finalLine) => {
        let bribes = 0;

        for (let i = q.length - 1; i >= 0; i--) {
            if (q[i] - (i + 1) > 2) {
                return 'Too chaotic';
            }

            for (let j = Math.max(0, q[i] - 2); j < i; j++) {
                if (q[j] > q[i]) bribes++;
            }
        }

        return bribes;

    };

    render() {
        return (
            <div>
                <PuzzleCard puzzleName={this.puzzleName}
                            puzzleDescription={this.puzzleDescription}
                            puzzleInput={this.puzzleInput}
                            puzzleExpected={this.puzzleExpected}
                            puzzleLint={this.puzzleLint}
                            puzzleCode={this.puzzleCode}
                />
            </div>
        );
    }
}
