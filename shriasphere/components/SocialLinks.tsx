import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const ICONS = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin, youtube: Youtube };

export default function SocialLinks({
  links,
  className = "",
}: {
  links: { platform: keyof typeof ICONS; url: string }[];
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => {
        const Icon = ICONS[link.platform];
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-paper-300 transition-all hover:border-crimson/60 hover:text-white hover:bg-crimson/10"
          >
            <Icon size={16} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
