import type { FormEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ProjectImage } from "../components/ProjectImage";
import { projects } from "../data/projects";
import { Reveal, RevealText } from "../motion/Reveal";
import { useLenis } from "../motion/SmoothScroll";

export function Home() {
  const lenis = useLenis();

  function scrollToWork(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById("work");
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -24, duration: 1.25 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main>
      <section className="hero wrap">
        <Reveal className="eyebrow" delay={40}>
          Portfolio
        </Reveal>
        <RevealText
          className="hero-title"
          text="Design is not only how it looks or feels, it is also how it works."
          delay={80}
        />
        <Reveal className="quote-attr" delay={260}>
          ~ Steve Jobs
        </Reveal>
        <Reveal className="hero-bio" delay={320}>
          <p>I was born in Rajkot, Gujarat.</p>
          <p>
            I currently work in Ahmedabad with a small team, where we design
            and develop highly polished, custom software solutions tailored to
            specific business needs.
          </p>
          <p>
            Previously, I was a video editor and project manager at a marketing
            agency in Ahmedabad.
          </p>
        </Reveal>
        <Reveal className="actions" delay={420}>
          <a className="btn btn-fill" href="#work" onClick={scrollToWork}>
            View work
          </a>
          <Link className="btn btn-ghost" to="/contact">
            Contact
          </Link>
        </Reveal>
      </section>

      <section className="section wrap" id="work">
        <div className="work-header">
          <Reveal className="eyebrow">Work</Reveal>
          <RevealText text="Five projects" as="h2" />
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <Link className="project-row" to={`/work/${project.slug}`}>
                <span className="index">{project.number}</span>
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  className="thumb"
                />
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.oneLiner}</p>
                </div>
                <span className="view">View</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="contact-grid">
          <div>
            <Reveal className="eyebrow">Contact</Reveal>
            <RevealText text="Want to talk about a project?" as="h2" />
            <Reveal className="lede" delay={180}>
              Email: hello@anujsiddhpura.com
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:hello@anujsiddhpura.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" required />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          required
          placeholder="Write a short message"
          rows={compact ? 3 : 6}
        />
      </label>
      <button className="btn btn-fill" type="submit">
        Send
      </button>
    </form>
  );
}
