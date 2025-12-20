import React from 'react'
import Header from '../others/Header'
import EmployeeDetails from './Employee/EmployeeDetails'
import TasksStats from './Employee/TasksStats'
import TaskList from './Employee/TaskList'


const EmployeeDashboard = (props) => {
    console.log("Employee Dashboard")
    console.log(props)
    // console.log(logout)
    return (
        <div className='w-full min-h-screen bg-black p-4 text-white '>
            <Header props={props} />

            <div className='p-6 space-y-6'>
                <EmployeeDetails employee={props.data} />
                <TasksStats tasks={props.data.tasks} />
                <TaskList tasks={props.data.tasks} />
            </div>
        </div>
    )
}

export default EmployeeDashboard
