import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import UiPost from './UiPost';
import { getData,deleteData } from '../../../utils/Api';

const Allpost = () => {

    const [posts, setPosts] = useState([]);
    const userData = useSelector(state => state.userData);
    const [page, setPage] = useState(1);

    const loadPosts = async () => {
        const resData = await getData(`/posts/paginate/${page}`);
        setPosts(resData.result)
    }
    useEffect(() => loadPosts, [page]);

    const deletePost = async (id) => {
        const resData = await deleteData(`/posts/${id}`,userData.token);
        setPosts(resData.result)
        loadPosts();
    }



    const increasePage = () => setPage(pav => pav+1);
    const decreasePage = () => {
        if (page >= 2) {
            setPage(pav => pav-1)
        }
    }

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div><Link to="/admin/posts/add" className='btn btn-primary btn-sm mb-3'>Add Posts</Link></div>
                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-sm">
                            <button className='page-item page-link' onClick={decreasePage}>Prev</button>
                            <button className='page-item page-link' onClick={increasePage} >Next</button>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='row'>
                {
                    posts.map(post => <UiPost key={post._id} post={post} deletePost={deletePost} />)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm">
                        <button className='page-item page-link' onClick={decreasePage}>Prev</button>
                        <button className='page-item page-link' onClick={increasePage} >Next</button>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Allpost