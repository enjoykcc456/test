import React from "react";

const HomePage = () => {
  const content: any = [];

  for (let i = 0; i < 50; i++) {
    content.push(<h1 key={i}>Hellooooo</h1>);
  }

  return (
    <div>
      Home Page
      {content}
    </div>
  );
};

export default HomePage;
