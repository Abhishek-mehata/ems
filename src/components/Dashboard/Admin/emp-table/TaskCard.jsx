import { useContext } from "react"
import { AuthContext } from "../../../../context/AuthContext"

const TaskCard = ({ task, empID }) => {
    const statusColors = {
        pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
        completed: "bg-green-500/20 text-green-400 border-green-500/40",
        failed: "bg-red-500/20 text-red-400 border-red-500/40",
        in_review: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    }

    const { employeesData, setEmployeesData } = useContext(AuthContext)


    const handleApprove = (empID, taskID) => {
        setEmployeesData(prevData => {
            const updatedData = prevData.map(emp => {
                if (emp.id === empID) {
                    return {
                        ...emp,
                        tasks: emp.tasks.map(t =>
                            t.id === taskID ? { ...t, status: "completed" } : t
                        )
                    };
                }
                return emp;
            });

            localStorage.setItem("employees", JSON.stringify(updatedData));
            // manipulating the localstorage inside the useState variable it makes rerender to happen 
            return updatedData;
        });
    };


    const handleReject = (empID, taskID) => {
        setEmployeesData(prevData => {

            const updatedData = prevData.map(emp => {
                if (emp.id === empID) {
                    return {
                        ...emp,
                        tasks: emp.tasks.map(t =>
                            t.id === taskID ? { ...t, status: "failed" } : t
                        )
                    };
                }
                else {
                    return emp;
                }
            })

            localStorage.setItem("employees", JSON.stringify(updatedData))
            // manipulating the localstorage inside the useState variable it makes rerender to happen 

            return updatedData;
        })

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
            <div className="w-full flex justify-between text-[14px] text-gray-500">
                <span>Due: {task.dueDate}</span>
                <span className="uppercase tracking-wide"> {task.category}</span>
            </div>

            {task.status == "in_review" ? (
                // <div>F</div>
                <div className="w-full flex justify-between items-center flex-row p-1 mt-3 gap-2 ">

                    <button
                        onClick={() => handleApprove(empID, task.id)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                        Approve
                    </button>

                    <button
                        // className="flex-1 "
                        onClick={() => handleReject(empID, task.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer"

                    >Reject</button>
                </div>
            ) : ""}


        </div>
    )
}


export default TaskCard

