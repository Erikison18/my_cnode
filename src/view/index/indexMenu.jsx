import React,{Component} from 'react'
import {Menu} from 'antd'
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
        let now = location.pathname.split('/')[2]
        return now
    }

    render() {
        let {mode, id} = this.props
        return (
            <Menu className="indexMenu" id={id} mode={mode} selectedKeys={[this.state.now]}>
                <Menu.Item key='all'>
                    <Link to="/index/all">全部</Link>
                </Menu.Item>
                <Menu.Item key='good'>
                    <Link to="/index/good">精华</Link>
                </Menu.Item>
                <Menu.Item key='ask'>
                    <Link to="/index/ask">问题</Link>
                </Menu.Item>
                <Menu.Item key='share'>
                    <Link to="/index/share">分享</Link>
                </Menu.Item>
                <Menu.Item key='job'>
                    <Link to="/index/job">招聘</Link>
                </Menu.Item>
                <Menu.Item key='dev'>
                    <Link to="/index/dev">测试</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter((props)=> {
    return <Nav
            mode={props.mode}
            location={props.location}
            id={props.id}
        ></Nav>
})
