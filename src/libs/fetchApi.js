/** get data use fetch
* @param {String} url
 */

const getDataUseFetch =async(url) => {
    return fetch(url)
}

/** post data use fetch
* @param {String} url
* @param {String} method
* @param {Object} data
 */

const postDataUseFetch =async(url,method,data) => {
    return fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
}

export {
   getDataUseFetch,
   postDataUseFetch 
}



    