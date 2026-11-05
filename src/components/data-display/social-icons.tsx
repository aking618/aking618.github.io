import { SOCIAL_LINKS } from '@/lib/data';
import IconButton from '@/components/general/icon-button';

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((socialLink) => (
        <IconButton key={socialLink.label} asChild>
          <a
            href={socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialLink.label}
          >
            <socialLink.icon />
          </a>
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
