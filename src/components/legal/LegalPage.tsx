import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-full bg-grid py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>

        <h1 className="mt-10 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-text-tertiary">Last updated: {updated}</p>

        <div
          className="
            prose-legal mt-10 space-y-6 text-sm leading-relaxed text-text-secondary
            [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-text-primary
            [&_li]:ml-5 [&_li]:list-disc
            [&_a]:text-primary-light [&_a]:underline [&_a]:underline-offset-2
          "
        >
          {children}
        </div>
      </Container>
    </main>
  );
}
