import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import './style.css'

const AdminRoute = () => {
    const [ isAdmin, toggleAdmin ] = useState(false)

    const history = useHistory()

    return (
        <div className='page template userRoute'>
            { isAdmin ?
                <div className="template-container">
                    admin route
                </div>
                :
                <>
                    { history.push('/') }
                </>
            }
        </div>
    )
}

export default AdminRoute
