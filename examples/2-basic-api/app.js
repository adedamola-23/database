const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/basicapi')
    const products = data
      .map((product) => {
        const {
          image: { url },
          price,
          name,
        } = product
        return ` <article class="product">
      <img
        src="${url}"${name}"
      />
      <div class="info">
        <h5${name}h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`
      })
      .join('')
    result.innerHTML = products
  } catch (error) {
    result.innerHTML = `<h4>there was an error. Please try AGAIN</h4>`
  }
}
fetchData()
