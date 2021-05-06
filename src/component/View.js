import React from 'react'
import './Block'
import ReactBlockly from 'react-blockly'
import Blockly from 'blockly';
import '../App.css'
import ConfigFiles from './Content';
import parseWorkspaceXml from './BlocklyHelper'

const View = (props) => {
    const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
    const toolboxCategories = parseWorkspaceXml(ConfigFiles.INITIAL_TOOLBOX_XML)
    function workspaceDidChange(workspace) {
        const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
        document.getElementById('generated-xml').innerText = newXml;

        const code = Blockly.JavaScript.workspaceToCode(workspace);
        document.getElementById('code').value = code;
    }

    return (
        <>
            <ReactBlockly
                toolboxCategories={toolboxCategories}
                initialXml={initialXml}
                wrapperDivClassName="fill-height"
                workspaceConfiguration={{
                    grid: {
                        spacing: 20,
                        length: 3,
                        colour: '#ccc',
                        snap: true,
                    },
                }}
                workspaceDidChange={workspaceDidChange}
            />
            <pre id="generated-xml">
            </pre>
            <textarea id="code" style={{ height: "200px", width: "400px" }} value=""></textarea>
        </>
    )
}
export default View
