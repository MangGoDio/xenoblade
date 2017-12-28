import React from 'react'
import { _BLADE } from '../config/blade'
import { initBlade } from '../config/init'


export const Blade = props => {

    const obj = initBlade(_BLADE),
        name = props.name || '莱克斯',
        info = obj[name]

    return (
        <div className='text'>
            <h1>{name}</h1>
            <p>喜欢的类别：{info.class.join('、')}</p>
            <table>
                <tbody>
                    {info.goods.map((item, index) => <tr key={index} className={item.need ? 'need' : ''}>
                        <td>{item.name}</td>
                        <td>{item.town}</td>
                        <td>{item.class}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
