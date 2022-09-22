import React from 'react'

function Project(props) {
  return (
    <div><table className="table table-striped" style={{ border: "1px solid black" }}>
    <tbody>
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
                <b>Title</b>
            </td>
            <td>
                {props.project.title}
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
                <b>Project</b>
            </td>
            <td>
                {props.project.project}
            </td>
        </tr>
    </tbody>


</table></div>
  )
}

export default Project