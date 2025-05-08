import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice.js';
import { signoutSuccess } from '../redux/user/userSlice.js';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="relative z-10">
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Blog
          </span>
          Sphere
        </Link>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <div className="flex flex-col items-center ">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
              {/* {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} */}
            </span>
            <Button
              className="w-12 h-10 hidden sm:inline items-center gap-2"
              color="gray"
              pill
              onClick={() => {
                dispatch(toggleTheme());
              }}
            >
              {theme === 'light' ? (
                <FaMoon className="text-gray-700" />
              ) : (
                <FaSun className="text-yellow-400" />
              )}
            </Button>
          </div>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="flex flex-col items-center gap-1">
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                    className="border-2 border-gray-500 dark:border-gray-300 shadow-md rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Profile
                  </span>
                </div>
              }
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg"
            >
              <Dropdown.Header className="py-4 px-4 bg-gray-100 dark:bg-gray-700 rounded-t-lg">
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  @{currentUser.username}
                </span>
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  Profile
                </Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={handleSignout}
                className="hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-400 rounded-lg"
              >
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button
                gradientDuoTone="purpleToBlue"
                className="px-4 py-2 font-semibold text-sm rounded-full"
              >
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to="/about">About Us</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to="/create-post">Create Post</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

