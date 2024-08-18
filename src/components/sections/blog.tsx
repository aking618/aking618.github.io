'use client';

import React, { useState, useEffect } from 'react';
import { MediumPost } from '@/lib/types';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Card from '@/components/layout/card';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { mergeClasses } from '@/lib/utils';

const MediumPosts: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://mediumpostsapi.vercel.app/api/ayrenking');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let posts = data.dataMedium.slice(0, 3) as MediumPost[];
        // format image urls - keep final part of the url
        // example : "https://cdn-images-1.medium.com/max/1024/0*epPqK60N0RWD6h68"
        // result : "https://cdn-images-1.medium.com/v2/0*epPqK60N0RWD6h68"
        posts = posts.map((post) => ({
          ...post,
          image: post.image.replace('max/1024', 'v2'),
        }));
        
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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

    {/* Place details here */}
    {/* placeholder */}
    {
        posts.map((post, index) =>  (
            <Card key={index} className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
                <div className={
                    mergeClasses(
                        'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
                        index % 2 === 0
                            ? 'md:rounded-l-xl md:border-r'
                            : 'md:order-last md:rounded-r-xl md:border-l'
                    )
                }
                >
                    <Link noCustomization href={post.link} externalLink>
                        <Image
                            src={post.image}
                            width={1024}
                            height={512}
                            alt={`${post.title} preview`}
                            className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                            style={{ objectFit: 'cover' }}
                        />
                    </Link>
                </div>
                <div className={
                    mergeClasses(
                        'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
                        index % 2 === 0 ? '' : 'md:order-first'
                    )
                }
                >
                    <Typography variant="subtitle" className="font-semibold text-gray-900">
                        {post.title}
                    </Typography>
                    <Typography>
                        {/* The periods have been removed. If an uppercase letter follows a lowercase letter, add a period.
                            Ignore 'iOS'. Remove <strong> tags */}
                        {
                        post.description
                            .replace(/\.|([a-z])([A-Z])/g, '$1. $2')
                            .replace(/<strong>|<\/strong>/g, '')
                            .replace(/i. OS/g, 'iOS')
                            .substring(0, 200)
                            + (post.description.length > 200 ? '...' : '')
                        }

                    </Typography>
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
        href="https://ayrenking.medium.com"
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
