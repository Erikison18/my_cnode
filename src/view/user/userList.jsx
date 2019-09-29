import React,{Component} from 'react'
import { Card, Row, Col, List, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import data from './data'

class UserList extends Component {
    render() {
        let {loading, title, data} = this.props
        return  (<Card
            loading = {loading}
            title = {title}
            type = 'inner'
        >
            <List
                className = 'userList'
                dataSource = {data}
                renderItem = {(item)=> (
                    <List.Item key={item.id}>
                        <Avatar scr={item.author.avatar_url}></Avatar>
                        <Link to={'/user/'+item.author.loginname} className="userName">{item.author.loginname}</Link>
                        <h4><Link to={'/details/'+item.id}>{item.title}</Link></h4>
                        <time>最后回复时间：{item.last_reply_at.split('T')[0]}</time>
                    </List.Item>
                )}
            >
            </List>
        </Card>)
    }
}

export default UserList