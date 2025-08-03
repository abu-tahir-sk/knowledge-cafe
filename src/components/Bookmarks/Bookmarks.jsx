import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readinge}) => {
      return (
            <div className="md:w-4/12 shadow-md mx-auto p-4 bg-gray-200">
                  <div className="bg-[#ccc6ef] text-center rounded my-6">
                        <h3  className=" text-1xl font-bold p-4 w-full text-[#6047EC] ">Spent time on read : {readinge} min</h3>
                  </div>
                
                  <h2 className="text-2xl font-bold">Bookmarked Blogs :  {bookmarks.length}</h2> 
                  {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                  }
             
            </div>
      );
};

Bookmarks.prototype = {
     bookmarks: PropTypes.array,
     readinge: PropTypes.number
}

export default Bookmarks;