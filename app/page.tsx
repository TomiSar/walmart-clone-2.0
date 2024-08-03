import GridOption from '@/components/GridOption';

export default function Home() {
  return (
    <main className=''>
      <div className='grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6'>
        <GridOption
          className='bg-pink-200 h-full md:h-32'
          title='Sweet Gifts for less'
          image='https://links.papareact.com/1dy'
        />
        <GridOption
          className='bg-blue-100 col-span-2 row-span-2'
          title='Shop Wardrobe'
          image='https://links.papareact.com/8ko'
        />
        <GridOption
          className='bg-pink-200 row-span-2'
          title='Shop Home'
          image='https://links.papareact.com/szu'
        />
        <GridOption
          className='bg-yellow-100 h-64'
          title='Shop Electronics'
          image='https://links.papareact.com/n7r'
        />
        <GridOption
          className='bg-green-100 h-64 col-span-2'
          title='Shop Toys'
          image='https://links.papareact.com/pj2'
        />
        <GridOption
          className='bg-red-100 col-span-2 row-span-2'
          title='All You Need For Match Day'
          image='https://links.papareact.com/m8e'
        />
        <GridOption
          className='bg-orange-100 h-64'
          title='Shop Gadgets'
          image='https://links.papareact.com/gs1'
        />
        <GridOption
          className='bg-blue-100 h-64'
          title='Shop Beauty'
          image='https://links.papareact.com/4y0'
        />
        <GridOption
          className='bg-blue-100 h-64'
          title='Shop Sports'
          image='https://links.papareact.com/sq2'
        />
        <GridOption
          className='bg-rose-100 h-64'
          title='Enjoy Free Shipping'
          image='https://links.papareact.com/9fh'
        />
        <GridOption
          className='bg-orange-200 h-64 col-span-2'
          title='Flash Deals'
          image='https://links.papareact.com/qx7'
        />
      </div>
    </main>
  );
}
