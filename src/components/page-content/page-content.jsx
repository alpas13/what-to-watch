import React from "react";
import PropTypes from "prop-types";

const PageContent = React.memo(function PageContent(props) {
  const {children} = props;
  const isMain = React.Children.count(children) > 1;
  return (
      <div className="page-content">
        <section className="catalog">
          {isMain && <h2 className="catalog__title visually-hidden">Catalog</h2>}
          {isMain || <h2 className="catalog__title">More like this</h2>}
          {children}
        </section>
      </div>
  );
});

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};
