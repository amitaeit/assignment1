import React from 'react'

function Project(props) {
  return (
    <div><table className="table table-striped" style={{ border: "1px solid black" }}>
    <tbody>
        <tr>
            <td>
                <b>Position</b>
            </td>
            <td>
                {props.project.position}
            </td>
        </tr>
        <tr>
            <td>
                <b>Duration</b>
            </td>
            <td>
                {props.project.duration}
            </td>
        </tr>
        <tr>
            <td>
                <b>Company</b>
            </td>
            <td>
                {props.project.company}
            </td>
        </tr>
        <tr>
            <td>
                <b>Description</b>
            </td>
            <td>
                {props.project.desc}
            </td>
        </tr>
    </tbody>


</table></div>
  )
}

export default Project