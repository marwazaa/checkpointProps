import React from 'react'
import propTypes from 'prop-types'

function Profilecomponent(props) {
    return (
        <div>

            {props.handleName(props.fullName)}
            <h1 style={{color:"yellow"}}>{props.fullName}</h1>
            <h2>{props.profession}</h2>
            <h3>{props.bio}</h3>
            {props.children}


        </div>
    )
}


Profilecomponent.defaultProps={
    fullName: "default name",
    bio: "default bio",
    profession: "default profession"
}


Profilecomponent.propTypes={
    fullName:propTypes.string.isRequired,
    bio:propTypes.string.isRequired,
    profession:propTypes.string.isRequired,
    handleName:propTypes.func
}


export default Profilecomponent