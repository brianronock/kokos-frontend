// src/components/ScrollLink.js
import { Link, useNavigate } from 'react-router-dom';
import { scrollToElement } from '../utilities/scrollToElement';

export default function ScrollLink({ id, children, className, onClick, behavior = 'auto' }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent full page reload
    navigate(`#${id}`); // Update hash via React Router
    scrollToElement(id, behavior); // Scroll to element
    if (onClick) onClick();
  };

  return (
    <Link
      to={`#${id}`}
      className={className}
      onClick={handleClick}
      aria-label={`Scroll to ${children}`}
    >
      {children}
    </Link>
  );
}