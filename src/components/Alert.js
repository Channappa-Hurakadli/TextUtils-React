import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alerted && <div>
      <div class={`alert alert-${props.alerted.type.toLowerCase()} alert-dismissible fade show`} role="alert">
            <strong>{props.alerted.type}!! </strong>{props.alerted.msg}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    </div>}
    </div>
  )
}

export default Alert
