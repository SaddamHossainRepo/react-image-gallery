/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from 'react'
import './App.css'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {

  const [images, setImages] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImages(data.hits)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [term])

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}>

      </ImageSearch>

      {!isLoading && images.length === 0 && <h1 className='text-6xl
 text-center mx-auto mt-32'>No Images Found</h1>}

      {isLoading ? <div className="text-6xl text-center mx-auto mt-32">
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading....</h1>
      </div> : <div className="grid grid-cols-3 gap-4">
        {
          images.map(image => (
            <ImageCard
              key={image.id}
              image={image}
            ></ImageCard>
          ))
        }
      </div>}
    </div>
  )
}

export default App
