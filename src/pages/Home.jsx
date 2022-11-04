import React, {useState, useEffect} from 'react'
import ShortedLinksList from '../components/ShortedLinksList'
import URLInputField from '../components/URLInputField'

function Home() {
  const [updateList, setUpdateList] = useState(false)
  
  return (
    <>
        <div className='border p-5 flex justify-center'>
            <URLInputField setUpdateList={setUpdateList} />
        </div>
        <div className='flex justify-center py-5'>
          <ShortedLinksList updateList={updateList} />
        </div>
    </>
  )
}

export default Home