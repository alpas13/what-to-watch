import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";

const PageContent = React.memo(function PageContent(props) {
  let {children} = props;
  const isMain = React.Children.count(children) > 1;

  return (
    <Fragment>
      <section className={`catalog${isMain ? `` : ` catalog--like-this`}`}>
        {isMain &&
        <h2 className="catalog__title visually-hidden">Catalog</h2>}
        {isMain || <h2 className="catalog__title">More like this</h2>}
        {children}
      </section>
      <Footer/>
    </Fragment>
  );
});

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
};
