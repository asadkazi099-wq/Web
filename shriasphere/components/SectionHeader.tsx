export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
          <span className="font-en text-xs uppercase tracking-[0.2em] text-paper-500">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-bn text-balance text-3xl font-bold text-paper-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="font-bnBody mt-4 text-base leading-relaxed text-paper-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
