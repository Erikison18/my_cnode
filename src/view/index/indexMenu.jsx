import React,{Component} from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'

class Nav extends Component{
    render() {
        let {mode, id} = this.props
        return (
            <Menu className="indexMenu" id={id} mode={mode}>
                <Menu.Item>
                    <Link to="/index/all">全部</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/good">精华</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/ask/">问题</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/share">分享</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/ask">招聘</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/dev">测试</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Nav
