import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string;
  title: string;
  image?: string;
};

function GridOption({ className, title, image }: Props) {
  return (
    <Link
      className={cn('grid-option relative', className)}
      href={{
        pathname: '/search',
        query: { q: title },
      }}
    >
      <h2 className='text-xl font-bold'>{title}</h2>
      {image && (
        <Image
          className='object-cover opacity-20 rounded-md'
          src={image}
          alt={title}
          layout='fill'
        />
      )}
    </Link>
  );
}

export default GridOption;
