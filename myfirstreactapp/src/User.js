import React from 'react'

function User({ info }) {
    if (!info) {
        return <h3>Searching...</h3>
    }
    return (
        <div className="details">
                <h3> {name} </h3>
                <h3> {email} </h3>
        </div>
    )
}

export default User