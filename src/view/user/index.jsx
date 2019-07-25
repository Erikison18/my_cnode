import React,{Component} from 'react'
import { Avatar, Row, Col } from 'antd'
import data from './data'

class User extends Component {
    render() {
        let { avatar_url, loginname, create_at, score } = data.data
        return <div className="wrap">
            <Avatar scr={avatar_url} className="userAvatar"></Avatar>
            <Row className="userInfo">
                <Col md={8}>用户名：<a>{loginname}</a></Col>
                <Col md={8}>积分：<a>{score}</a></Col>
                <Col md={8}>注册时间：<a>{create_at.split('T')[0]}</a></Col>
            </Row>
        </div>
    }
}

export default User