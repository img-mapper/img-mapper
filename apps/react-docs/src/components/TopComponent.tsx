import type { JSX, ReactNode } from 'react';

type TopComponentElement = (title: string, content: ReactNode) => JSX.Element;

const TopComponent: TopComponentElement = (title, content) => (
  <div className="top_container">
    <h1 className="title">{title}</h1>
    <div className="top_content">{content}</div>
  </div>
);

export default TopComponent;
