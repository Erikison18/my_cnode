import React,{Component} from 'react'
import data from './data'
import TxtDetails from './txtDetails'
import ReplyList from './replyList'

class Details extends Component {
    render() {

        return (<div className="wrap">
            <TxtDetails data={data.data} loading={false}></TxtDetails>
            <ReplyList loading={false} replyCount={data.data.reply_count} replies={data.data.replies}></ReplyList>
        </div>)
    }
}

export default Details