import SinglePost from '../../components/singlePost/SinglePost';
import Sidebar from '../../components/sidebar/Sidebar';
import './Single.scss';

export default function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    );
}
