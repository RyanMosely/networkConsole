import React from 'react'
import { Checkbox } from 'semantic-ui-react'

    function Radio(props){

    return (
      <div>
        <Checkbox
          label={props.label}
          onChange={props.toggle}
          checked={props.status}
        />
      </div>
    )
}

export default Radio;