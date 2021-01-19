import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import MetaTags from "react-meta-tags";

const HomePage = () => {
  return (
    <div className="homepage">
      <MetaTags>
        <title>Home page</title>
        <meta
          name="description"
          content="a shopping website created by Ali Bayatpour."
        />
        <meta property="og:title" content="Online Shopping" />
        <meta property="og:image" content="../../assets/og.jpg" />
      </MetaTags>
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
