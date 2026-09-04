import { BOOKING_URL } from "@/data/site";

export function BookButton({
  children = "Book Your Session",
  size = "md",
}: {
  children?: React.ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl bg-primary font-medium text-primary-foreground shadow-sm transition hover:brightness-95 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
        size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-base"
      }`}
    >
      {children}
    </a>
  );
}
