import React from 'react'
import EmployeeDetails from './EmployeeDetails'

const EmployeeTable = ({ employeesData, setEmployeesData }) => {

    return (
        <div className='p-4 shadow rounded'>
            <h3 className='text-lg font-semibold mb-4'>Employees Data</h3>

            <table className='w-full text-left '>
                <thead>
                    <tr className='border-b'>
                        <th className='p-3'>Name</th>
                        <th className='p-3'>Email</th>
                        <th className='p-3'>Salary</th>
                        <th className='p-3'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employeesData && employeesData.map((emp, index) => {
                        return (
                            <tr key={emp.id} className='border-b hover:bg-gray-800/50'>
                                <td className='p-3'>{emp.firstName} {emp.lastName}</td>
                                <td className='p-3'>{emp.email}</td>
                                <td className='p-3'>₹ {emp.salary}</td>
                                <td className='p-3'>
                                    <EmployeeDetails employee={emp} setEmployeesData={setEmployeesData} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default EmployeeTable