import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import "react-quill/dist/quill.snow.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import StripeWrapper from "./PaymentHandler/components/StripeWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StripeWrapper> */}
    <BrowserRouter>
      {/* <Auth0Provider
    domain="dev-oklh8lhzjylydsvu.us.auth0.com"
    clientId="jGdVx3pXslhZx2XCuVeyGal11CV6DNYO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > */}
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
      {/* </Auth0Provider> */}
    </BrowserRouter>
    {/* </StripeWrapper> */}
  </React.StrictMode>
);

reportWebVitals();
