'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://docs.google.com/document/d/1ye35twDQGGPfisEjDWwBdo9Untmg6VklW21X6slsgvY/edit?usp=sharing', '_blank')}>
      Download Resume
    </Button>
  );
};

export default DownloadCV;