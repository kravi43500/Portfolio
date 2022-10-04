import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubAlt} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

export const HeaderSocial = () => {
  return (
    <div className='header_socials'>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithubAlt/></a>
    <a href="http://dribble.com" target="_blank" rel="noopener noreferrer"><FiDribbble></FiDribbble></a>
    </div>
  )
}
