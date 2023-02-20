import './NewPost.scss';

export default function NewPost() {
    return (
        <div className='new'>
            <img
                className='newImg'
                src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt=''
            />
            <form className='newForm'>
                <div className='newFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className='newIcon fas fa-plus'></i>
                    </label>
                    <input id='fileInput' type='file' style={{display: 'none'}} />
                    <input className='newInput' placeholder='Title' type='text' autoFocus={true} />
                </div>
                <div className='newFormGroup'>
                    <textarea
                        className='newInput newText'
                        placeholder='Tell your story...'
                        autoFocus={true}
                    />
                </div>
                <button className='newSubmit' type='submit'>
                    Publish
                </button>
            </form>
        </div>
    );
}
