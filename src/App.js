import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookInfoPage from './components/BookInfoPage/BookInfoPage';
import ReadingPage from './components/ReadingPage/ReadingPage';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App font-sans">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <NavBar />
          <Outlet />
          <ScrollToTop />
          {/* <BookInfoPage /> */}
          {/* <ReadingPage /> */}
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
