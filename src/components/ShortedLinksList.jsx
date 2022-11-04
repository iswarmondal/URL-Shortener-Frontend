import axios from 'axios'
import React, {useEffect, useState} from 'react'

function ShortedLinksList({updateList}) {

    const [urls, setUrls] = useState([])

    useEffect(() => {
        axios({
            url: "http://localhost:4000/get-all-urls",
            method: 'GET'
        })
        .then((res)=>{
            setUrls(res.data);
        })
        .catch((err)=>{
            setUrls(err.message)
            console.log("Error " + urls);
        })

    }, [])
    
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='px-10'>Full URL</th>
                        <th className='px-10'>Short URL</th>
                        <th className='px-10'>CLicks</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(urls?.data)}
                {urls?.data?.map((data, i) =>{
                    console.log(data);
                    return(
                        <tr key={i} className='my-3'>
                            <td className='px-10'>
                                <a href={data.fullURL}>{data.fullURL}</a>
                            </td>
                            <td className='px-10'>
                                <a href={"http://localhost:4000/" + data.shortURL}>{data.shortURL}</a>
                            </td>
                            <td className='px-10'>{data.clicks}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default ShortedLinksList