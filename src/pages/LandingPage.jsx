import { ArrowRight, CheckCircle2, ShieldCheck, Ticket, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const features = [
  { icon: Ticket, title: "Centralized tickets", text: "Submit, track, comment on, and resolve IT support requests from one place." },
  { icon: Users, title: "Role-based support", text: "Requesters, agents, and administrators each get the tools they need." },
  { icon: ShieldCheck, title: "Secure by design", text: "Authentication, access control, validation, and accessible interfaces are built into the platform." }
];

export default function LandingPage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">IT support, organized.</span>
            <h1>Resolve IT issues without losing track of the conversation.</h1>
            <p>
              TechFlow gives organizations one centralized place to submit,
              prioritize, assign, and resolve IT support requests.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/signup">Create your account <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" to="/signin">Sign in</Link>
            </div>
            <div className="trust-row">
              <span><CheckCircle2 size={17} /> Ticket tracking</span>
              <span><CheckCircle2 size={17} /> Role-based access</span>
              <span><CheckCircle2 size={17} /> Responsive UI</span>
            </div>
          </div>
          <div className="hero-panel" aria-label="Product preview">
            <div className="panel-top">
              <span className="status-dot" /> TechFlow Dashboard
              <span className="panel-label">Live workspace</span>
            </div>
            <div className="metric-grid">
              <div><strong>24</strong><span>Open tickets</span></div>
              <div><strong>11</strong><span>In progress</span></div>
              <div><strong>08</strong><span>Pending</span></div>
            </div>
            <div className="ticket-preview">
              <div><span className="priority-badge">HIGH</span><span>#1048</span></div>
              <strong>Unable to connect to office network</strong>
              <small>Network · Assigned to Alex Morgan</small>
            </div>
            <div className="ticket-preview">
              <div><span className="priority-badge medium">MEDIUM</span><span>#1047</span></div>
              <strong>VPN client installation request</strong>
              <small>Access · Awaiting technician</small>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-heading">
            <span className="eyebrow">Core platform</span>
            <h2>Everything starts with a better ticket.</h2>
            <p>A focused foundation for the capstone system we are building.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="section workflow">
          <div>
            <span className="eyebrow">Simple workflow</span>
            <h2>Submit. Assign. Resolve.</h2>
          </div>
          <div className="workflow-steps">
            <div><b>01</b><span>Create a ticket</span></div>
            <div><b>02</b><span>IT staff respond</span></div>
            <div><b>03</b><span>Track to resolution</span></div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to streamline IT support?</h2>
          <p>Create your TechFlow account and start with a structured support experience.</p>
          <Link className="button" to="/signup">Get started <ArrowRight size={18} /></Link>
        </section>
      </main>
      <footer>© 2026 TechFlow: IT Solutions</footer>
    </div>
  );
}
