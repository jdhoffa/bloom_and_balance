import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Wordmark } from "@/components/Wordmark";
import { contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1160px] px-5 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div>
            <Wordmark />
            <address className="mt-6 not-italic text-foreground/85 leading-relaxed">
              Hamsa Studio, Hildastraße 17
              <br />
              79102 Freiburg im Breisgau
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Opening Times</h3>
            <p className="mt-4 text-foreground/85">Thursday &amp; Saturday</p>
            <p className="mt-1 text-foreground/85">by appointment</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                >
                  <Mail className="size-4" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                >
                  <WhatsAppIcon className="size-4 text-[#25D366]" />
                  {contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                >
                  <Instagram className="size-4" aria-hidden />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link to="/impressum" className="underline underline-offset-4">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="underline underline-offset-4">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="underline underline-offset-4">
                  AGB
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Bloom &amp; Balance
          </p>
        </div>
      </div>
    </footer>
  );
}
