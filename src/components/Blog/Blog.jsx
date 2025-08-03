import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
     const {id,title, cover, reading_time,author_img, author, posted_date, hashtags} = blog;
      return (
            <div className='py-10'>
                  <img className='rounded' src={cover} alt={`Cover picture of the title ${title}`} />
                  <div className="flex justify-between items-center">
                        <div className='flex py-6'>
            <img className='w-14 rounded-full' src={author_img} alt="" />
            <div className='pl-6'>
                  <h3 className="text-1xl font-bold">{author}</h3>
                  <p>{posted_date}</p>
            </div>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                               <span>{reading_time} min read </span>
                               <button 
                               onClick={ () => handleAddToBookmark(blog)}
                               className='bg-slate-200 rounded-full p-2 hover:bg-[#6047EC]'
                               ><CiBookmark></CiBookmark></button>
                              
                        </div>
                  </div>
                <h2 className='text-4xl font-bold pb-3'>{title}</h2>  
                <p className=''>
                  {
                        hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                  }
                </p>
                <button
                onClick={() =>handleMarkAsRead(id,reading_time)}
                className='text-purple-700 font-bold underline'
                 >Mark as read</button>
            </div>
      );
};

Blog.propTypes ={
      blog: PropTypes.object.isRequired,
      handleAddToBookmark: PropTypes.func,
      handleMarkAsRead: PropTypes.func
}
export default Blog;