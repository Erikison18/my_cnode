import React, {Component} from 'react'
import {Layout, Row, Col} from 'antd'

class MainHeader extends Component{
    render() {
        return  (<Layout.Header>
                    <Row className="wrap">
                        <Col md={6} xs={24}>
                            <h1 id="logo">cnode</h1> 
                        </Col>
                        <Col md={18} xs={0}>
                            <h1>cnode</h1> 
                        </Col>
                    </Row>
                </Layout.Header>) 
    }
}

export default MainHeader
