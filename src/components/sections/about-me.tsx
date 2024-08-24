import Image from 'next/image';

import AyrenKingFullPose from '/public/images/AyrenKingHero.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[480px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AyrenKingFullPose}
              alt="Fullpose of Ayren"
              className="absolute z-10 h-[360px] w-[440px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] object-cover object-right"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-full border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I began my journey as a mobile developer in 2020 with Android. I later
            transitioned to Flutter and was convinced to give iOS development a try.
            Since then, I haven&apos;t looked back. I think I found my niche in
            the mobile development world.
          </Typography>
          <Typography>
            I enjoy experiencing new technologies and developing relationships with others!
            I love to learn and share my knowledge with others. I&apos;m always looking for
            opportunities to collaborate with others and grow my skillset.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            training for a triathlon, trophy hunting for PlayStation games, or
            listening to a good podcast or audiobook. You can follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.MEDIUM}
            >
              Medium
            </Link>{' '}
            where I attempt to write about my experiences and share my knowledge. You can also
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.S. in Computer Science from Oklahoma State University
              </Typography>
              <Typography component="li">iOS Boi</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid Runner</Typography>
              <Typography component="li">Aspiring Triathlete</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
