import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import HomePage from './components/HomePage/HomePage';
import BookInfoPage from './components/BookInfoPage/BookInfoPage';
import ReadingPage from './components/ReadingPage/ReadingPage';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<HomePage />} />
          <Route path="book/:bookId" element={<BookInfoPage />} />
          <Route path="chapter/:chapterId" element={<ReadingPage />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
