import React from 'react'
import { initBlade } from '../config/init'


export const Blade = props => {

    const obj = initBlade(),
        name = props.name || '莱克斯',
        info = obj[name]

    return (
        <div className='text'>
            <h3>{name}</h3>
            <h4>喜欢的类别：{info.class.join('、')}</h4>
            <table>
                <tbody>
                    {info.goods.map((item, index) => <tr key={index} className={item.need ? 'need' : ''}>
                        <td>{item.name}</td>
                        <td>{item.town}</td>
                        <td>{item.class}</td>
                        <td>{item.desc}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
