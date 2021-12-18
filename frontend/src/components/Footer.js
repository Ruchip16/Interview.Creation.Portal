import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    
    <footer className="mt-5 mx-auto text-center">
      <p>Built with love by Ruchi</p>
      <ul className="flex w-full justify-center">
        <li className="m-2 cursor-pointer">
          <a href="https://github.com/Ruchip16" target="_blank">
            <FontAwesomeIcon className="text-purple-500 h-6" icon={faGithub} />
          </a>
        </li>
        <li className="m-2 cursor-pointer">
          <a href="https://twitter.com/Ruchicodess" target="_blank">
            <FontAwesomeIcon className="text-purple-500 h-6" icon={faTwitter} />
          </a>
        </li>
        <li className="m-2 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/ruchi-pakhle-a0a5311b0/"
            target="_blank"
          >
            <FontAwesomeIcon className="text-purple-500 h-6" icon={faLinkedin} />
          </a>
        </li>
        
      </ul>
    </footer>
  );
};

export default Footer;
