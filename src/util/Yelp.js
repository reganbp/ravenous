// const apiKey = 'PoS9gKwY6Ehyr2JHI8oOcrQTstwebjCB4yjT6lTVjktGhKT6AxDycUB-RX_wQXOvdDms1tOxWWDVzv_OU7ci7fSupQDLGvgrE8wrHlZo0vSzYGZlMPGa8NQxCXF3W3Yx'
const apiKey = `${process.env.REACT_APP_YELP}`


const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.alias,
              rating: business.rating,
              reviewCount: business.review_count
            }
          })
        }
      })
  }
}

export default Yelp
