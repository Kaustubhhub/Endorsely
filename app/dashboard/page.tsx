"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const session = useSession()
    return (
        <div>
            {JSON.stringify(session.data?.user)}
        </div>
    )
}

export default Dashboard
