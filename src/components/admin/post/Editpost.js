import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {

    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [cat, setCat] = useState('');
    const [tag, setTag] = useState('');
    const [content, setContent] = useState('');
    const [cats, setCats] = useState([]);
    const [tags, setTags] = useState([]);
    const {id} = useParams();


    const onFileChange = e => {
        setFile(e.target.files[0])
    }

    const loadCats = async () => {
        const response = await fetch("http://13.214.58.126:3001/cats");
        const resData = await response.json();
        if (resData.con) {
            setCats(resData.result);
        }
        else {
            console.log(resData)
        }
    }

    const loadTag = async () => {
        const response = await fetch("http://13.214.58.126:3001/tags")
        const resData = await response.json()
        setTags(resData.result)
    }

    const loadPosts = async () => {
      const response = await fetch(`http://13.214.58.126:3001/posts/${id}`);
      const resData = await response.json();
      setTitle(resData.result.title)
      setContent(resData.result.content)
      setCat(resData.result.cat)
      setTag(resData.result.tag)
      
    }

    useEffect(() => { loadCats(); loadTag();loadPosts() }, []);

    const userData = useSelector(state => state.userData);
    const navigate = useNavigate()

    const apiEditPost = async () => {
        const response = await fetch(`http://13.214.58.126:3001/posts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
              title:title,
              cat: cat,
              tag: tag,
              content: content,
              file: file
            }),
            headers: {
                "content-type" : "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });

        const resData = await response.json();

        if (resData.con) {
            navigate("/admin/posts/all")
        } else {
            console.log(resData)
        }

    }

    const submitPost = e => {
        e.preventDefault();
        apiEditPost()
    }


    return (
        <div className='row'>
            <div className='col-md-8 offset-md-2 bg-dark p-5 text-white'>
                <h3 className='text-center mb-3'>Edit Post</h3>
                <form onSubmit={submitPost}>
                    <div className='row'>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                                id="title" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="cat" className="form-label">Category</label>
                            <select className="form-select form-select-sm" id='cat'
                                value={cat}
                                onChange={e => setCat(e.target.value)}
                                aria-label=".form-select-sm example">
                                {cats.length > 0 && cats.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
                            </select>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="tagId" className="form-label">Tags</label>
                            <select className="form-select form-select-sm" id='tagId'
                                value={tag}
                                onChange={e => setTag(e.target.value)}
                                aria-label=".form-select-sm example">
                                {tags.length > 0 && tags.map(tag => <option key={tag._id} value={tag._id}>{tag.name} </option>)}
                            </select>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="formFile" className="form-label text-white">Image</label>
                            <input className="form-control" type="file" id="formFile" required onChange={onFileChange} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="content" className="form-label">Content</label>
                            <textarea className="form-control" id="content"
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                rows="3"></textarea>
                        </div>
                        <div className='mb-3 col-md-6 d-flex justify-content-center align-items-center '>
                            <div className='mt-4'>
                                <button type='reset' className='btn btn-outline-warning  me-2'>Cancel</button>
                                <button type='submit' className='btn btn-outline-success '>Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPost