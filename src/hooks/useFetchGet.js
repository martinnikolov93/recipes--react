import { useState, useEffect } from 'react';
import { config } from './utils/constants'

const useFetchGet = (route) => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(config.url.API_URL + route)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((err) => console.log(err))
    }, [route])

    return data
}

export default useFetchGet
