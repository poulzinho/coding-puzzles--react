import React, { Component } from 'react';
import PuzzleCard from '../../PuzzleCard/PuzzleCard';

export default class RepeatedString extends Component {

    puzzleName = 'Repeated String';
    puzzleDescription = `Repeat the characters inside 's', 'n' times and return the ocurrences of the 'a' character.`;
    puzzleInput = `s = 'aba', n = 10`;
    puzzleExpected = '7';

    /*eslint-disable */
    puzzleLint =
        '(s = \'aba\', n = 10) => {\n' +
        '\n' +
        '    const counterA = (str) => str.split(\'\').filter(c => c === \'a\').length;\n' +
        '\n' +
        '    const div = Math.floor(n / s.length);\n' +
        '    const residue = n - (s.length * div);\n' +
        '\n' +
        '    return div * counterA(s) + counterA(s.substr(0, residue));\n' +
        '\n' +
        '};\n';
    /*eslint-enable */

    puzzleCode = (s = 'aba', n = 10) => {

        const counterA = (str) => str.split('').filter(c => c === 'a').length;

        const div = Math.floor(n / s.length);
        const residue = n - (s.length * div);

        return div * counterA(s) + counterA(s.substr(0, residue));

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
