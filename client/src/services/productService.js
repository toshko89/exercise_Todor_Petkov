const URL = 'http://localhost:5001/groceries'

async function newProduct(product) {
  try {
    const newData = await fetch(URL + '/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(product)
    });
    return newData.json();
  } catch (error) {
    throw new Error(error)
  }
}

async function getProducts() {
  try {
    const products = await fetch(URL, {
      method: 'GET',
      credentials: 'include'
    });
    return products.json();
  } catch (error) {
    throw new Error(error)
  }
}

export { newProduct,getProducts };