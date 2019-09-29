import React,{Component} from 'react'
import {List, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {connect}  from 'react-redux'
import data from './data'
import TxtTag from '../txtTag'
import axios from 'axios'

class IndexList extends Component {
    constructor(arg) {
        super(arg)
        this.state = {
            page: 1,
        }
        this.getData(this.props.tab)
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     if (nextProps.tab !== this.props.tab) {
    //         this.getData(nextProps.tab)
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.tab !== this.props.tab) {
            this.getData(nextProps.tab)
            return false
        }
        return true
    }

    getData(tab) {
        this.props.dispatch((dispatch)=> {
            dispatch({
                type: 'LIST_UPDATE',
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
                .then((res)=> {
                    console.log(res.data)
                    dispatch({
                        type: 'LIST_UPDATE_SUCC',
                        data: res.data,
                    })
                })
                .catch((err)=> {
                    console.log(err)
                    dispatch({
                        type: 'LIST_UPDATE_ERR',
                        data: err,
                    })
                })
        })
    }

    render() {
        console.log(this.props)
        let {loading, data} = this.props
        return <List
                    loading = {loading}
                    dataSource = {data}
                    renderItem = {item=>(<List.Item
                            actions={['回复:'+item.reply_count, '访问'+item.visit_count]}
                            key={item.id}
                        >
                        <List.Item.Meta
                            avatar={<Avatar src={item.author.avatar_url}></Avatar>}
                            title = {<div><TxtTag data={item}/><Link to={`/details/${item.id}`}>{item.title}</Link></div>}
                            description = {<p><Link to={`/user/${item.author.loginname}`}>
                                                    {item.author.loginname}
                                            </Link>发表于：{item.create_at.split('T')[0]}</p>}
                        >
                        </List.Item.Meta>
                    </List.Item>)}
                ></List>
    }
}

export default connect(state=>state.list)(IndexList)