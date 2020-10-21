import React from 'react'

import './style.css'

import AdminRoute from 'components/higher/AdminRoute'

import Dashboard from 'components/utils/Dashboard'

const AdminDashboard = () => {
    return (
        <AdminRoute>
            <Dashboard status='admin' />
        </AdminRoute>
    )
}

export default AdminDashboard
