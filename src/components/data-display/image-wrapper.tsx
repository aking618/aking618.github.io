'use client';

import { useSyncExternalStore } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';

type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

const ImageWrapper = ({
  srcForDarkMode,
  src,
  alt,
  ...props
}: ImageWrapperProps) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const { theme } = useTheme();

  if (!mounted) {
    return null;
  }

  const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  return <Image src={finalSrc!} alt={alt} {...props} />;
};

export default ImageWrapper;
