import React, { Component } from 'react';
import jsonData from '../jsonFolder/Testjson1'

class JsonTest extends Component {
    render() {
        return (
            <div>
                <h1>Hello This is Json Test</h1>
                {jsonData.map(jsonitem => {
                    return( 
                    <h1>{ jsonitem.name1 }</h1>
                        )
                })}
            </div>
        )
    }
}

export default JsonTest