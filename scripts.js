// Initialize Firebase
const firebaseConfig = {
  apiKey: "QR2gCQbE8Um0VNrrOAvbBt5O9O91SzATfhlWeKdGGzs",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

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

            // Add product to Firebase database
            const db = firebase.database();
            db.ref('products').push(newProduct);

            alert('تم إضافة المنتج بنجاح!');
            productForm.reset();
        });
    }

    function loadProductsFromFirebase() {
        const db = firebase.database();
        const productsRef = db.ref('products');
        const productsContainer = document.querySelector('.products');
        
        productsRef.on('value', (snapshot) => {
            productsContainer.innerHTML = ''; // Clear products container
            
            snapshot.forEach((childSnapshot) => {
                const product = childSnapshot.val();
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
        });
    }

    loadProductsFromFirebase();
});
