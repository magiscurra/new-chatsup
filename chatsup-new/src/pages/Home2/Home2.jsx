import React, { useState } from "react";
import './Home2.css';
import "@fontsource/poppins/400.css"; 
function Home2() {
  const [selectedSearch, setSelectedSearch] = useState(null);
  const [selectedTag,setSelectedTag] = useState(null);

  

  const handleSearchClick = (search) => {
    setSelectedSearch(search);
  };
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  }

  return (
    <div className='Parent'>
      <div className="Child">
        <div className="container">
          <div className="search">
            <p>Who are you looking for?</p>
            <div className="buttons">
              <button 
                className={`male ${selectedSearch === 'male' ? 'active' : ''}`} 
                onClick={() => handleSearchClick('male')}
              >
                Male
              </button>
              <button 
                className={`female ${selectedSearch === 'female' ? 'active' : ''}`} 
                onClick={() => handleSearchClick('female')}
              >
                Female
              </button>
              <button 
                className={`other ${selectedSearch === 'other' ? 'active' : ''}`} 
                onClick={() => handleSearchClick('other')}
              >
                Other
              </button>
            </div>
            <div className="message">
              <p>This doesn't ensure that you will always get the selected gender. This just gives priority to the selected gender</p>

            </div>
          </div>
          <div className="Tags">
            <div className="buttons2">
              <p>Tags</p>
              <button
              className={`love ${selectedTag === 'love' ? 'active' : ''}`} 
              onClick={() => handleTagClick('love')}
              >Love</button>
              <button
              className={`game ${selectedTag === 'game' ? 'active' : ''}`} 
              onClick={() => handleTagClick('game')}
              >Games</button>
              <button
              className={`music ${selectedTag === 'music' ? 'active' : ''}`} 
              onClick={() => handleTagClick('music')}
              >Music</button>
              <button
              className={`movie ${selectedTag === 'movie' ? 'active' : ''}`} 
              onClick={() => handleTagClick('movie')}
              >Movies</button>
              <button
              className={`add ${selectedTag === 'add' ? 'active' : ''}`} 
              onClick={() => handleTagClick('add')}
              >+Add more</button>

            </div>
          </div>
          <button className="end-btn">&#x2713;Take me there</button>
        </div>
      </div>
    </div>
  );
}
export default Home2;
