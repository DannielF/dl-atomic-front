import React from 'react';
import { Link } from 'react-router-dom';

export const ListAnchor = ({
  linkName,
  linkRoute
}: {
  linkName: string;
  linkRoute: string;
}) => {
  const classCssLink = `nav-link`;

  return (
    <li className="nav-item" role="presentation">
      <Link
        className={classCssLink}
        aria-current="true"
        to={linkRoute}
        id={`${linkName}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${linkName}`}
        role="tab"
      >
        {linkName}
      </Link>
    </li>
  );
};
