import React, {Component} from 'react'
import {Layout, Row, Col, Divider, Icon, Dropdown, Button} from 'antd'
import Nav from './nav'

class MainHeader extends Component{
    render() {
        return  (<Layout.Header>
                    <Row className="wrap">
                        <Col md={6} xs={24}>
                            <h1 id="logo">cnode</h1> 
                        </Col>
                        <Col md={18} xs={0}>
                            <Divider type="vertical" className="headerDivider"></Divider>
                            <Nav id="nav" mode="horizontal"></Nav>
                        </Col>
                        <Col md={0} xs={24} className="xsNav">
                            <Dropdown overlay={<Nav id="xsNav" mode="vertical"></Nav>} 
                            placement="bottomRight" trigger={['click', 'touchend']}>
                                <Button><Icon type="bars"></Icon></Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </Layout.Header>)
    }
}

export default MainHeader
