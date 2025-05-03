// import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About BlogSphere
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to My Blog! This platform is a personal space where I share my experiences, insights, and ideas on software development, programming, and the tech world. Whether you're just starting out or have years of experience, you'll find something here to spark your curiosity and help you grow as a developer.
            </p>

            <p>
            Explore Weekly Content on a wide range of topics including web development, backend systems, cloud technologies, and coding best practices. I’m constantly learning and experimenting with new tools and frameworks, and I enjoy documenting that journey through detailed tutorials, guides, and thought pieces.
            </p>

            <p>
            Join the Conversation! I believe that learning is better together. You’re encouraged to leave comments, ask questions, and engage in discussions with me and other readers. You can also like and reply to others’ comments to build a supportive and active developer community.

            </p>
          </div>
        </div>
        {/* <div className='mt-10'>
          <CallToAction />
        </div> */}
      </div>
    </div>
  );
}