import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import {
  CERTIFICATIONS,
  EXPERIENCES,
  PROFILE,
  PROJECTS,
  STATS,
  TECH_GROUPS,
} from "@/data/portfolio";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-[#E5E2DC] py-12 md:py-16">
      <FadeIn>
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#52525B]">
          {title}
        </h2>
        {children}
      </FadeIn>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <FadeIn>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7">
              <Image
                src="/avatar.jpg"
                alt={PROFILE.name}
                width={88}
                height={88}
                priority
                className="h-20 w-20 shrink-0 rounded-full border border-[#E5E2DC] object-cover shadow-xs sm:h-[88px] sm:w-[88px]"
              />

              <div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#52525B]">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-emerald-600"
                    />
                    <span>Available for remote work</span>
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <MapPin className="h-3.5 w-3.5 text-[#0F766E]" />
                    <span>{PROFILE.location}</span>
                  </span>
                </div>

                <h1 className="mt-2.5 text-4xl font-bold tracking-tight text-[#18181B] md:text-5xl">
                  {PROFILE.name}
                </h1>

                <p className="mt-1.5 text-lg font-medium text-[#0F766E] md:text-xl">
                  {PROFILE.role}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#52525B] md:text-lg">
              {PROFILE.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={PROFILE.resumePath}
                download="Edwan_Zainur_Amin_DevOps_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F766E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#115E59]"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-[#E5E2DC] bg-[#FDFCFA] px-5 py-2.5 text-sm font-medium text-[#18181B] transition-colors hover:border-[#D4CFC6] hover:bg-[#F3EFE6]"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#52525B]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#18181B]"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#18181B]"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#18181B]"
              >
                <Mail className="h-4 w-4" />
                <span>{PROFILE.email}</span>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="space-y-4 md:col-span-7">
              <p className="text-base leading-relaxed text-[#18181B]">
                {PROFILE.summary}
              </p>
              <p className="text-sm text-[#52525B]">
                <span className="font-medium text-[#18181B]">
                  {PROFILE.education.institution}
                </span>{" "}
                — {PROFILE.education.degree} ({PROFILE.education.meta})
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:col-span-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[#E5E2DC] bg-[#FDFCFA] p-4"
                >
                  <div className="font-mono text-xl font-semibold text-[#18181B]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-[#52525B]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="relative space-y-8 border-l border-[#E5E2DC] pl-6">
            {EXPERIENCES.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#0F766E] bg-[#F7F5F0]"
                />
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-base font-semibold text-[#18181B]">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-[#0F766E]">
                      {exp.role}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-[#52525B]">
                    {exp.period} · {exp.location}
                  </p>
                </div>

                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-[#52525B]">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#A1A1AA]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section id="stack" title="Tech Stack">
          <div className="grid gap-6 sm:grid-cols-2">
            {TECH_GROUPS.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-[#E5E2DC] bg-[#FDFCFA] p-5"
              >
                <h3 className="text-sm font-semibold text-[#18181B]">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#E5E2DC] bg-[#F7F5F0] px-2.5 py-1 font-mono text-xs text-[#18181B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between rounded-lg border border-[#E5E2DC] bg-[#FDFCFA] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4CFC6] hover:shadow-sm"
              >
                <div>
                  <h3 className="text-base font-semibold text-[#18181B]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52525B]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-[#F0EDE6] px-2 py-0.5 font-mono text-xs text-[#3F3F46]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F766E] transition-colors hover:text-[#115E59]"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" title="Certifications">
          <div className="divide-y divide-[#E5E2DC] rounded-lg border border-[#E5E2DC] bg-[#FDFCFA]">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col justify-between gap-2 px-5 py-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                  <div>
                    <p className="text-sm font-medium text-[#18181B]">
                      {cert.name}{" "}
                      <span className="font-mono text-xs text-[#52525B]">
                        ({cert.shortName})
                      </span>
                    </p>
                    <p className="text-xs text-[#52525B]">
                      {cert.issuer} · {cert.issued}
                    </p>
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 self-start text-xs font-medium text-[#0F766E] transition-colors hover:text-[#115E59] sm:self-center"
                >
                  <span>Verify</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-lg border border-[#E5E2DC] bg-[#FDFCFA] p-6 md:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-[#18181B]">
              Let&apos;s work together.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#52525B]">
              Available for remote DevOps, cloud infrastructure, CI/CD, and Linux
              system administration work worldwide (UTC+7 with flexible overlap).
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-[#18181B]">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#0F766E]"
                >
                  <Mail className="h-4 w-4 text-[#52525B]" />
                  <span>{PROFILE.email}</span>
                </a>
                <CopyEmailButton email={PROFILE.email} />
              </div>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-[#0F766E]"
              >
                <LinkedInIcon className="h-4 w-4 text-[#52525B]" />
                <span>{PROFILE.linkedinHandle}</span>
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-[#0F766E]"
              >
                <GitHubIcon className="h-4 w-4 text-[#52525B]" />
                <span>{PROFILE.githubHandle}</span>
              </a>
            </div>

            <div className="mt-6">
              <a
                href={PROFILE.resumePath}
                download="Edwan_Zainur_Amin_DevOps_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#115E59]"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-[#E5E2DC] py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-6 text-xs text-[#52525B] sm:flex-row">
          <span>© 2026 {PROFILE.name}</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
