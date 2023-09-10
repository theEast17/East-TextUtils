import React from 'react'

export default function Alert(props) {

    let capital = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: "50px", width: "100%" }}>
             {
                props.alert && <div className='mb-2'>
                    <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                        <strong>{capital(props.alert.typ)}</strong>: {props.alert.msg}
                    </div>
                </div>
            }
        </div>

    )
}
