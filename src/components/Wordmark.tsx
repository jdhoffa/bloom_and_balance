export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-display text-2xl font-bold tracking-[0.02em] text-celadon md:text-[1.9rem]">
        Bloom &amp; Balance
      </span>
      <span className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-muted-foreground">
        Freiburg
      </span>
    </span>
  );
}
