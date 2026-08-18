import { Container } from "@/components/ui/Container";
import { Logo, type LogoVariant } from "@/components/ui/Logo";
import type { Dictionary } from "@/dictionaries";

// Support links point at the same WhatsApp number for every page, but the
// pre-filled message should say who's texting -- a coach's or nutritionist's
// question routes differently than an athlete's, and support can't tell
// otherwise which persona/locale a message came from. Athlete (logoVariant
// "default") keeps whatever message the dictionary itself provides (see
// footer.groups Support links in each locale file); only coach/nutri get
// overridden here, since Footer is the one component shared by all three
// pages and the dictionary has no per-persona section to hold this in.
const WHATSAPP_NUMBER = "5511998857785";
const PERSONA_MESSAGES: Record<
  "coach" | "nutri",
  Record<string, { help: string; contact: string }>
> = {
  coach: {
    en: { help: "Hi! I'm a Coach and need help with PulseUp.", contact: "Hi! I'm a Coach and have a question about PulseUp." },
    pt: { help: "Oi! Sou Coach e preciso de ajuda com o PulseUp.", contact: "Oi! Sou Coach e tenho uma dúvida sobre o PulseUp." },
    es: { help: "¡Hola! Soy Coach y necesito ayuda con PulseUp.", contact: "¡Hola! Soy Coach y tengo una pregunta sobre PulseUp." },
  },
  nutri: {
    en: { help: "Hi! I'm a Nutritionist and need help with PulseUp.", contact: "Hi! I'm a Nutritionist and have a question about PulseUp." },
    pt: { help: "Oi! Sou Nutricionista e preciso de ajuda com o PulseUp.", contact: "Oi! Sou Nutricionista e tenho uma dúvida sobre o PulseUp." },
    es: { help: "¡Hola! Soy Nutricionista y necesito ayuda con PulseUp.", contact: "¡Hola! Soy Nutricionista y tengo una pregunta sobre PulseUp." },
  },
};

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Only the two WhatsApp links (Help Center / Contact) get overridden --
// identified by their href rather than group position or label text, since
// both of those vary per locale while the underlying number doesn't. First
// WhatsApp link in a group is treated as "help", the rest as "contact".
function resolveHref(href: string, whatsappLinkIndex: number, logoVariant: LogoVariant, locale: string) {
  if (!href.includes("wa.me") || (logoVariant !== "coach" && logoVariant !== "nutri")) return href;
  const messages = PERSONA_MESSAGES[logoVariant][locale] ?? PERSONA_MESSAGES[logoVariant].pt;
  return whatsappHref(whatsappLinkIndex === 0 ? messages.help : messages.contact);
}

export function Footer({
  dict,
  logoVariant = "default",
  locale = "pt",
}: {
  dict: Dictionary["footer"];
  logoVariant?: LogoVariant;
  locale?: string;
}) {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant={logoVariant} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {dict.tagline}
            </p>
          </div>

          {(() => {
            let whatsappLinkCount = 0;
            return dict.groups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-text-tertiary">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  const href = link.href.includes("wa.me")
                    ? resolveHref(link.href, whatsappLinkCount++, logoVariant, locale)
                    : link.href;
                  return (
                    <li key={link.label}>
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="text-sm text-text-secondary transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            ));
          })()}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <span className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} PulseUp. {dict.rights}
          </span>
          <span className="text-xs text-text-tertiary">{dict.madeFor}</span>
        </div>
      </Container>
    </footer>
  );
}
