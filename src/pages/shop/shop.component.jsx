import React from "react";
import "./shop.styles.scss";

import collectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/Collections-overview.component";

import { Route } from "react-router-dom";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={collectionPage} />
    </div>
  );
};

export default ShopPage;
