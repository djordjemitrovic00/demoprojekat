import React, { useCallback, useState } from "react"

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getResults = useCallback(async (requestConfig, callbackfn) => {
        setIsLoading(true);
        let response = await fetch(`${requestConfig.url}`,
        {
            method: requestConfig.method ? requestConfig.method : "GET",
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? requestConfig.body : null
        });
        if (!response.ok) {
            setIsError(true);
        }
        let results = await response.json();
        setIsLoading(false)
        callbackfn(results)
    }, []);

    return {
        isLoading,
        isError,
        getResults
    }

    
}