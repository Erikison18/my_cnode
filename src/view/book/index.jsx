import React,{Component} from 'react'
import data from './data'
import PCard from '../card'

class Book extends Component {
    render() {
        return (<PCard data={data}></PCard>)
    }
}

export default Book