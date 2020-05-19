import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

function tArea(props){
    return (
        <Form>
             <TextArea  {...props} />
       </Form>
    );
}

export default tArea;