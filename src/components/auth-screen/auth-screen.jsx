import React from "react";
import CardHeader from "../card-header/card-header.jsx";
import {Pages} from "../../const.js";
import Footer from "../footer/footer.jsx";

const AuthScreen = React.memo(function AuthScreen() {
  return (
    <div className="user-page">
      <CardHeader
        authorizationStatus={`NO_AUTH`}
        currentPage={Pages.LOGIN_PAGE}
      />
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email
                address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
});

export default AuthScreen;
