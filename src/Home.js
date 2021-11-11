import React, { useState } from 'react'
import Latest from './components/Latest'
import NowPlaying from './components/NowPlaying'
import Popular from './components/Popular'
import Search from './components/Search'
import Toprated from './components/Toprated'
import Upcoming from './components/Upcoming'

const Home = () => {
  const [selectedTab, selectTab] = useState('latest')
  return (
    <div className="App">
      <nav>
        <div onClick={() => selectTab('latest')}>Latest</div>
        <div onClick={() => selectTab('now-playing')}>Now Playing</div>
        <div onClick={() => selectTab('popular')}>Popular</div>
        <div onClick={() => selectTab('top_rated')}>Top Rated</div>
        <div onClick={() => selectTab('upcoming')}>Upcoming</div>
        <div onClick={() => selectTab('search')}>Search</div>
      </nav>
      <div className="content">
        {selectedTab === 'latest' && <Latest />}
        {selectedTab === 'popular' && <Popular />}
        {selectedTab === 'now-playing' && <NowPlaying />}
        {selectedTab === 'top_rated' && <Toprated />}
        {selectedTab === 'upcoming' && <Upcoming />}
        {selectedTab === 'search' && <Search />}
      </div>
    </div>
  )
}

export default Home
