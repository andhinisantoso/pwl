import React from 'react';
import {Button} from 'antd';

import {Carousel} from 'antd';

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

export default function AppHomes() {
    return (
        <div id="hero" className="homes">
            <Carousel>
                {items.map(item => {
                    return (
                        <div key={item.key} className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                    <Button type="primary" size="large">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}