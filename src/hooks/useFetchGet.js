import { useState, useEffect } from 'react';

const useFetchGet = (route) => {
    const [data, setData] = useState()
    const URL = 'http://localhost:9999/api'

    useEffect(() => {
        fetch(URL + route)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((err) => console.log(err))
    }, [route])

    return data
}

export default useFetchGet
