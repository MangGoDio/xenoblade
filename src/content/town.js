import React from 'react'
import { initTown } from '../config/init'

export const Town = props => {

    const obj = initTown(),
        name = props.name || '阿伐利提亚',
        type = props.type || '主食',
        info = obj[name][type]

    return (
        <div className='town'>
            <h3>{`${name}——${type}`}</h3>
            <h4>产权：{info.buff}</h4>
            <table>
                <tbody>
                    {info.goods.map((item, index) => <tr key={index} className={item.need ? 'need' : ''}>
                        <td>{item.name}</td>
                        <td>{item.blade}</td>
                        <td>{item.desc}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
