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
        }
        this.changeMenu = this.changeMenu.bind(this)
        this.onSelect = this.onSelect.bind(this)
    }

    changeMenu(menu) {
        this.setState({ menu })
    }

    onSelect(name) {
        console.log(name)
        this.setState({ name })
    }

    render() {

        const { menu, name } = this.state,
            Content = (() => {
                switch (menu) {
                    case 'all':
                        return <All />
                            ; break
                    case 'blade':
                        return <Blade name={name} />
                            ; break
                    case 'town':
                        return <Town />
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