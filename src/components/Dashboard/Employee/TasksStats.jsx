// This component shows an overview of how many tasks the employe has pending,completed or other state 

const TasksStats = ({ tasks }) => {
    const pending = tasks.filter(t => t.status === "pending").length
    const completed = tasks.filter(t => t.status === "completed").length
    const failed = tasks.filter(t => t.status === "failed").length
    const inReview = tasks.filter(t => t.status === "in_review").length


    const stats = [
        { title: "Pending Tasks", value: pending, color: "yellow" },
        { title: "In Review", value: inReview, color: "cyan" },
        { title: "completed", value: completed, color: "green" },
        { title: "Failed Tasks", value: failed, color: "red" }
    ];

    


    return (

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`bg-${stat.color}-500/20   border border-${stat.color}-500/40 p-4 rounded shadow-md hover:shadow-lg transition duration-100`}
                >
                    <h4 className={`text-${stat.color}-400`}>{stat.title}</h4>
                    <p className='text-[27px] font-bold'>{stat.value}</p>
                </div>
            ))}

            {/* <div className='bg-yellow-500/20 border border-yellow-500/40 p-4 rounded'>
                <h4 className='text-yellow-400'>Pending Tasks</h4>
                <p className='text-[27px] font-bold'>{pending}</p>
            </div>

            <div className='bg-green-500/20 border border-green-500/40 p-4 rounded'>
                <h4 className="text-green-400">Completed Tasks</h4>
                <p className="text-[27px] font-bold">{completed}</p>
            </div> */}
        </div>
    )
}

export default TasksStats


