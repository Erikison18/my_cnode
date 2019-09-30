import React,{Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link, withRouter} from 'react-router-dom'

class Nav extends Component{
    constructor(arg) {
        super(arg)
        let now = this.getNow(this.props.location)
        this.state = {
            now: now,
        }
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            let now = this.getNow(nextProps.location)
            this.setState({now})
            return false
        }
        return true
    }

    getNow(location) {
        let now = location.pathname.split('/')[1]
        return now
    }

    render() {
        let {mode, id} = this.props
        return (
            <Menu mode={mode} id={id} theme="light" selectedKeys={[this.state.now]}>
                <Menu.Item key='index'>
                    <Link to="/index/all"><Icon type="home"></Icon>首页</Link>
                </Menu.Item>
                <Menu.Item key='book'>
                    <Link to="/book"><Icon type="book"></Icon>教程</Link>
                </Menu.Item>
                <Menu.Item key='about'>
                    <Link to="/about"><Icon type="info-circle"></Icon>关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter((props)=> {
    return  <Nav 
                mode={props.mode}
                location={props.location}
                id={props.id}>
            </Nav>
})
