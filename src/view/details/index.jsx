import React,{Component} from 'react'
import data from './data'
import {connect} from 'react-redux'
import axios from 'axios'
import TxtDetails from './txtDetails'
import ReplyList from './replyList'

class Details extends Component {
    constructor(arg) {
        super(arg)
        let id = this.props.match.params.id
        this.getData(id)
    }

    // shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.) {
            
        // }
    // }

    getData(id) {
        this.props.dispatch((dispatch)=> {
            dispatch({
                type: 'DETAILS_UPDATE'
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res)=> {
                    console.log(res.data)
                    dispatch({
                        type: 'DETAILS_UPDATE_SUCC',
                        data: res.data,
                    })
                })
                .catch((err)=> {
                    console.log(err)
                    dispatch({
                        type: 'DETAILS_UPDATE_ERR',
                    })
                })
        })
    }

    render() {
        let {loading, data} = this.props
        console.log(data)
        return (<div className="wrap">
            <TxtDetails data={data} loading={loading}></TxtDetails>
            <ReplyList loading={loading} replyCount={data.reply_count} replies={data.replies}></ReplyList>
        </div>)
    }
}

export default connect((state)=>state.details)(Details)