import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({ blog, handleAddBookmarks }) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of each title ${title}`} />
            
            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center '>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddBookmarks}
                    className='ml-2 text-xl text-rose-800'><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>

            <h2 className="text-3xl font-bold">{title}</h2>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};


export default Blog;