import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Home } from "./components/pages/Home";
import { ErrorPage } from "./components/pages/ErrorPage";
import { QuoteForm } from "./components/quotes/QuoteForm";
import { QuoteList } from "./components/quotes/QuoteList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="all-quotes" element={<QuoteList />} />
          <Route path="add-quote" element={<QuoteForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
