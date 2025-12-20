import React, { useEffect } from 'react'
import { useState } from 'react'
import TaskCard from './TaskCard';

const EmployeeDetails = ({ employee, setEmployeesData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className='px-3 py-1 bg-blue-600 rounded mr-2 hover:bg-blue-700 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >view</button>

            {/* Employee Details Modal */}
            {isOpen && (
                <div className=" fixed bg-[#1a1a1a] inset-0 flex items-center justify-center z-50">
                    <div className='w-screen h-screen px-4 shadow-lg bg-black/70'>

                        <h3
                            className='text-2xl font-semibold mb-6 border-b border-gray-700 pb-2'>
                            {employee.firstName} {employee.lastName}
                        </h3>

                        <div className="space-y-2 text-sm">
                            <p><span className="text-gray-400">ID:</span> {employee.id}</p>
                            <p><span className="text-gray-400">Email:</span> {employee.email}</p>
                            <p><span className="text-gray-400">Salary:</span> ₹ {employee.salary}</p>
                        </div>

                        {/* Tasks */}
                        <div>
                            {employee.tasks && employee.tasks.length > 0 ? (
                                <div>
                                    <h4 className='mt-6 mb-3 text-lg font-medium"'>Tasks Assigned</h4>
                                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                        {employee.tasks.map(task =>
                                            <>
                                                <TaskCard key={task.id} task={task} />
                                            </>
                                        )}
                                    </div>



                                </div>
                            ) : (
                                <div>No Tasks Assigned or Task Not found</div>
                            )}
                        </div>


                        <button
                            className="mt-6 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition cursor-pointer"
                            onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default EmployeeDetails









