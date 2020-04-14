import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus, Pages} from "../../const.js";

const CardHeader = React.memo(function CardHeader(props) {
  const {currentPage, authorizationStatus} = props;

  return (
    <Fragment>
      {currentPage === Pages.MY_LIST || <div className="movie-card__bg">
        <img src={`img/bg-the-grand-budapest-hotel.jpg`} alt="The Grand Budapest Hotel"/>
      </div>}

      {currentPage === Pages.MY_LIST || < h1 className="visually-hidden"> WTW </h1>}

      <header className={`page-header ${(currentPage === Pages.MY_LIST || currentPage === Pages.LOGIN_PAGE) ? `user-page__head` : `movie-card__head`}`}>
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        {currentPage === Pages.MY_LIST && <h1 className="page-title user-page__title">My list</h1>}

        {currentPage === Pages.ADD_REVIEW && <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href={`movie-page.html`} className="breadcrumbs__link">The
                Grand Budapest Hotel
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>}

        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.AUTH && <div className="user-block__avatar">
            <img src={`img/avatar.jpg`} alt="User avatar" width="63" height="63"/>
          </div>}
          {authorizationStatus === AuthorizationStatus.NO_AUTH && <a href={`sign-in.html`} className="user-block__link">Sign in</a>}
        </div>
      </header>
    </Fragment>
  );
});

CardHeader.propTypes = {
  currentPage: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default CardHeader;
