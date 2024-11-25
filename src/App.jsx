import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = blog => {
      console.log(blog);
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  }

  const handleAddReadingTime = time => {
    setReadingTime(readingTime+time);
  }
  return (
    <>

      <Header></Header>
      <div className='flex justify-between max-w-7xl mx-auto'>
        <Blogs handleAddBookmarks={handleAddBookmarks}
               handleAddReadingTime={handleAddReadingTime} 
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
