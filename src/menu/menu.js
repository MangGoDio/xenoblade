import React from 'react'
import { Select } from './select'
import './menu.scss'

const config = [
    { id: 'blade', name: '查询喜好' },
    { id: 'town', name: '查询城镇' },
    { id: 'all', name: '物品一览' },
]

export const Menu = props =>
    <div className='menu'>
        <ul className='nav'>
            {config.map((item, index) => <Li key={index} item={item} changeMenu={props.changeMenu} />)}
        </ul>
        {props.menu !== 'all' && <Select type={props.menu} onSelect={props.onSelect} />}
    </div>

const Li = props => {

    const { name, id } = props.item

    return (
        <li onClick={() => props.changeMenu(id)}><div>{name}</div></li>
    )
}

