const TaskCard = ({ task }) => {
    const statusColors = {
        pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
        completed: "bg-green-500/20 text-green-400 border-green-500/40",
        failed: "bg-red-500/20 text-red-400 border-red-500/40",
    }

    return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-600  hover:shadow-md transition duration-200 select-none cursor-pointer">

            {/* Header */}
            <div className="flex justify-between items-start gap-2 mb-2">
                <h2 className="text-lg font-semibold text-gray-100 line-clamp-1">
                    {task.title}
                </h2>

                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusColors[task.status]}`}>
                    {task.status}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {task.description}
            </p>

            {/* Footer */}
            <div className="flex justify-between text-[14px] text-gray-500">
                <span>Due: {task.dueDate}</span>
                <span className="uppercase tracking-wide"> {task.category}</span>
            </div>

            
        </div>
    )
}


export default TaskCard









































// import React from 'react'


// const TaskCard = ({ key, task }) => {
//     const statusColors = {
//         pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
//         completed: "bg-green-500/20 text-green-400 border-green-500/40",
//         failed: "bg-red-500/20 text-red-400 border-red-500/40",
//     }
//     return (
//         <div
//             className='bg-gray-900/50 border border-gray-700 text-white rounded-[7px]  p-4 shadow-lg hover:shadow-md transition duration-100'>

//             {/** Header */}
//             <div className='flex justify-between items-start mb-2'>
//                 <h2 className='text-[18px] font-semibold text-gray-100'>{task.title}</h2>
//                 <span className={`text-[13px] px-3 py-1 rounded-full border bg-[${statusColors[task.status]}] `}>{task.status}</span>

//             </div>

//             {/* Description */}
//             <p className='text-[16px] text-gray-400 mb-3'>
//                 {task.description}
//             </p>

//             {/* Card footer */}
//             <div className='flex justify-between items-center text-xs text-gray-500'>
//                 <span>{task.category}</span>
//                 <span>Due: {task.dueDate}</span>

//             </div>
//         </div>
//     )
// }

// export default TaskCard