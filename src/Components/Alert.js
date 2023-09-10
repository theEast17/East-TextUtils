import React from 'react'

export default function Alert(props) {

    let capital=(word)=>{
        let lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
       props.alert && <div className='my-3'> 
            <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{capital(props.alert.typ)}</strong>: {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}
