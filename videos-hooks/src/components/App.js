import React, { useState, useEffect } from 'react'
import './App.css';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const App = () => {

  
  const [selectedVideo, setSelectedVideo] = useState(null);

  // setSelectedVideo(response.data.items[0]);

    const onTermSubmit = async (term) => {
      const response = await youtube.get('/search', {
        params: {
          q: term
        }
      });

      setVideos(response.data.items);
    };

      return(
        <div className="ui container">
          <SearchBar onFormSubmit={onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
              </div>
            </div>
          </div>
        </div>
      )
};

export default App;