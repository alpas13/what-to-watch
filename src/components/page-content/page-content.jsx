import React from "react";
import PropTypes from "prop-types";

const PageContent = React.memo(function PageContent(props) {
  const {children} = props;
  const childrenCount = React.Children.count(children);
  const isMain = childrenCount > 2;
  return (
      <div className="page-content">
        <section className="catalog">
          {isMain && <h2 className="catalog__title visually-hidden">Catalog</h2>}
          {isMain || <h2 className="catalog__title">More like this</h2>}
          {React.Children.map(children, (node, index) => {
            return isMain && index !== children.length -1 ? node : ``;
          })}
        </section>
        {isMain ? children[children.length -1] : ``}
      </div>
  );
});

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};
