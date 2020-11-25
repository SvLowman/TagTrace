import React from "react";
import PropTypes from "prop-types";
import { Button } from "../components/Button";

// import { Header } from "./Header";
// import "./page.css";

const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    {/* <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    /> */}

    <section>
      <h2>Hello World! 😁</h2>
    </section>
    <div>
      <Button
        primary
        size="medium"
        label="Button"
        onClick={() => (alert("It works!"), console.log("Beat it!"))}
      />
    </div>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};

export default Page;
