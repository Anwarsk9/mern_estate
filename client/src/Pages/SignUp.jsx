import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container p-3 mx-auto max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>
      <form action="#" className="flex flex-col gap-4 mx-auto">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="username"
          id="username"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="username"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="username"
          id="password"
        />
        <button className="p-3 rounded-lg uppercase bg-slate-700 text-white hover:opacity-95 disabled:opacity-80">
          Signup
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 hover:cursor-pointer">Signin</span>
        </Link>
      </div>
    </div>
  );
}
