import React from 'react'

export default function Developer(props) {
  return (
    <>
    <div className="p-3 border bg-light colm">
        <ul>
            <li><h3>{props.Name} </h3>({props.Designation})</li>
     </ul>
     </div>
    </>
  )
}
