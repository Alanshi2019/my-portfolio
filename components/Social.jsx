import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
  {
    icon: <FaLinkedin />, path: "https://www.linkedin.com/in/wai-shi/y"
  },
  {
    icon: <FaGithub />, path: "https://github.com/Alanshi2019"
  },
  {
    icon: <FaYoutube />, path: ""
  },
  {
    icon: <FaTwitter />, path: ""
  },
]

const Social = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}>
    {socials.map((social, index) => (<Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>))}
  </div>
}

export default Social;