import { ContactForm } from "./Home";

export function Contact() {
  return (
    <main className="contact-body wrap">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Want to talk about a project?</h1>
          <p className="lede">Email: hello@anujsiddhpura.com</p>
          <p className="lede">I will reply with a clear next step.</p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
