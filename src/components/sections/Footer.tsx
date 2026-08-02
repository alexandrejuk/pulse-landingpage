import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import type { Dictionary } from "@/dictionaries";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {dict.tagline}
            </p>
          </div>

          {dict.groups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-text-tertiary">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <span className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Pulse. {dict.rights}
          </span>
          <span className="text-xs text-text-tertiary">{dict.madeFor}</span>
        </div>
      </Container>
    </footer>
  );
}
