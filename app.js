const products = [
    { id: 1, name: "Phone", category: "electronics", price: 500 },
    { id: 2, name: "Laptop", category: "electronics", price: 1500 },
    { id: 3, name: "Shirt", category: "clothing", price: 40 },
    { id: 4, name: "Headphones", category: "electronics", price: 100 },
    { id: 5, name: "Jeans", category: "clothing", price: 60 }
  ];

  const productList = document.getElementById('productList');
  const serchInput = document.getElementById('searchInput')
  const category = document.getElementById('categoryFilter');
  const details = document.getElementById('details');

  function displayProduct(products){
    productList.innerHTML = "";
    products.map(product=>{
        const div = document.createElement('div');
        div.className = 'product'
        div.textContent = `${product.name} - $${product.price}`;
        div.onclick = () => showDetails(product.id);
        productList.appendChild(div)
    })
  }

  function showDetails(id){
    const product = products.find(product=>product.id ===id);
    details.textContent = `Product: ${product.name}, Price: $${product.price}, Category: ${product.category}`;
  }

  function filterProducts() {
    const search = serchInput.value.toLowerCase();
    const category1 = category.value;
  
    const filtered = products.filter(product => {
      const matchesCategory = category1 === 'all' || product.category === category1;
      return (product.name.toLocaleLowerCase().indexOf(search)!= -1) && matchesCategory;
    });
    displayProduct(filtered);
  }


  displayProduct(products);
  serchInput.addEventListener('input', filterProducts);
  category.addEventListener('change', filterProducts);
