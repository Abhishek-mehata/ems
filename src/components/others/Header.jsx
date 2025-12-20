import React from 'react'

const Header = ({ props }) => {
    const role = props?.role;
    const data = props?.data;

    return (
        <>
            <nav className="w-full flex items-center justify-between px-6 py-4 
        bg-white/10 backdrop-blur-lg shadow-md  text-white">

                <div className="flex flex-col">
                    <h1 className="text-3xl font-semibold tracking-wide">
                        {role?.toUpperCase()} Dashboard
                    </h1>

                    <span className="mt-1 text-sm opacity-80">
                        Hello,
                        <br />
                        {role === "admin"
                            ? "Admin"
                            : role === "employee"
                                ? data?.firstName || "Employee"
                                : ""}
                    </span>
                </div>

                <button
                    onClick={props.logout}
                    className="px-5 py-2 rounded-lg bg-red-500/80 hover:bg-red-600
          transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                    Logout
                </button>
            </nav>
        </>
    )
}

export default Header
