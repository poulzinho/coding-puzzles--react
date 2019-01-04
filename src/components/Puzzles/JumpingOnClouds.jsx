import React, { Component } from 'react';
import PuzzleCard from '../PuzzleCard/PuzzleCard';

export default class JumpingOnClouds extends Component {

    puzzleName = 'Jumping on the Clouds';
    puzzleDescription = 'Jump over the 1s and avoid consecutive 0s (if possible).';
    puzzleInput = '0 0 1 0 0 0 1 0 1';
    puzzleExpected = '5';

    /*eslint-disable */
    puzzleLint =
        '(clouds = [0, 0, 1, 0, 0, 0, 1, 0, 1]) => {\n' +
        '\n' +
        '    let steps = 0;\n' +
        '    for (let i = 0; i < clouds.length - 1; i++) {\n' +
        '        if (clouds[i + 2] == 0) i++;\n' +
        '        steps++;\n' +
        '    }\n' +
        '\n' +
        '    return steps;\n' +
        '};';
    /*eslint-enable */

    puzzleCode = (clouds = [0, 0, 1, 0, 0, 0, 1, 0, 1]) => {

        let steps = 0;
        for (let i = 0; i < clouds.length - 1; i++) {
            if (clouds[i + 2] == 0) i++;
            steps++;
        }

        return steps;
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
