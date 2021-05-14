import { useEffect, useState } from 'react';
import MyFeed from './components/myFeed';
import Discover from './components/discover';
import Search from './components/search';
import Bookmark from './components/bookamark';
import Preferences from './components/preferences';
import './styles/App.css';
function App() {
  const [current, setCurrent] = useState('feed');
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    if (!(window.localStorage.getItem('country') && window.localStorage.getItem('lauguage') && window.localStorage.getItem('categories'))) {
      setShowModal(true)
    }
  }, [])
  const renderComponent = () => {
    if (current === 'feed') {
      return <MyFeed />
    }
    else if (current === 'discover') {
      return <Discover />
    }
    else if (current === 'search') {
      return <Search />
    }
    else {
      return <Bookmark />
    }
  }
  return (
    <div>
      <nav>
        <span className="logo">InShorts</span>
        <div className="nav-links">
          <span className="nav-link" onClick={() => setCurrent('feed')}>Feed</span>
          <span className="nav-link" onClick={() => setCurrent('discover')}>Discover</span>
          <span className="nav-link" onClick={() => setCurrent('search')}>
            {/* search */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.495 590.555">
              <g id="search" transform="translate(-1.53)">
                <path id="Path_1" data-name="Path 1" d="M574.1,469.235,437.61,353.434a17.349,17.349,0,0,0-25.639,3.435A234.585,234.585,0,0,1,355.36,413.5a17.808,17.808,0,0,0-7.449,12.143,17.28,17.28,0,0,0,3.975,13.439L467.759,575.7a40.284,40.284,0,0,0,60.107,2.68l48.98-48.981a40.284,40.284,0,0,0-2.747-60.16Z" />
                <path id="Path_2" data-name="Path 2" d="M218.4,433.743A216.879,216.879,0,0,0,435.27,216.872C435.271,97.29,337.983,0,218.4,0S1.53,97.29,1.53,216.872,98.817,433.743,218.4,433.743ZM71.81,216.872c0-80.83,65.759-146.589,146.589-146.589s146.588,65.759,146.588,146.589A146.753,146.753,0,0,1,218.4,363.458C137.569,363.461,71.81,297.7,71.81,216.872Z" />
              </g>
            </svg>
          </span>
          <div className="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="45.532" height="45.53" viewBox="0 0 45.532 45.53">
              <path id="Path_4" data-name="Path 4" d="M22.766,0A22.765,22.765,0,1,0,45.532,22.766,22.766,22.766,0,0,0,22.766,0Zm0,6.807a7.53,7.53,0,1,1-7.529,7.53A7.53,7.53,0,0,1,22.766,6.808Zm-.005,32.771a16.708,16.708,0,0,1-10.88-4.012,3.209,3.209,0,0,1-1.126-2.439,7.594,7.594,0,0,1,7.631-7.592h8.762a7.583,7.583,0,0,1,7.619,7.592,3.2,3.2,0,0,1-1.125,2.438A16.7,16.7,0,0,1,22.761,39.579Z" transform="translate(0 -0.001)" />
            </svg>
            <div className="dropdown-items">
              <span className="dropdown-item" onClick={() => setShowModal(true)}>Preferences</span>
              <span className="dropdown-item" onClick={() => setCurrent('bookmark')}>Bookmarks</span>
              <span className="dropdown-item" onClick={(e) => {
                document.documentElement.setAttribute("data-theme", document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
                document.documentElement.getAttribute("data-theme") === "dark" ? e.currentTarget.innerHTML = "light mode" : e.currentTarget.innerHTML = "dark mode"

              }}>DarkMode</span>
            </div>
          </div>
        </div>
      </nav>
      {renderComponent()}
      {showModal ? <Preferences /> : null}
    </div>
  );
}

export default App;
