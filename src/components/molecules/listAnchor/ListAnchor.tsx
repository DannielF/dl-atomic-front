import React from 'react';
import { Link } from 'react-router-dom';

export const ListAnchor = ({
  linkName,
  linkRoute
}: {
  linkName: string;
  linkRoute: string;
}) => {
  const classCssLink = `nav-link btn btn-outline-warning`;

  return (
    <li className="nav-item" role="presentation">
      <Link
        className={classCssLink}
        aria-current="page"
        id={`${linkName}-tab`}
        to={linkRoute}
        aria-controls={linkName}
        role="tab"
      >
        {linkName}
      </Link>
    </li>
  );
};