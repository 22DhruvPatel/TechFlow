import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Logo from "../components/Logo";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword(form);

    if (error) setMessage(error.message);
    else navigate("/");

    setLoading(false);
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <Logo />
        <div className="auth-heading">
          <span className="eyebrow">Welcome back</span>
          <h1>Sign in to TechFlow</h1>
          <p>Access your IT support workspace.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-stack">
          <label>
            Corporate email
            <input
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="you@company.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              placeholder="Enter your password"
            />
          </label>

          {message && <div className="form-error" role="alert">{message}</div>}

          <button className="button button-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/">Back to home</Link>
          <span>·</span>
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </main>
  );
}
