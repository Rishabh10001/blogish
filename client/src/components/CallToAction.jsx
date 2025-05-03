import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Want to see fun and engaging
          projects?
        </h2>
        <p className='text-gray-500 my-2'>
          Check our the git Repo
        </p>
        <a
          href='https://github.com/Rishabh10001'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            gradientDuoTone='purpleToPink'
            className='rounded-tl-xl rounded-bl-none rounded-br-xl w-full'
          >
            BlogShere
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img src='https://images.app.goo.gl/oAGSjWWLgXoEhRdF7' />
      </div>
    </div>
  );
}