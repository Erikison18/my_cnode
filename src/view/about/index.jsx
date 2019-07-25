import React,{Component} from 'react'
import PCard from '../card'
import data from './data'

class About extends Component {
    render() {
        return (<PCard data={data}></PCard>)
    }
}

export default About