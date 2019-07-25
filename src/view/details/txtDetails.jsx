import React,{Component} from 'react'
import { Card, Avatar } from 'antd'
import TxtTag from '../txtTag'
import { Link } from 'react-router-dom'

export default class TxtDetail extends Component {
    render () {
        let data = this.props.data
        const title = (<div>
            <h1>{data.title}</h1>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <TxtTag data={data}></TxtTag>
                <Avatar scr={data.author.avatar_url}></Avatar>
                <Link to={`/user/${data.author.loginname}`}>{data.author.loginname}</Link>
                发表于{data.create_at}
            </div>
        </div>)
        return (
            <Card title={title} loading={this.props.loading}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.content
                    }}
                ></div>
            </Card>
        )
    }
}
