import React, { Component } from 'react';
import Row from './Row';
import configs from '../fixtures/configurations';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        let m = this.props.m;
        let n = this.props.n;
        let matrix = Array.from(Array(m), () => new Array(n));
        
        let config = configs[Math.floor(Math.random() * configs.length)]

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = false;
            }
        }

        let offset_x = config[0][0];
        let offset_y = config[0][1];

        for (let i = 1; i < config.length; i++) {
            let x = offset_x + config[i][0];
            let y = offset_y + config[i][1];
            matrix[x][y] = true;
        }

        let state = {
            matrix: matrix
        };

        return state;
    }

    setNextState = () => {
        let m = this.props.m;
        let n = this.props.n;
        let future = Array.from(Array(m), () => new Array(n));
        let matrix = this.state.matrix;
        for (let i = 1; i < m-1; i++) {
            for (let j = 1; j < n-1; j++) {
                let aliveNeighbours = 0;

                for (let l = -1; l <= 1; l++) {
                    for (let k = -1; k <= 1; k++) {
                        if ( matrix[i + l][j + k] ) {
                            aliveNeighbours += 1;
                        }
                    }
                }

                if (matrix[i][j]) {
                    aliveNeighbours -= 1;
                }

                if (matrix[i][j] && aliveNeighbours < 2) {
                    future[i][j] = false;
                } else if (matrix[i][j] && aliveNeighbours > 3) {
                    future[i][j] = false;
                } else if (!matrix[i][j] && aliveNeighbours === 3) {
                    future[i][j] = true;
                } else {
                    future[i][j] = matrix[i][j];
                }
            }
        }

        this.setState({matrix: future});
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.setNextState(),
          300
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let rows = []

        for (let i = 0; i < this.props.m; i++) {
            rows.push(<Row rows={this.state.matrix[i]} />)
        }

        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default Game;
