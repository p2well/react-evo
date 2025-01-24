import React from 'react';

interface AppTitleProps {
  title: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ title }) => {
  return (
    <div className="font-medium text-lg text-nowrap px-4 py-2">{title}</div>
  );
};

export default AppTitle;
