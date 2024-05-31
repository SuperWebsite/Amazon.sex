let products = [];

function addProduct() {
    let productName = document.getElementById("productName").value;
    let productDescription = document.getElementById("productDescription").value;
    let productPrice = document.getElementById("productPrice").value;
    let productImage = document.getElementById("productImage").files[0];
    let publishProduct = document.getElementById("publishProducts").checked;
    
    if (productName && productDescription && productPrice && productImage) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: event.target.result,
                published: publishProduct
            };
            products.push(product);
            displayProducts();
        };
        reader.readAsDataURL(productImage);
    } else {
        alert("يرجى إدخال جميع المعلومات");
    }
}

function displayProducts() {
    let productsSection = document.getElementById("products");
    productsSection.innerHTML = "";
    products.forEach(function(product) {
        if(product.published) {
            let productHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <span class="price">السعر: $${product.price}</span>
                    <button onclick="removeProduct('${product.name}')">حذف المنتج</button>
                    <button onclick="addToCart('${product.name}')">أضف إلى السلة</button>
                </div>
            `;
            productsSection.innerHTML += productHTML;
        }
    });
}

function removeProduct(productName) {
    products = products.filter(function(product) {
        return product.name !== productName;
    });
    displayProducts();
}

function addToCart(productName) {
    // تنفيذ إضافة المنتج إلى سلة المشتريات
}
