import React from 'react';
import { Link } from 'react-router-dom';

export const ListAnchor = ({
  linkName,
  linkRoute
}: {
  linkName: string;
  linkRoute: string;
}) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const classCssLink = `nav-link ${isActive ? 'active' : ''}`;

  return (
    <li className="nav-item">
      <Link
        className={classCssLink}
        aria-current="true"
        to={linkRoute}
        onClick={handleClick}
      >
        {linkName}
      </Link>
    </li>
  );
};
