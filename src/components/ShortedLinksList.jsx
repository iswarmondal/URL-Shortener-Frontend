import axios from 'axios'
import React, {useEffect, useState} from 'react'

function ShortedLinksList({updateList}) {

    const [urls, setUrls] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        axios({
            url: `${process.env.REACT_APP_BASE_URL}/get-all-urls`,
            method: 'GET',
            headers: {
                "authorization" : `${localStorage.getItem("authToken")}`
            }
        })
        .then((res)=>{
            if(res.data.success == false){
                setError("Please Login")
            }
            setUrls(res.data);
        })
        .catch((err)=>{
            setUrls(err.response.data.message)
            console.log("Error " + urls);
        })

    }, [updateList])
    
    return (
        <div>
            <div className='flex justify-center content-center text-lg font-semibold text-red-400'>
                {error}
            </div>
            {!error ?
            (<table className="table-auto">
                <thead>
                    <tr>
                        <th className='px-10'>Full URL</th>
                        <th className='px-10'>Short URL</th>
                        <th className='px-10'>CLicks</th>
                    </tr>
                </thead>
                <tbody>
                {urls?.data?.map((data, i) =>{
                    return(
                        <tr key={i} className='my-3'>
                            <td className='px-10'>
                                <a href={data.fullURL}>{data.fullURL}</a>
                            </td>
                            <td className='px-10'>
                                <a href={`${process.env.REACT_APP_BASE_URL}/${data.shortURL}`}>{data.shortURL}</a>
                            </td>
                            <td className='px-10'>{data.clicks}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>) : ""}
        </div>
    )
}

export default ShortedLinksList