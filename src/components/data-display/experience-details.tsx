import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';
import Tag from './tag';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  company,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  technologies,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="relative max-md:order-1 md:w-1/4 group w-16 h-16">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="rounded w-16 h-16 transition-opacity duration-300 group-hover:opacity-50"
        />
        <span className="rounded w-16 h-16 absolute inset-0 flex items-center justify-center text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75">
          {company}
        </span>
      </div>
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {position}
        </Typography>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
      </div>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
              ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
              : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
