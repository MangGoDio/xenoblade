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
            show: false,
        }
        this.changeMenu = this.changeMenu.bind(this)
        this.onSelect = this.onSelect.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    changeMenu(menu) {
        if (menu === this.state.menu) return
        this.setState({ menu, name: '', type: '' })
        if (menu === 'all') this.setState({ show: false })
    }

    onSelect(name, type) {
        this.setState({ name, type: type || '', show: false })
    }

    toggleMenu() {
        this.setState({ show: !this.state.show })
    }

    render() {
        console.log(this.state)
        const { menu, name, type, show } = this.state,
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
                <Menu menu={menu} changeMenu={this.changeMenu} onSelect={this.onSelect} show={show} />
                <div className='menu-btn' onClick={this.toggleMenu}>菜单</div>
                <Content menu={menu} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))