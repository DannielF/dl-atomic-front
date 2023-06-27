import { ReactElement } from 'react';

/**
 * @description Card body component
 * @param {string} title - Card title
 * @returns {ReactElement} React Element
 */
export const CardBody = ({
  title,
  text
}: {
  title: string;
  text: string;
}): ReactElement => {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  );
};
