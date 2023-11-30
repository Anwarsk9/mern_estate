import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  let [formData, setFormData] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(false);
    navigate("/sign-in");
  }

  return (
    <div className="container p-3 mx-auto max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-auto">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="username"
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="username"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="p-3 rounded-lg uppercase bg-slate-700 text-white hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Signup"}
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 hover:cursor-pointer">Signin</span>
        </Link>
      </div>
      <p className="text-red-700">{error}</p>
    </div>
  );
}
