"use client"

import { LanguageSwitch } from "@/components/language-switch"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypewriterName } from "@/components/typewriter-name"
import { type Locale, translations } from "@/lib/i18n"

type Accent = "systems" | "agents" | "craft"

const accentText: Record<Accent, string> = {
  systems: "text-port-accent-systems",
  agents: "text-port-accent-agents",
  craft: "text-port-accent-craft",
}

const accentOrder: Accent[] = ["systems", "agents", "craft"]
const projectAccents: Accent[] = ["agents", "systems", "craft", "agents"]

function PortfolioContent({ locale }: { locale: Locale }) {
  const t = translations[locale]

  return (
    <div className="min-h-svh w-full bg-port-bg text-port-text-primary">
      <main className="mx-auto flex max-w-[960px] flex-col gap-14 px-5 pt-16 pb-14 md:gap-22 md:px-18 md:pt-24 md:pb-20">
        <section className="flex flex-col gap-5 md:gap-7">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-port-accent-systems" />
              <span className="font-mono text-[11px] text-port-text-tertiary tracking-[1px] md:text-xs">
                <span className="md:hidden">{t.statusShort}</span>
                <span className="hidden md:inline">{t.statusLong}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitch locale={locale} />
              <div className="h-3 w-px bg-port-divider" />
              <ThemeToggle />
            </div>
          </div>

          <TypewriterName
            text="Renaldo Mateus"
            className="font-bold font-display text-[58px] leading-[0.95] tracking-[-1.5px] md:text-[118px] md:tracking-[-3px]"
          />

          <div className="flex items-center gap-1.5 font-mono text-[13px] md:gap-2.5 md:text-sm">
            <span className="text-port-text-secondary">
              <span className="md:hidden">{t.roleShort}</span>
              <span className="hidden md:inline">{t.roleLong}</span>
            </span>
            <span className="font-semibold text-port-accent-systems">
              {t.categories.systems}
            </span>
            <span className="text-port-text-tertiary">·</span>
            <span className="font-semibold text-port-accent-agents">
              {t.categories.agents}
            </span>
            <span className="text-port-text-tertiary">·</span>
            <span className="font-semibold text-port-accent-craft">
              {t.categories.craft}
            </span>
          </div>

          <p className="w-full font-display text-[15px] text-port-text-secondary leading-[1.55] md:max-w-[560px] md:text-[17px]">
            {t.intro}
          </p>

          <p className="w-full font-mono text-[11px] text-port-text-tertiary tracking-[0.3px] md:text-xs">
            {t.stats}
          </p>
        </section>

        <section className="flex w-full flex-col gap-8 md:flex-row md:gap-6">
          {t.skills.map((skill, index) => (
            <div key={skill.title} className="flex w-full flex-col gap-3">
              <span
                className={`font-mono text-xs ${accentText[accentOrder[index] ?? "systems"]}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-bold font-display text-[22px]">
                {skill.title}
              </h2>
              <p className="font-display text-port-text-secondary text-sm leading-[1.5]">
                {skill.description}
              </p>
              <span className="font-mono text-[11px] text-port-text-tertiary tracking-[0.5px]">
                {skill.stack}
              </span>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <span className="font-mono text-port-text-tertiary text-xs tracking-[2px]">
            {t.selectedWorkKicker}
          </span>
          <div className="flex flex-col pt-3">
            {t.projects.map((project, index) => (
              <div
                key={project.title}
                className="flex w-full items-center gap-4 py-5 md:gap-7 md:py-7"
              >
                <span
                  className={`font-bold font-symbols text-[34px] tracking-[-1px] opacity-45 md:text-[44px] dark:opacity-[0.28] ${accentText[projectAccents[index] ?? "systems"]}`}
                >
                  {["♟", "♞", "♝", "♜"][index] ?? "♟"}
                </span>
                <div className="flex w-full flex-col gap-2">
                  <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <h3 className="font-bold font-display text-[17px] md:text-[19px]">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-port-text-tertiary">
                      {project.tag}
                    </span>
                  </div>
                  <p className="font-display text-port-text-secondary text-sm leading-[1.5]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <span className="font-mono text-port-text-tertiary text-xs tracking-[2px]">
            {t.writingKicker}
          </span>
          <div className="flex flex-col pt-3">
            {t.posts.map((post) => (
              <div
                key={post.title}
                className="flex w-full flex-col gap-1.5 border-port-divider border-b py-4 last:border-b-0 md:py-5"
              >
                <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="w-full font-bold font-display text-[15px] md:max-w-[600px] md:text-base">
                    {post.title}
                  </h3>
                  <span className="font-mono text-[11px] text-port-text-tertiary">
                    {post.date}
                  </span>
                </div>
                <p className="font-display text-port-text-secondary text-sm leading-[1.5]">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-4">
            <span className="font-mono text-port-accent-systems text-sm">
              →
            </span>
            <span className="font-mono text-port-accent-systems text-sm">
              {t.readAllPosts}
            </span>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <span className="font-mono text-port-text-tertiary text-xs tracking-[2px]">
            {t.timelineKicker}
          </span>
          <div className="flex w-full flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-2.5">
            {t.timeline.map((step, index) => (
              <div key={step.year} className="flex items-center gap-2.5">
                {index > 0 && (
                  <span className="hidden font-mono text-port-text-tertiary text-sm md:inline">
                    →
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-port-accent-systems text-xs">
                    {step.year}
                  </span>
                  <span
                    className={`font-display font-semibold text-[15px] ${index === t.timeline.length - 1 ? "text-port-text-primary" : "text-port-text-secondary"}`}
                  >
                    {step.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="w-full font-bold font-display text-[26px] leading-[1.15] tracking-[-1px] md:max-w-[640px] md:text-[34px]">
            {t.contactStatement}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:renaldodev@gmail.com"
              className="font-mono text-port-accent-systems text-sm hover:underline"
            >
              {t.contactLabels.email}
            </a>
            <span className="font-mono text-port-text-tertiary text-sm">·</span>
            <a
              href="https://linkedin.com/in/renaldodev"
              className="font-mono text-port-accent-agents text-sm hover:underline"
            >
              {t.contactLabels.linkedin}
            </a>
            <span className="font-mono text-port-text-tertiary text-sm">·</span>
            <a
              href="https://github.com/renaldodev"
              className="font-mono text-port-accent-craft text-sm hover:underline"
            >
              {t.contactLabels.github}
            </a>
          </div>
        </section>

        <footer className="flex w-full items-center justify-between pt-8">
          <span className="font-mono text-[11px] text-port-text-tertiary">
            © 2026 Renaldo Mateus
          </span>
          <span className="font-mono text-[11px] text-port-text-tertiary">
            {t.footerSignature}
          </span>
        </footer>
      </main>
    </div>
  )
}

export { PortfolioContent }
