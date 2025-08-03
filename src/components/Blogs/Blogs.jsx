import { useEffect , useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
import propTypes from "prop-types";


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
        const [blogs, setBlogs] = useState([]);

        useEffect( () => {
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        }, [])
        
      return (
            <div className="md:w-8/12 shadow-md p-0 md:p-2">
               
               {
                  blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                        ></Blog>)
               }
            </div>
      );
};

Blogs.propTypes = {
      handleAddToBookmark: PropTypes.func,
      handleMarkAsRead: propTypes.func
}

export default Blogs;