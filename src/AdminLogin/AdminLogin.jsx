


const AdminLogin = () => {
    return (
        <div>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
    <div className="card bg-base-100 w-full max-w-2xl  shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"
           name="email" 
           className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
           placeholder="Email" />

          <label className="label">Password</label>
          <input type="password"
           name="password"
           className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AdminLogin;