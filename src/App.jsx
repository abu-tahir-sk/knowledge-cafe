import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readinge, setReadin] = useState(0);
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    }

    const handleMarkAsRead = (time, id) =>{
      const newReadingTime = readinge + time;
      setReadin(newReadingTime);

      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
      setBookmarks(remainingBookmarks);
    } 
  
  return (
    <>
    <Header></Header>
    <main className='md:flex w-11/12 mx-auto gap-6 py-8 shadow p-0 md:p-4'>
      <Blogs  handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks} readinge={readinge}></Bookmarks>
    </main>
    
    </>
  )
}

export default App
