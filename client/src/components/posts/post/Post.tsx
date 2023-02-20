import {Link} from 'react-router-dom';
import './Post.scss';
import {formatISO9075} from 'date-fns';

export default function Post({
    _id,
    title,
    summary,
    img,
    createdAt,
    author,
}: {
    _id: number;
    title: string;
    summary: string;
    img: string;
    createdAt: Date;
    author: string;
}) {
    return (
        <div className='post'>
            <Link to={`/post/${_id}`} className='link'>
                <img className='postImg' src={img} alt='' />
            </Link>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>
                        <Link className='link' to='/posts'>
                            Music
                        </Link>
                    </span>
                    <span className='postCat'>
                        <Link className='link' to='/posts'>
                            Life
                        </Link>
                    </span>
                </div>
                <span className='postTitle'>
                    <Link to={`/post/${_id}`} className='link'>
                        {title}
                    </Link>
                </span>
                <hr />
                <span className='postDate'>{formatISO9075(new Date(createdAt))}</span>
                <span className='postDate'>{author}</span>
            </div>
            <p className='postDesc'>{summary}</p>
        </div>
    );
}
