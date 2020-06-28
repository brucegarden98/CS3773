
	var prev = "";
	var index = 0;
	var cartMap = new Map();
	var groceries=["Chips","Eggs","Milk","Beef","Soup","Bread","Ice Cream","Soda","Bananas","Soup"];
	var groceriesPrices=["1.06","1.30","3.15","1.50","2.00","2.15","3.12",".50",".80"];
	window.onload = retriveCart();
	function searchButtonClicked(){
		result = groceries.find(findGroceries);
		priceResult = groceries.findIndex(findGroceries);
	  	if(result == null){
	  		alert("Please put a something into the search ");
	  	}
	  	else {
	  		index = priceResult;
	  		console.log(result);
	  		if (prev != "") {
	  			document.getElementsByClassName(prev)[0].style.display = "none";
	  		}
	  		document.getElementsByClassName(result)[0].style.display = "block";
	  		document.getElementById("figure").style.display = "block"; 
	  		document.getElementById("price").innerHTML = groceriesPrices[priceResult];
	  		prev = result;
	  	}
	}
	function findGroceries(groceries) {
		var searchBarInput = document.getElementById("search").value
		return groceries == searchBarInput;
	}
	function addToCart(){
		if(cartMap.has(groceries[index])) {
			cartMap.set(groceries[index], cartMap.get(groceries[index]) + 1);
		}
		else {
			cartMap.set(groceries[index], 1);
		}
		
		window.sessionStorage["cart"] = serialize(cartMap);
	}
	function viewCart(){
		cartMap.forEach(function(value, key) {
			alert("Your cart has "+key + ": " + value)
		});
	}
	function retriveCart() {
		cartMap = new Map(JSON.parse(window.sessionStorage["cart"]));
	}
	function serialize(map) {
		return JSON.stringify([...map])
	}