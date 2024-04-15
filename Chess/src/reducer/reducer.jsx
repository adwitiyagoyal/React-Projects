import React from 'react'
import actionTypes from './actions/actionTypes'

export function reducer(state,action) {
    switch (action.type){
        case actionTypes.NEW_MOVE :
            {
                let {turn,position} = state

                position = [
                    ...position,
                    action.payload.newPosition
                ]

                turn = turn === 'w' ? 'b' : 'w'
                return {
                    ...state,
                    turn,
                    position 
                }
            }
        default:
            return state
    }
    return state
}

