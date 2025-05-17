// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {

//         const navigate = useNavigate();

//         const handleLogout = () => {
//           localStorage.removeItem('auth');
//           navigate('/');
//         };

//     return (
//         <div>

// <div className="p-10 text-center">
//       <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>

//         </div>
//     );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define your tables and their respective API URLs
const tableConfig = {
  Applicatie_Ontwikkeling: "http://localhost:5550/users",
  Branding: "http://localhost:5550/forms",
  Standard_Template: "http://localhost:5550/custom",
  Maatwerk_Website: "http://localhost:5550/maatwerk",
  Payment: "http://localhost:5550/payment",
};

const Dashboard = () => {
  const [activeTable, setActiveTable] = useState("Users");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTableData = async () => {
      setLoading(true);
      try {
        const response = await fetch(tableConfig[activeTable]);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTableData();
  }, [activeTable]);

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("auth");
  };

  return (
    <div className="flex min-h-screen  text-black bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 min-w-[16rem] max-w-[16rem] bg-white p-4 h-screen flex flex-col shadow-lg">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          {Object.keys(tableConfig).map((tableName) => (
            <li
              key={tableName}
              onClick={() => setActiveTable(tableName)}
              className={`cursor-pointer p-2 rounded ${
                activeTable === tableName
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {tableName}
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogOut}
          className="hidden lg:block hover:bg-[#468AFFE6] bg-[#468AFF] font-plus-jakarta text-white px-6 py-2 rounded-md shadow-md mt-6 "
        >
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">{activeTable} Table</h1>

        {loading ? (
          <p className="animate-pulse text-gray-600">Loading...</p>
        ) : data.length > 0 ? (
          <div className="max-h-[500px] overflow-auto border border-gray-300 rounded">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-200 sticky top-0 z-10">
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th
                        key={key}
                        className="p-2 text-left capitalize border-b"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-t">
                      {Object.values(item).map((val, i) => (
                        <td key={i} className="p-2 text-sm border-b">
                          {Array.isArray(val)
                            ? val.join(", ")
                            : val?.toString()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>No data found for {activeTable}.</p>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
