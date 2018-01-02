import React from 'react'
import { _NAME, arrTown } from '../config/init'
import './menu.scss'


export const Select = props => {

    let arr = props.type === 'blade' ? _NAME : arrTown

    return (
        <div>
            {props.type === 'blade' ? (
                <ul className='select'>
                    {arr.map((item, index) => <li
                        key={index} onClick={() => props.onSelect(item)}>{item}</li>)}
                </ul>
            ) : <TownSelect arr={arr} onSelect={props.onSelect} />}
        </div>
    )
}

class TownSelect extends React.Component {
    constructor(...props) {
        super(...props)
        const { arr, type } = this.props, name = '阿伐利提亚'
        this.state = {
            arr,
            name,
            types: arr[name]
        }
    }

    setTown(name) {
        this.setState({
            name,
            types: this.props.arr[name]
        })
    }

    setType(type) {
        this.props.onSelect(this.state.name, type)
    }

    render() {

        const { arr, types } = this.state

        let townNode = [], classNode = []

        for (let i in arr) townNode.push(<li key={i} onClick={this.setTown.bind(this, i)}>{i}</li>)

        for (let j in types) classNode.push(<li key={j} onClick={this.setType.bind(this, j)}>{j}</li>)

        return (
            <div>
                <ul className='select'>{townNode}</ul>
                <ul className='select' style={{ marginTop: '20px' }}>{classNode}</ul>
            </div >
        )
    }
}