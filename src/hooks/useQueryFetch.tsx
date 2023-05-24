import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '../utils/url'


export const useQueryFetch = (url: any) => {

    const { isLoading, error, data: fetchedData } = useQuery([url], () =>
        fetch(BASE_URL + url).then(res =>
            res.json()
        )
    )

    return { fetchedData }
}


export const useQueryFetchId = (url: any, id: any) => {

    const { isLoading, error, data: fetchedData } = useQuery([url, id], () =>
        fetch(`${BASE_URL + url + '/' + id}`).then(res =>
            res.json()
        )
    )

    return { fetchedData }
}


export const useQueryFetchParams = (url: any, id: any) => {

    const { isLoading, error, data: fetchedData } = useQuery([url, id], () =>

        fetch(`${BASE_URL + url + id}`).then(res =>

            res.json()
        )
    )

    return { fetchedData }
}