//product name, price and pictures
$(document).ready(function() {
	var productItem = [{
			productName: "Books",
			price: "50.00",
			photo: "card1.jpg"
		},
		{
			productName: "Bags",
			price: "70.00",
			photo: "card2.jpeg"
		},
		{
			productName: "Buckets",
			price: "60.00",
			photo: "card3.jpg"
		},
		{
			productName: "Basket",
			price: "40.00",
			photo: "card4.jpeg"
		},
        {
			productName: "Brand",
			price: "200.00",
			photo: "card.png"
		}];
	showProductGallery(productItem);
	showCartTable();
});


// Add to Cart 
function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (localStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(localStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	localStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

//To Empty the Cart
function emptyCart() {
if (localStorage.getItem('shopping-cart')) {
    // Clear JavaScript localStorage by index
    localStorage.removeItem('shopping-cart');
    showCartTable();
}
}

//To Remove Item from Cart 
function removeCartItem(index) {
	if (localStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
		localStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}

function removeCartItem(index) {
	if (localStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
		localStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}

//To Show the Cart Table
function showCartTable() {
	var cartRowHTML = "";
	var itemCount = 0;
	var grandTotal = 0;

	var price = 0;
	var quantity = 0;
	var subTotal = 0;

	if (localStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
		itemCount = shoppingCart.length;

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity);
			subTotal = price * quantity

			cartRowHTML += "<tr>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>$" + price.toFixed(2) + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>$" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});
	}
	$('#cartTableBody').html(cartRowHTML);
	$('#itemCount').text(itemCount);
	$('#totalAmount').text("$" + grandTotal.toFixed(2));
}

// To Show the Product Gallery 

function showProductGallery(product) {
	//Iterate javascript shopping cart array
	var productHTML = "";
	product.forEach(function(item) {
		productHTML += '<div class="product-item">'+
					'<img style="width:500px; height:500px;"  src="product-images/' + item.photo + '">'+
					'<div class="productname">' + item.productName + '</div>'+
					'<div class="price">$<span>' + item.price + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
					'</div>'+
				'</div>';
				"<tr>";
		
	});
	$('#product-item-container').html(productHTML);
}
