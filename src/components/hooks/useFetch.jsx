
import axios from 'axios'
import React, { useState, useEffect } from 'react'


const useFetch = (url) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {


            const getData = async () => {
                try {
                    const res = await axios.get(url)
                    setLoading(false)
                    setData(res.data)
                }
                catch (error) {
                    setError(`${error}, some error occured try again`)
                }
            }
            getData()
        }, 700);

    }, [url])

    return { data, loading, error }
}

export default useFetch