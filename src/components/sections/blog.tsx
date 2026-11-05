import React from 'react';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Card from '@/components/layout/card';
import { ExternalLink } from 'lucide-react';
import { EXTERNAL_LINKS, POSTS } from '@/lib/data';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
};

const MediumPosts: React.FC = () => {
  return (
    <Container className="bg-gray-50" id='blog'>
    <div className="flex flex-col items-center gap-4">
      <div className="self-center">
        <Tag label="Blog" />
      </div>
      <Typography variant="subtitle" className="max-w-xl text-center">
        Here are some of my latest blog posts from Medium.
      </Typography>
    </div>

    {
        POSTS.map((post, index) =>  (
            <Card key={index} className="mx-auto flex w-full max-w-6xl flex-col">
                <div className="flex flex-col gap-6 p-8 lg:p-12">
                    <Typography variant="subtitle" className="font-semibold text-gray-900">
                        {post.title}
                    </Typography>
                    <Typography variant="body3">
                        {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                            new Date(post.date)
                        )}
                    </Typography>
                    <Typography>{post.description}</Typography>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <Tag key={index} label={tag} />
                        ))}
                    </div>
                    <Link
                        href={post.link}
                        noCustomization
                        className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
                        externalLink
                    >
                        <ExternalLink />
                    </Link>
                </div>
            </Card>
        ))
    }

    {/* Check out other articles here */}
    <div className="flex justify-center mt-4">
      <a
        href={EXTERNAL_LINKS.MEDIUM}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:underline"
      >
        Check out other articles here
      </a>
    </div>

  </Container>
  );
};

export default MediumPosts;
