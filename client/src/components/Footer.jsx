import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsGithub, BsDribbble, BsX} from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blog</span>
                    Sphere
                    </Link> 
                </div>
                <div className='grid grid-clos-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'> 
                    <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='https://google.com'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            Google
                        </Footer.Link>
                        <Footer.Link
                            href='https://youtube.com'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            Youtube
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='https://github.com'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link
                            href='#'
                        >
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='/privacy'
                        >
                            Privacy
                        </Footer.Link>
                        <Footer.Link
                            href='/terms'
                        >
                            Terms and Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="BlogSphere Group" year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsX}/>
                    <Footer.Icon href='https://github.com/Rishabh10001/blogish' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
