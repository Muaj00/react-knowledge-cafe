import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-100  ml-6 mt-4 pt-4 rounded-xl">
            <div className='bg-slate-300 p-6 m-4 rounded-2xl'>
                <h3 className="text-2xl text-center text-purple-600 font-semibold">Reading Time: {readingTime}</h3>
            </div>
            <div className=''>
                <h1 className="text-2xl text-center text-rose-800 font-semibold" >Bookmarks : {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;