// useReducer

// import React, { useReducer } from 'react';
//
// const initialState = { count: 1 };
//
// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'decrement':
//             return { count: Math.max(1, state.count - 1) }; // минимум 1
//         default:
//             return state;
//     }
// }
//
// export function ButtonCountProduct() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//
//     return (
//         <button
//             className="w-50 h-15 border border-mid-gray flex items-center justify-between p-4 rounded-4xl shrink-0"
//         >
//             <img
//                 src="svg/akar-icons_minus.svg"
//                 alt="Уменьшить"
//                 className="w-9 cursor-pointer"
//                 onClick={() => dispatch({ type: 'decrement' })}
//             />
//             <p cla ssName="text-2xl font-semibold">{state.count}</p>
//             <img
//                 src="svg/cuida_plus-outline.svg"
//                 alt="Увеличить"
//                 className="w-9 h-9 cursor-pointer"
//                 onClick={() => dispatch({ type: 'increment' })}
//             />
//         </button>
//     );
// }

// Class Components

import React, { Component } from 'react';

export class ButtonCountProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        this.setState(prevState => ({ count: Math.max(1, prevState.count - 1) }));
    };

    render() {
        return (
            <button
                className="w-50 h-15 border border-mid-gray flex items-center justify-between p-4 rounded-4xl shrink-0"
            >
                <img
                    src="svg/akar-icons_minus.svg"
                    alt="Уменьшить"
                    className="w-9 cursor-pointer"
                    onClick={this.decrement}
                />
                <p className="text-2xl font-semibold">{this.state.count}</p>
                <img
                    src="svg/cuida_plus-outline.svg"
                    alt="Увеличить"
                    className="w-9 h-9 cursor-pointer"
                    onClick={this.increment}
                />
            </button>
        );
    }
}
