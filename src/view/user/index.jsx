import React,{Component} from 'react'
import { Avatar, Row, Col } from 'antd'
import {connect} from 'react-redux'
import axios from 'axios'
import data from './data'
import UserList from './userList'

class User extends Component {
    constructor(arg) {
        super(arg)
        let id = this.props.match.params.id
        this.getData(id)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.getData(nextProps.match.params.id)
            return false
        }
        return true
    }

    getData(id) {
        this.props.dispatch((dispatch)=> {
            dispatch({
                type: 'USER_UPDATE',
            })
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
                .then((res)=> {
                    console.log(res.data)
                    dispatch({
                        type: 'USER_UPDATE_SUCC',
                        data: res.data,
                    })
                })
                .catch((err)=> {
                    console.log(err)
                    dispatch({
                        type: 'USER_UPDATE_ERR',
                    })
                })
        })
    }

    render() {
        console.log(this.props)
        let { data, loading } = this.props
        let { avatar_url, loginname, create_at, score, recent_topics, recent_replies } = data
        return <div className="wrap">
            <Avatar src={avatar_url} className="userAvatar"></Avatar>
            <Row className="userInfo">
                <Col md={8}>用户名：<a>{loginname}</a></Col>
                <Col md={8}>积分：<a>{score}</a></Col>
                <Col md={8}>注册时间：<a>{create_at.split('T')[0]}</a></Col>
            </Row>
            <UserList
                loading = {loading}
                title = {'最近创建话题'}
                data = {recent_topics}
            >
            </UserList>
            <UserList 
                loading = {loading}
                title = {'最近回复话题'}
                data = {recent_replies}
            ></UserList>
        </div>
    }
}

export default connect(state=>state.user)(User)