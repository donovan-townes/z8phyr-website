import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ArtistHeader, ArtistFooter } from "../artist-shell";
import { InquiryForm } from "../inquiry-form";
import { shop } from "../integrations";
import "../artist.css";
import "../artist-draft3.css";
import "../integrations.css";

export const metadata: Metadata = {
  title: "Work With Me — Z8phyR",
  description:
    "Talk to Z8phyR about official remixes, production, composition, collaborations, custom music, and business inquiries.",
};

export default function WorkWithMe() {
  return (
    <div className="zpage zdraft3 zwork-page">
      <a className="skip" href="#z-main">
        Skip to content
      </a>
      <ArtistHeader page="work" />
      <main id="z-main">
        <section className="zwork-hero">
          <span className="zkicker">ONE TUNE AT A TIME. TOGETHER.</span>
          <h1>
            Work <em>with me.</em>
          </h1>
          <h2>Have a project in mind?</h2>
          <p>
            I’m available for selected remix, production, composition,
            collaboration, and other music-related projects.
          </p>
          <p>
            Whether you’re looking for an official remix, want to build a track
            together, need original music for a project, or simply want to
            discuss an idea, this is the best place to start.
          </p>
          <a className="zbutton" href="#project-inquiry">
            Start a project <ArrowDown size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="zwork-services" aria-labelledby="services-heading">
          <div className="zsection-head">
            <div>
              <span className="zkicker">FIND THE RIGHT FIT</span>
              <h2 id="services-heading">Ways we can work together</h2>
            </div>
          </div>
          <div className="zservice-grid">
            <article id="remixing">
              <span className="zkicker">01 / REMIXING</span>
              <h3>Official remixes</h3>
              <p>Looking for a Z8phyR remix of your track?</p>
              <p>
                Send me the original track, a little information about the
                release, your timeline, and what you’re looking for creatively.
              </p>
              <p className="zservice-price">
                <span className="zservice-label">COMMISSIONED REMIXES</span>
                <span className="zservice-amount">FROM $500</span>
              </p>
              <a className="ztext-link" href="#project-inquiry">
                Request a quote ↓
              </a>
            </article>
            <article id="production">
              <span className="zkicker">02 / PRODUCTION & COMPOSITION</span>
              <h3>From an idea to a track</h3>
              <p>
                I’m available for selected original production and composition
                projects, including electronic music, melodic material,
                arrangements, alternate versions, and custom musical ideas.
              </p>
              <p className="zservice-price">
                <span className="zservice-label">
                  FULL PRODUCTION & COMPOSITION
                </span>
                <span className="zservice-amount">FROM $750</span>
              </p>
              <a className="ztext-link" href="#project-inquiry">
                Request a quote ↓
              </a>
            </article>
            <article id="collaborations">
              <span className="zkicker">03 / COLLABORATIONS</span>
              <h3>A shared creative spark</h3>
              <p>
                Artist-to-artist collaborations are handled differently from
                commissioned work.
              </p>
              <p>
                If you have a song, concept, vocal, instrumental, or other idea
                you think we’d work well on together, send it over.
              </p>
              <p>
                There doesn’t necessarily need to be a budget for a genuine
                collaboration, but there does need to be a strong creative fit.
              </p>
              <p className="zservice-price zservice-note-only">
                <span className="zservice-label">
                  SELECTED ON A<br />
                  PROJECT-BY-PROJECT BASIS
                </span>
              </p>
              <a className="ztext-link" href="#project-inquiry">
                Tell me about your idea ↓
              </a>
            </article>
            <article id="custom-music">
              <span className="zkicker">
                04 / CUSTOM MUSIC & OTHER PROJECTS
              </span>
              <h3>Tell me what you’re building</h3>
              <p>
                Need music for a video, stream, game, creative project, release,
                or something unusual?
              </p>
              <p>
                If the project falls outside one of the categories above, select{" "}
                <strong>Other / General Inquiry</strong> and describe what you
                have in mind. General and business inquiries are welcome here,
                too.
              </p>
              <p className="zservice-price">
                <span className="zservice-label">CUSTOM MUSIC</span>
                <span className="zservice-amount">FROM $500</span>
              </p>
              <a className="ztext-link" href="#project-inquiry">
                Tell me about your project ↓
              </a>
            </article>
          </div>
        </section>

        <aside
          className="zwork-shop"
          aria-labelledby="digital-products-heading"
        >
          <div>
            <span className="zkicker">LOOKING FOR DOWNLOADS?</span>
            <h2 id="digital-products-heading">Digital products</h2>
            <p>
              For project files and available production resources, visit the
              Z8phyR Shop.
            </p>
          </div>
          <a className="zbutton" href={shop.url}>
            Shop digital products <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </aside>

        <section
          className="zwork-inquiry"
          id="project-inquiry"
          aria-labelledby="inquiry-heading"
        >
          <span className="zkicker">LET’S START WITH YOUR IDEA</span>
          <h2 id="inquiry-heading">Tell me about your project</h2>
          <p>
            The more information you provide, the easier it is for me to
            understand whether I’m the right fit and what the project would
            involve.
          </p>
          <p>
            Submitting an inquiry doesn’t commit either of us to the project.
            Once I’ve reviewed your request, I’ll follow up with any questions,
            availability, pricing, and next steps.
          </p>
          <InquiryForm />
        </section>
      </main>
      <ArtistFooter />
    </div>
  );
}
