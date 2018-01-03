import React from 'react'
import { Select } from './select'
import './menu.scss'

const config = [
    { id: 'all', name: '物品一览' },
    { id: 'blade', name: '查询喜好' },
    { id: 'town', name: '查询城镇' },
]

export const Menu = props =>
    <div className={`menu ${props.show && 'active'}`}>
        <ul className='nav'>
            {config.map((item, index) => <Li key={index} active={props.menu} item={item} changeMenu={props.changeMenu} />)}
        </ul>
        {props.menu !== 'all' && <Select {...props} onSelect={props.onSelect} />}
        <p style={{ marginTop: '20px' }}>*深色文字为佣兵团任务解锁</p>
    </div>

const Li = props => {

    const { name, id } = props.item

    return (
        <li className={props.active === id ? 'active' : ''} onClick={() => props.changeMenu(id)}>{name}</li>
    )
}

