import React from 'react'

function Skill(props) {
    return (
        <div>
            <h3 className="text-center mt-2">{props.skill.name}</h3>
            <table className="table table-striped" style={{ border: "1px solid black" }}>
                <tbody>
                    <tr>
                        <td>
                            <b>Description</b>
                        </td>
                        <td>
                            {props.skill.description}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Experience</b>
                        </td>
                        <td>
                            {props.skill.experience}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Proficiency Level</b>
                        </td>
                        <td>
                            {props.skill.proficiency}
                        </td>
                    </tr>
                </tbody>


            </table>
        </div>
    )
}

export default Skill