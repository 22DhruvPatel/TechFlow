import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Logo from "../components/Logo";

export default function SignUpPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", department: "", email: "", password: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName,
          last_name: form.lastName,
          department: form.department
        }
      }
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Account created. Check your email if email confirmation is enabled.");
      setTimeout(() => navigate("/signin"), 1200);
    }

    setLoading(false);
  }

  return (
    <main className="auth-page">
      <div className="auth-card auth-card-wide">
        <Logo />
        <div className="auth-heading">
          <span className="eyebrow">Get started</span>
          <h1>Create your TechFlow account</h1>
          <p>Set up your requester profile to start submitting support tickets.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-stack">
          <div className="two-col">
            <label>First name<input required value={form.firstName} onChange={e => update("firstName", e.target.value)} /></label>
            <label>Last name<input required value={form.lastName} onChange={e => update("lastName", e.target.value)} /></label>
          </div>

          <label>
            Department
            <input required value={form.department} onChange={e => update("department", e.target.value)} placeholder="e.g. Finance" />
          </label>

          <label>
            Corporate email
            <input type="email" required value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com" />
          </label>

          <label>
            Password
            <input type="password" required minLength={8} value={form.password} onChange={e => update("password", e.target.value)} placeholder="Create a strong password" />
          </label>

          <p className="helper-text">Use at least 8 characters. We will strengthen the client-side validation to match the final capstone policy.</p>

          {message && <div className="form-message" role="status">{message}</div>}

          <button className="button button-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/">Back to home</Link>
          <span>·</span>
          <Link to="/signin">Already have an account?</Link>
        </div>
      </div>
    </main>
  );
}
