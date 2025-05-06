import { Button } from 'flowbite-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// import '../Header.css';

export default function CallToAction() {
  return (
    <div className="scroll-container">
      <motion.div
        className="flex border border-teal-500 p-3 justify-center items-center flex-col sm:flex-row text-center"        
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 3, ease: 'easeOut' }} // Animation timing
        whileInView={{ scale: 1.1 }} // Slight zoom effect when in view
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the div is in view
      >
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">Want to see fun and engaging projects?</h2>
          <p className="text-gray-500 my-2">Check out the git Repo</p>
          <a
            href="https://github.com/Rishabh10001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded w-60 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4">
              BlogSphere 
            </button>
          </a>
        </div>
        <motion.div
          className="flex-1 p-7"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="https://media.istockphoto.com/id/1133924836/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=qgSlKBhrhnDy48pBa54Y1muEQP18E2pfCsW88qSNGro="
            alt="Programming Code"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}