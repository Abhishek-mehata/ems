// This shows the details like name, salary,... of an employee

const EmployeeDetails = ({ employee }) => {

    return (
        <div className='bg-gray-900 p-5 rounded-lg shadow-md'>
            <h2
                className='text-xl font-semibold'
            >
                {employee.firstName} {employee.lastName}
            </h2>

            <p className='text-[14px] mt-2'>
                ID: {employee.id}
            </p>
            <p className='text-gray-400'>{employee.email}</p>
            <p className='text-sm mt-2'>
                Salary: ₹ {employee.salary}
            </p>

        </div>
    )
}

export default EmployeeDetails