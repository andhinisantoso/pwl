import React from 'react';
import {Row, Col} from 'antd';

const items = [
    {
        key: '1',
        title: 'Lorem ipsum 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan dui vel sapien consequat, ut tempor sapien dapibus. Aenean a turpis sit amet felis faucibus suscipit convallis non sapien. Mauris gravida consequat sagittis. Phasellus sit amet tincidunt sem. Nam neque lorem, accumsan id congue at, pharetra quis turpis. Nam et.',        
    },
    {
        key: '2',
        title: 'Lorem ipsum 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan dui vel sapien consequat, ut tempor sapien dapibus. Aenean a turpis sit amet felis faucibus suscipit convallis non sapien. Mauris gravida consequat sagittis. Phasellus sit amet tincidunt sem. Nam neque lorem, accumsan id congue at, pharetra quis turpis. Nam et.',        
    },
    {
        key: '3',
        title: 'Lorem ipsum 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan dui vel sapien consequat, ut tempor sapien dapibus. Aenean a turpis sit amet felis faucibus suscipit convallis non sapien. Mauris gravida consequat sagittis. Phasellus sit amet tincidunt sem. Nam neque lorem, accumsan id congue at, pharetra quis turpis. Nam et.',        
    },
]

export default function AppAbout() {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>Lorem ipsum, lorem ipsum</p>
                </div>
                <div className="contentHolder">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan dui vel sapien consequat, 
                    ut tempor sapien dapibus. Aenean a turpis sit amet felis faucibus suscipit convallis non sapien. 
                    Mauris gravida consequat sagittis. Phasellus sit amet tincidunt sem. Nam neque lorem, accumsan 
                    id congue at, pharetra quis turpis. Nam et.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item=> {
                        return(
                            <Col md={{ span: 8}} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    )
}