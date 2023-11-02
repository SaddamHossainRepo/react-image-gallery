/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    console.log(tags)
    return (
        <div>
            <div className='image-card max-w-sm rounded overflow-hidden shadow-lg'>
                <img className='image w-full' src={image.webformatURL} alt="" />
                <div className=" px-5 py-4">
                    <div className="font-bol text-purple-500 text-xl mb-2">
                        photo by {image.user}
                    </div>
                    <ul>
                        <li>
                            <strong>Views: </strong>
                            {image.views}
                        </li>
                        <li>
                            <strong>Downloads: </strong>
                            {image.downloads}
                        </li>
                        <li>
                            <strong>Likes: </strong>
                            {image.likes}
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    {
                        tags.map(tag => (
                            <span
                                // key={image.id}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                #{tag}
                            </span>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default ImageCard;