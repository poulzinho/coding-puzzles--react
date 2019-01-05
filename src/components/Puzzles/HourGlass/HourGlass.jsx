import React, { Component } from 'react';
import PuzzleCard from '../../PuzzleCard/PuzzleCard';

export default class HourGlass extends Component {

    puzzleName = 'HourGlass';
    puzzleInput = `arr = [<br/>
        [1, 2, 1, 0, 0, 0],<br/>
        [0, 2, 0, 0, 0, 0],<br/>
        [1, 1, 1, 0, 0, 0],<br/>
        [0, 0, 2, 4, 4, 0],<br/>
        [0, 0, 0, 2, 0, 0],<br/>
        [0, 0, 1, 2, 4, 0]<br/>
    ];`;
    puzzleDescription = `Find the sum of the bigges HourGlass.
        A HourGlass has the form:<br/>
        1 1 1<br/>
        &nbsp; &nbsp; 1<br/>
        1 1 1</br>
    `;
    puzzleExpected = '19';

    /*eslint-disable */
    puzzleLint = '(arr = this.arr) => {\n' +
        '\n' +
        '    const getGlassHourSum = (i, j) => {\n' +
        '\n' +
        '        let sum = 0;\n' +
        '\n' +
        '        for (let k = i - 1; k <= i + 1; k++) {\n' +
        '            for (let l = j - 1; l <= j + 1; l++) {\n' +
        '                if (!((k === i && l === j - 1) || (k === i && l === j + 1))) {\n' +
        '                    sum += arr[k][l];\n' +
        '                }\n' +
        '            }\n' +
        '        }\n' +
        '\n' +
        '        return sum;\n' +
        '    };\n' +
        '\n' +
        '    let maxSum = -1000000; // for negatives\n' +
        '    let tmpSum = 0;\n' +
        '\n' +
        '    for (let i = 1; i < arr.length - 1; i++) {\n' +
        '        for (let j = 1; j < arr.length - 1; j++) {\n' +
        '\n' +
        '            tmpSum = getGlassHourSum(i, j);\n' +
        '\n' +
        '            if (tmpSum > maxSum) {\n' +
        '                maxSum = tmpSum\n' +
        '            }\n' +
        '        }\n' +
        '    }\n' +
        '\n' +
        '    return maxSum;\n' +
        '\n' +
        '}\n';
    /*eslint-enable */

    arr = [
        [1, 2, 1, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];


    puzzleCode = (arr = this.arr) => {

        const getGlassHourSum = (i, j) => {

            let sum = 0;

            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (!((k === i && l === j - 1) || (k === i && l === j + 1))) {
                        sum += arr[k][l];
                    }
                }
            }

            return sum;
        };

        let maxSum = -1000000; // for negatives
        let tmpSum = 0;

        for (let i = 1; i < arr.length - 1; i++) {
            for (let j = 1; j < arr.length - 1; j++) {

                tmpSum = getGlassHourSum(i, j);

                if (tmpSum > maxSum) {
                    maxSum = tmpSum
                }
            }
        }

        return maxSum;

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
