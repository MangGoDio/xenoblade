import React from 'react'
import { Select } from './select'
import './menu.scss'

const config = [
    { id: 'blade', name: '查询喜好' },
    { id: 'town', name: '查询城镇' },
    { id: 'all', name: '物品一览' },
]

export const Menu = props =>
    <div className={`menu ${props.show && 'active'}`}>
        <ul className='nav'>
            {config.map((item, index) => <Li key={index} item={item} changeMenu={props.changeMenu} />)}
        </ul>
        {props.menu !== 'all' && <Select type={props.menu} onSelect={props.onSelect} />}
        <p style={{ marginTop: '20px' }}>*深色文字为佣兵团任务解锁</p>
    </div>

const Li = props => {

    const { name, id } = props.item

    return (
        <li onClick={() => props.changeMenu(id)}><div>{name}</div></li>
    )
}

