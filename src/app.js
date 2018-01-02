import React from 'react'
import ReactDOM from 'react-dom'
import { Menu } from './menu/menu'
import { All } from './content/all'
import { Blade } from './content/blade'
import { Town } from './content/town'
import './app.scss'

class App extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            menu: 'blade',
            name: '',
            type: '',
        }
        this.changeMenu = this.changeMenu.bind(this)
        this.onSelect = this.onSelect.bind(this)
    }

    changeMenu(menu) {
        this.setState({ menu, name: '' })
    }

    onSelect(name, type) {
        this.setState({ name, type })
    }

    render() {

        const { menu, name, type } = this.state,
            Content = (() => {
                switch (menu) {
                    case 'all':
                        return <All />
                            ; break
                    case 'blade':
                        return <Blade name={name} />
                            ; break
                    case 'town':
                        return <Town name={name} type={type} />
                            ; break
                }
            })

        return (
            <div className='flex'>
                <Menu menu={menu} changeMenu={this.changeMenu} onSelect={this.onSelect} />
                <Content menu={menu} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))