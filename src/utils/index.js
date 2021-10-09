export const fetchData = (uri, callback, callType) => {
  fetch(uri)
      .then(response => response.json())
      .then(data => callback(callType === 'initial' ? data.results : data))
}