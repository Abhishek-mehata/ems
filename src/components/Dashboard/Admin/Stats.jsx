// this is default main dashboard for admin
import { useMemo } from 'react'

const Stats = ({ employeesData }) => {

    const stats = useMemo(() => {
        if (!employeesData?.length) {
            return {
                totalEmployees: 0,
                totalTasks: 0,
                completedTasks: 0,
                pendingTasks: 0,
                failedTasks: 0,
                inReviewTasks: 0,
            }
        }

        let totalEmployees = 0
        let totalTasks = 0
        let completedTasks = 0
        let pendingTasks = 0
        let failedTasks = 0
        let inReviewTasks = 0

        employeesData.forEach(emp => {
            totalEmployees++;
            emp.tasks?.forEach(task => {
                totalTasks++;
                if (task.status === "completed") completedTasks++;
                else if (task.status === "pending") pendingTasks++;
                else if (task.status === "failed") failedTasks++;
                else if (task.status === "in_review") inReviewTasks++;
            })
        });

        return {
            totalEmployees,
            totalTasks,
            completedTasks,
            pendingTasks,
            failedTasks,
            inReviewTasks,
        };
    }, [employeesData]);


    const StatCard = ({ title, value }) => {
        return (
            <div className='p-4 rounded bg-gray-800 '>
                <p className='text-sm'>{title}</p>
                <p className='text-2xl font-semibold'>{value}</p>
            </div>
        )
    }



    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2  select-none '>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 mt-4 p-4">
            <StatCard title={"Total Employees"} value={stats.totalEmployees} />
            <StatCard title={"Total Tasks"} value={stats.totalTasks} />
            <StatCard title={"Completed Tasks"} value={stats.completedTasks} />
            <StatCard title={"Pending Tasks"} value={stats.pendingTasks} />
            <StatCard title={"Failed Tasks"} value={stats.failedTasks} />
            <StatCard title={"Review Stage"} value={stats.inReviewTasks} />
        </div>
    )
}

export default Stats