import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Home } from "./components/pages/Home";
import { ErrorPage } from "./components/pages/ErrorPage";
import { QuoteForm } from "./components/quotes/QuoteForm";
import { QuoteList, Quotes } from "./components/quotes/QuoteList";
import { store } from "./store/store";
import { HighlightedQuote } from "./components/quotes/HighlightedQuote";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="all-quotes" element={<Quotes />}>
              <Route index element={<QuoteList />} />
              <Route path=":quoteAuthor" element={<HighlightedQuote />} />
            </Route>
            <Route path="add-quote" element={<QuoteForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
