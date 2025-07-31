// import { Link } from 'react-router-dom';

// export default function ScrollLink({ id, children, className, onClick }) {
//   const handleClick = () => {
//     const section = document.getElementById(id);
//     if (section) {
//       const navbarHeight = document.querySelector('.navBar')?.offsetHeight || 80;
//       const yOffset = -navbarHeight;
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'auto' });
//     } else {
//       console.error(`Section with id "${id}" not found`);
//     }
//     if (onClick) onClick();
//   };

//   return (
//     <Link
//       to={`#${id}`}
//       className={className}
//       onClick={(e) => {
//         e.preventDefault();
//         handleClick();
//       }}
//     >
//       {children}
//     </Link>
//   );
// }

import { Link } from 'react-router-dom';

export default function ScrollLink({ id, children, className, onClick, behavior = 'auto' }) {
  const handleClick = () => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector('.navBar')?.offsetHeight || 80;
      const yOffset = -navbarHeight + 60;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior });
    } else {
      console.error(`Section with id "${id}" not found`);
    }
    if (onClick) onClick();
  };

  return (
    <Link
      to={`#${id}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      aria-label={`Scroll to ${children}`}
    >
      {children}
    </Link>
  );
}