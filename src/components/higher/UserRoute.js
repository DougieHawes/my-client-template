import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import './style.css'

const UserRoute = () => {
    const [ isUser, toggleUser ] = useState(false)

    const history = useHistory()

    return (
        <div className='page template userRoute'>
            { isUser ?
                <div className="template-container">
                    user route
                </div>
                :
                <>
                    { history.push('/') }
                </>
            }
        </div>
    )
}

export default UserRoute
