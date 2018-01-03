import React from 'react'
import { initAll } from '../config/init'

export const All = props => {

    const arr = initAll()

    return (
        <table>
            <thead>
                <tr>
                    <th>地区</th>
                    <th>类别</th>
                    <th>名称</th>
                    <th>异刃</th>
                </tr>
            </thead>
            <tbody>
                {arr.length > 0 && arr.map((item, index) => <Tr key={index} item={item} />)}
            </tbody>
        </table>
    )
}

const Tr = props =>
    <tr className={props.item.need ? 'need' : ''}>
        <td>{props.item.town}</td>
        <td>{props.item.class}</td>
        <td>{props.item.name}</td>
        <td>{props.item.blade}</td>
    </tr>



