import React from 'react';

export const CardBody = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  );
};
