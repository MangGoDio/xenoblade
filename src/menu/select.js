import React from 'react'
import { _NAME, _TOWN } from '../config/init'
import './menu.scss'


export const Select = props => {

    let arr = props.type === 'blade' ? _NAME : _TOWN

    return (
        <ul className='select'>
            {arr.map((item, index) => <li
                key={index} onClick={() => props.onSelect(item)}>{item}</li>)}
        </ul>
    )
}