```jsx
// /admin/admindashboard.jsx
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = (props) => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex">
      <AdminSidebar active={activePage} onChange={setActivePage} />

      <main className="flex-1 p-6">
        {activePage === "dashboard" && "<DashboardMain />"}
        {activePage === "employees" && "<Employees />"}
        {activePage === "create-task" && "CreateTask />"}
        {activePage === "reports" && "<Reports />"}
      </main>
    </div>
  );
};

export default AdminDashboard;
```

```jsx
// /admin/adminSidebar.jsx
const AdminSidebar = ({ active, onChange }) => {
  return (
    <aside>
      <button onClick={() => onChange("dashboard")}>Dashboard</button>
      <button onClick={() => onChange("employees")}>Employees</button>
    </aside>
  );
};
export default AdminSidebar;
```
