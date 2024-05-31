// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('تم إضافة المنتج إلى السلة!');
        });
    });

    // إضافة منتج جديد
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const productName = document.getElementById('productName').value;
            const productImage = document.getElementById('productImage').value;
            const productDescription = document.getElementById('productDescription').value;

            const newProduct = {
                name: productName,
                image: productImage,
                description: productDescription
            };

            addProductToLocalStorage(newProduct);
            alert('تم إضافة المنتج بنجاح!');
            productForm.reset();
        });
    }

    function addProductToLocalStorage(product) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    function loadProductsFromLocalStorage() {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        const productsContainer = document.querySelector('.products');
        if (productsContainer) {
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productElement.appendChild(productImage);

                const productName = document.createElement('h2');
                productName.textContent = product.name;
                productElement.appendChild(productName);

                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                productElement.appendChild(productDescription);

                const productButton = document.createElement('button');
                productButton.textContent = 'إضافة إلى السلة';
                productButton.addEventListener('click', () => {
                    alert('تم إضافة المنتج إلى السلة!');
                });
                productElement.appendChild(productButton);

                productsContainer.appendChild(productElement);
            });
        }
    }

    loadProductsFromLocalStorage();
});
