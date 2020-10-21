import React from 'react'

import './style.css'

import UserRoute from 'components/higher/UserRoute'

import Dashboard from 'components/utils/Dashboard'

const UserDashboard = () => {
    return (
        <UserRoute>
            <Dashboard status='user' />
        </UserRoute>
    )
}

export default UserDashboard
