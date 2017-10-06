(function () {
    'use strict';  
  
    var app = {
        isLoading: false,	    
        products:["TODOS","CARNES","PESCADOS","ACESSÓRIOS"] , //load dynamic
        selectedProduct: document.getElementById('product-selected'),	
        selectedNavbarButton: 0, //0: none, 1:products, 2:menu
        //templates
        sessionTemplate:document.querySelector('.sessionTemplate'),	
        itemTemplate:document.querySelector('.itemTemplate'),
        //navbar
        navbar: document.getElementById('navbar'),
        navbarProducts: document.getElementById('navbar-products'),	
        navbarCart: document.getElementById('navbar-cart'),
        navbarLogin: document.getElementById('navbar-login'),
        navbarMenu: document.getElementById('navbar-menu'),			
        //navbar with all items
        navbarAll: document.getElementById('navbar-droped'),	
        navbarAllList: document.querySelectorAll('#navbar-droped ul li a'),     
        //containers		
        productsContainer:document.getElementById('products-container'),
        modalContainer:document.getElementById('session-modal'),	
        //boards
        cartBoard: document.getElementById('cart-board'),
        //componentes
        butClose: document.querySelectorAll('.butClose'),
        //componente itemslide
        arrowLeft:document.querySelector('.arrow-l'),
        arrowRight:document.querySelector('.arrow-r'),		
        //loader
        spinner: document.querySelector('.loader')            
      }; 
  	
  //json default for first load   
   var firstData = {
    secoes:[
		{
		key:0,	
		label:'sugestões',
		produtos:[
			{
				key: 1,
				label: 'Saca Rolha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.50,
				pic:'saca-rolha.png'			
			},
			{
				key: 5,
				label: 'Bebidas',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.80,
				pic:'bebidas.png'			
			},
			{
				key: 7,
				label: 'Camisa',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'camisa.png'			
			},
			{
				key: 11,
				label: 'Bebidas',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.00,
				pic:'bebidas.png'			
			},
			{
				key: 19,
				label: 'Saca Rolha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'saca-rolha.png'			
			},
			{
				key: 99,
				label: 'Saca Rolha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'saca-rolha.png'			
			}
		]},		
		{
		key:1,	
		label:'carnes',	
		produtos:[		
			{
				key: 20,
				label: 'Picanha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'carne.png'			
			},
			{
				key: 21,
				label: 'Picanha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'carne.png'			
			},
			{
				key: 22,
				label: 'Picanha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'carne.png'		
			},
			{
				key: 23,
				label: 'Picanha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'carne.png'			
			},
			{
				key: 24,
				label: 'Picanha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'carne.png'			
			}
			,
			{
				key: 25,
				label: 'Picanha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'carne.png'			
			}
		]},	
		{
		key:2,	
		label:'pescados',	
		produtos:[
			{
				key: 31,
				label: 'Peixada',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.00,
				pic:'peixe.png'			
			},
			{
				key: 32,
				label: 'Peixada',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.00,
				pic:'peixe.png'			
			},
			{
				key: 33,
				label: 'Peixada',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.00,
				pic:'peixe.png'			
			},
			{
				key: 34,
				label: 'Peixada',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.00,
				pic:'peixe.png'			
			},
			{
				key: 35,
				label: 'Peixada',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.00,
				pic:'peixe.png'			
			}
			,
			{
				key: 36,
				label: 'Peixada',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:125.00,
				pic:'peixe.png'			
			}
		]},
		{
		key:3,	
		label:'acessórios',	
		produtos:[
			{
				key: 37,
				label: 'Saca Rolha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.50,
				pic:'saca-rolha.png'				
			},
			{
				key: 38,
				label: 'Camisa',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'camisa.png'
			},
			{
				key: 39,
				label: 'Saca Rolha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.50,
				pic:'saca-rolha.png'				
			},
			{
				key: 40,
				label: 'Camisa',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'camisa.png'	
			},
			{
				key: 41,
				label: 'Saca Rolha',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.50,
				pic:'saca-rolha.png'		
			}
			,
			{
				key: 42,
				label: 'Camisa',
				description:'Camiseta branca de algodão Brasa Fã tamanhos P,M,G e como fica se escrever muita coisa?',
				price:25.00,
				pic:'camisa.png'		
			}
		]}
	]};

  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/
    
  window.onscroll = function(){      
	  var navbarLogo = document.querySelector("#navbar-logo a");
	  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {        	  
		  app.navbar.className = app.navbar.className.replace("navbar-top", " navbar-rolled w3-animate-top"); //TODO w3
		  navbarLogo.classList.remove("hide");
	  } else {
		  app.navbar.className = app.navbar.className.replace("navbar-rolled w3-animate-top", " navbar-top");  //TODO w3
		  navbarLogo.classList.add("hide");
	  }	  	  
	}

  app.navbarMenu.addEventListener('click', function() {	
		if(app.selectedNavbarButton ==0 || app.selectedNavbarButton==2){
			app.setOnlyProducts(false);
			if (!app.navbarAll.classList.contains('hide')) {          
				app.modalContainer.classList.add('hide');
				app.navbarAll.classList.add('hide');
				app.selectedNavbarButton=0;	
			}
			else {           
				app.modalContainer.classList.remove('hide');
				app.navbarAll.classList.remove('hide');   
				app.selectedNavbarButton=2;	
			}
			app.rotateHambuguer();
		}
  });
      
  app.navbarProducts.addEventListener('click', function() {	
		if(app.selectedNavbarButton ==0 || app.selectedNavbarButton==1){
			if (!app.navbarAll.classList.contains("hide")) {          
				app.modalContainer.classList.add("hide");
				//app.navbarProducts.classList.remove("back-gray");
				app.navbarAll.classList.add("hide");
				app.setOnlyProducts(false);
				app.selectedNavbarButton=0;		
			}
			else {           
				app.modalContainer.classList.remove("hide");   
				app.navbarAll.classList.remove("hide");   
				//app.navbarProducts.classList.add("back-gray");
				app.setOnlyProducts(true);		
				app.selectedNavbarButton=1;		
			}
			app.rotateArrow();	
		}			
  });
  
  app.navbarCart.addEventListener('click', function() {	
  	app.shownavbarCart(null, null, null);  	
  });

  app.addProductsList = function(){
      
      var navProductsUl = app.navbarAll.querySelector('#navProducts');
      
      for(let p=1; p < app.products.length; p++){        
        
        var navProductLi = document.createElement('li');
        var navProductA = document.createElement('a');
        navProductA.textContent = app.products[p].toUpperCase();
        navProductA.classList.add('navbar-hover');
        navProductA.classList.add('navProduct');
        navProductA.classList.add('back-red');
        navProductLi.appendChild(navProductA);

        navProductA.addEventListener('click', function() {
           
            console.log('TODO ajax request');            
            app.selectedProduct.innerHTML = this.innerHTML;				
        });

        navProductsUl.appendChild(navProductLi);        
        app.selectedProduct.textContent = app.products[0];          
            
      }      
  }
    
  app.loadProducts=function(data){	  	
    
    var foundSugestoes = false; 	
    var carouselSection = document.getElementById('carousel');			
    var carouselUl;
    
    for (let s=0; s <data.secoes.length; s++){

        var sessionTemplate = app.sessionTemplate.cloneNode(true);
        var cardsContainer = sessionTemplate.querySelector('.cards-container');		
        var secao = data.secoes[s];
        sessionTemplate.classList.remove('sessionTemplate');	

        //se contém carrossel com sugestões
        if(secao.key == 0){
            foundSugestoes = true;
            carouselUl = carouselSection.querySelector('ul');
            carouselSection.querySelector('header span').textContent = secao.label.toUpperCase();	           
        }
        else{
            sessionTemplate.querySelector('header span').textContent = secao.label.toUpperCase();			
            app.productsContainer.appendChild(sessionTemplate);  
            sessionTemplate.removeAttribute('hidden');
        }        
        
        for (let p=0; p<secao.produtos.length; p++){

            var produto = secao.produtos[p];
            var card = app.itemTemplate.cloneNode(true);

            //para o card do carousel
            if(secao.key == 0) card.classList.add('width-max');
            else card.classList.remove('itemTemplate');			

            //monta o card           
            card.removeAttribute('hidden');
            card.classList.remove('itemTemplate');
            card.querySelector('.item-image').src ='./images/' + produto.pic;
            card.querySelector('.item-label').textContent = produto.label;
            card.querySelector('.item-desc').textContent = produto.description;
            card.querySelector('.price').textContent = formatMoney(produto.price);
            
            card.addEventListener('click', function(e) {                
               
                let cardModal =  document.querySelector('.itemClickedTemplate');	
                cardModal.removeAttribute('hidden');
                
                var caller = e.target || e.srcElement;	
                console.log(caller);
                
                if(!caller.classList.contains('cart')){
                    console.log('nao he botao');
                }
                /*
                cardModal.querySelector('.item-image').src ='./images/' + caller.querySelector('.item-image').src;
                cardModal.querySelector('.item-label').textContent = caller.querySelector('.item-label').textContent;
                cardModal.querySelector('.item-desc').textContent = card.querySelector('.item-desc').textContent;
                cardModal.querySelector('.price').textContent = card.querySelector('.price').textContent;
                
                cardModal.classList.add('width-heigth-max');
                cardModal.classList.add('padding-modal');

                let navClose = cardModal.querySelector('.navClose');
                navClose.removeAttribute('hidden');
                let butClose = navClose.querySelector('.butClose');

                butClose.addEventListener('click', function() {                 
                    cardModal = null;
                    app.hideModal();
                });				

                app.modalContainer.classList.remove('hide');
                app.modalContainer.appendChild(cardModal);
                */

            });	
            
            var cart = card.querySelector('.cart');
            cart.dataset.key = produto.key;	
            cart.dataset.price = produto.price;	
            cart.dataset.label = produto.label;	
            
            cart.addEventListener('click', function(e) {				
                var caller = e.target || e.srcElement;								
                app.shownavbarCart(caller.dataset.key , caller.dataset.label, caller.dataset.price);

            });
            
            if(secao.key ==0){
                let cardLi = document.createElement("li");				
                cardLi.appendChild(card); 				
                carouselUl.appendChild(cardLi);						
            }
            else{
                cardsContainer.appendChild(card);					
            }
        }
    }
    if(!foundSugestoes){
        carouselSection.style.display = "none";			
    }
		
  }

  app.hideModal=function(){  	
	
	app.navbarAll.classList.add('hide');
	app.modalContainer.classList.add('hide');
	app.cartBoard.classList.add('hide');  			
	
  }  

  app.shownavbarCart = function(productKey, productLabel, productPrice){  	  	

  	if(app.modalContainer.classList.contains('hide')){
		
		app.cartBoard.classList.remove('hide');
		app.modalContainer.classList.remove('hide');		

		if(productLabel !=null && productPrice!=null){
			
			var table = app.modalContainer.querySelector('#rounded-container table');
			
			/* check if already exists product */			
			
			let found=false;
			for(let i=1; i<table.rows.length-1; i++){

				let trow = table.rows[i];
				//console.log(trow.dataset.key + ' e ' + productKey);
				
				if(trow.dataset.key!=undefined && productKey!=undefined
				   && trow.dataset.key == productKey){					
					
					let qtdeInt = parseInt(trow.cells[1].innerHTML);
					qtdeInt++;										
					trow.cells[1].innerHTML = qtdeInt.toString();
					found = true;
					break;

				}
			}	

			if(!found){
				
				var row = table.insertRow(1);
				var cellLabel = row.insertCell(0);
				var cellQtde = row.insertCell(1);
				var cellPlus = row.insertCell(2);					
				var cellMinus = row.insertCell(3);
				var cellPrice = row.insertCell(4);

				row.dataset.key = productKey;

				cellLabel.innerHTML = productLabel;
				cellQtde.innerHTML ='1';
				cellPrice.innerHTML = formatMoney(productPrice);

				var elPlus  = document.createElement('button');
				elPlus.classList.add('btn-plus');							
				elPlus.innerHTML='+';

				elPlus.addEventListener('click', function() {					
					
                    row.classList.remove('not-selected');
                    var qtdeInt = parseInt(cellQtde.innerHTML);
					qtdeInt++;		
                                        
					cellQtde.innerHTML = qtdeInt.toString(); 

					var precoTotal = document.querySelector('.cart-board-footer li:nth-child(1)');
					var vrTotal	= parseFloat(precoTotal.innerHTML);
					precoTotal.innerHTML = 
						formatMoney(vrTotal + parseFloat(cellPrice.innerHTML));

				});

				cellPlus.appendChild(elPlus);

				var elMinus  = document.createElement('button');
				elMinus.classList.add('btn-minus');				
				elMinus.innerHTML='-';	

				elMinus.addEventListener('click', function() {
				
                    var qtdeInt = parseInt(cellQtde.innerHTML);
					qtdeInt--;					
                    
					if(qtdeInt > -1){
						cellQtde.innerHTML = qtdeInt.toString();

						var precoTotal = document.querySelector('.cart-board-footer li:nth-child(1)');
						var vrTotal	= parseFloat(precoTotal.innerHTML);
						precoTotal.innerHTML = 
						formatMoney(vrTotal - parseFloat(cellPrice.innerHTML)); 						                        
                        if(qtdeInt == 0) row.classList.add('not-selected');
					}
                    

				});

				cellMinus.appendChild(elMinus);
				
			}

			var total = document.querySelector('.cart-board-footer li:nth-child(1)');
			var vrTotal	= parseFloat(total.innerHTML);			
			total.innerHTML = formatMoney(vrTotal + parseFloat(productPrice));

		}
	}
	else{		
		app.cartBoard.classList.add('hide');	
		app.modalContainer.classList.add('hide');
	}	
  }

  app.setOnlyProducts=function(show){	   
		if(show){
			app.navbarAll.querySelector(".navLogin").classList.add("hide");
			app.navbarAll.querySelector(".navCart").classList.add("hide");	
			app.navbarAll.querySelector(".navProducts").classList.add("hide");	
            app.navbarAll.querySelector(".navMidia").classList.add("hide");	            
		}
		else{
			app.navbarAll.querySelector(".navLogin").classList.remove("hide");
			app.navbarAll.querySelector(".navCart").classList.remove("hide");		
			app.navbarAll.querySelector(".navProducts").classList.remove("hide");
            app.navbarAll.querySelector(".navMidia").classList.remove("hide");            
		}	
  }
  
  app.rotateHambuguer=function(){
		var x = document.getElementsByClassName("opennav")[0];
			if (x.className.indexOf("gira") == -1) x.className+=" gira";      
			else  x.className = x.className.replace(" gira", "");  
		}
		
  app.rotateArrow = function(){
    var arrowNav = document.getElementById('arrow-nav');	
    if(arrowNav.classList.contains('arrow-down')) {
        arrowNav.classList.remove('arrow-down');
        arrowNav.classList.add('arrow-up');
    }
    else{
        arrowNav.classList.add('arrow-down');
        arrowNav.classList.remove('arrow-up');		
    }
  }
  
  //items nav droped listeners 
  for (var i=0; i<app.navbarAllList.length; i++){

	  app.navbarAllList[i].addEventListener('click', function() {
        if(!this.classList.contains('navProducts')){           

            app.navbarAll.classList.add('hide');
            if(app.selectedNavbarButton ==2) app.rotateHambuguer();
            if(app.selectedNavbarButton ==1) app.navbarProducts.classList.remove("back-red");
            app.selectedNavbarButton =0;    
            app.hideModal();
            
            if (this.classList.contains('navCart')){   
                app.shownavbarCart(null, null, null);                  
            };
        }
	  });
  }    
  
  //all butClose listeners
  for (let i=0; i< app.butClose.length; i++){
  	app.butClose[i].addEventListener('click', function() {
		app.hideModal();
  	});  
  }
    
  // init app
  app.addProductsList();
  app.loadProducts(firstData);  

  
  /*
  /* you are perfect in all your ways to us
  	let myNode = app.modalContainer;
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
  	myNode.setAttribute("type", "hidden");*/		

  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

   /*
  // Toggles the visibility of the add new city dialog.
  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };

  // Updates a weather card with the latest weather forecast. If the card
  // doesn't already exist, it's cloned from the template.
  app.updateForecastCard = function(data) {
    var card = app.visibleCards[data.key];
    if (!card) {
      card = app.itemTemplate.cloneNode(true);
      card.classList.remove('itemTemplate');
      card.querySelector('.location').textContent = data.label;
      card.removeAttribute('hidden');
      app.container.appendChild(card);
      app.visibleCards[data.key] = card;
    }

    var dataElem = card.querySelector('.date');
    if(dataElem.getAttribute('data-dt')>=data.currently.time){
      return;
    }
    card.querySelector('.description').textContent = data.currently.summary;
    card.querySelector('.date').textContent =
      new Date(data.currently.time * 1000);
    card.querySelector('.current .icon').classList.add(data.currently.icon);
    card.querySelector('.current .temperature .value').textContent =
      Math.round(data.currently.temperature);
    card.querySelector('.current .feels-like .value').textContent =
      Math.round(data.currently.apparentTemperature);
    card.querySelector('.current .precip').textContent =
      Math.round(data.currently.precipProbability * 100) + '%';
    card.querySelector('.current .humidity').textContent =
      Math.round(data.currently.humidity * 100) + '%';
    card.querySelector('.current .wind .value').textContent =
      Math.round(data.currently.windSpeed);
    card.querySelector('.current .wind .direction').textContent =
      data.currently.windBearing;
    var nextDays = card.querySelectorAll('.future .oneday');
    var today = new Date();
    today = today.getDay();
    for (var i = 0; i < 7; i++) {
      var nextDay = nextDays[i];
      var daily = data.daily.data[i];
      if (daily && nextDay) {
        nextDay.querySelector('.date').textContent =
          app.daysOfWeek[(i + today) % 7];
        nextDay.querySelector('.icon').classList.add(daily.icon);
        nextDay.querySelector('.temp-high .value').textContent =
          Math.round(daily.temperatureMax);
        nextDay.querySelector('.temp-low .value').textContent =
          Math.round(daily.temperatureMin);
      }
    }
    if (app.isLoading) {
      app.spinner.setAttribute('hidden', true);
      app.container.removeAttribute('hidden');
      app.isLoading = false;
    }
  };


  /*****************************************************************************
   *
   * Methods for dealing with the model
   *
   ****************************************************************************/
   /*

  // Gets a forecast for a specific city and update the card with the data
  app.getForecast = function(key, label) {    
    var url = weatherAPIUrlBase + key + '.json';
    if('caches' in window){
      caches.match(url).then(function(response){
        if(response){
          response.json().then(function(json) {
            if(app.hasRequestPending){
              console.log('updated from cache');
              json.key = key;
              json.label = label;
            }
          });          
        }
      });
    }

    app.hasRequestPending =true;
    // Make the XHR to get the data, then update the card
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.response);
          response.key = key;
          response.label = label;
          app.hasRequestPending =false;
          app.saveForecast(response);
          app.updateForecastCard(response);
        }
      }
    };
    request.open('GET', url);
    request.send();
  };

  // Iterate all of the cards and attempt to get the latest forecast data
  app.updateForecasts = function() {
    var keys = Object.keys(app.visibleCards);
    keys.forEach(function(key) {
      app.getForecast(key);
    });
  };  

  app.initIndexedDb = function(){

    var DBOpenRequest = window.indexedDB.open("forecast",1);    
    
    DBOpenRequest.onerror = function(event) {
      console.log('Deu caca no loading database');
    };

    DBOpenRequest.onsuccess = function(event) {
      console.log('Database initialised');    
      // store the result of opening the database in the db variable. This is used a lot below
      db = DBOpenRequest.result;    
      // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
      //displayData();
      app.getSavedForecasts();
      console.log('Chamou app.getSavedForecasts()');
    };

    DBOpenRequest.onupgradeneeded = function(event) {
      
      // The database did not previously exist, so create object stores and indexes.
      var db = event.target.result;
      db.onerror = function(event) {
          console.log('Error loading database');
      };      
      
      var cityStore = db.createObjectStore("city", {keyPath: "key"});      
      cityStore.createIndex("label", "label", {unique: false});
      console.log("city object store created");      

      var currentlyStore = db.createObjectStore("currently", {keyPath: "citykey"});      
      currentlyStore.createIndex("summary", "summary", {unique: false});
      currentlyStore.createIndex("time", "time", {unique: false});
      currentlyStore.createIndex("temperature", "temperature", {unique: false});
      currentlyStore.createIndex("apparentTemperature", "apparentTemperature", {unique: false});
      currentlyStore.createIndex("precipProbability", "precipProbability", {unique: false});
      currentlyStore.createIndex("humidity", "humidity", {unique: false});
      currentlyStore.createIndex("windSpeed", "windSpeed", {unique: false});
      currentlyStore.createIndex("windBearing", "windBearing", {unique: false});
      console.log("currently object store created");         
           
      var dailyStore = db.createObjectStore("daily", {keyPath: ['citykey','daynumber']});      
      dailyStore.createIndex("icon", "icon", {unique: false});
      dailyStore.createIndex("temperatureMax", "temperatureMax", {unique: false});
      dailyStore.createIndex("temperatureMin", "temperatureMin", {unique: false});      
      console.log("currently object store created");                 
      
    };
  }

  app.getSavedForecasts = function(){
      
    var cityStore = db.transaction('city').objectStore('city');
    cityStore.openCursor().onsuccess = function(event) {
      
      var countRequest = cityStore.count();
      countRequest.onsuccess = function() {

        //console.log(countRequest.result);
        
        if(countRequest.result>0){
          
          //Know surelly I can call others objectstores

          var cursor = event.target.result;
          if(cursor) {
            
            var item = {
              key: '',
              label: '',
              currently: {
                time: 0,
                summary: '',
                icon: '',
                temperature: 0,
                apparentTemperature: 0,
                precipProbability: 0,
                humidity: 0,
                windBearing: 0,
                windSpeed: 0
              },
              daily: {
                data: [
                  {icon: '', temperatureMax: 0, temperatureMin: 0},
                  {icon: '', temperatureMax: 0, temperatureMin: 0},
                  {icon: '', temperatureMax: 0, temperatureMin: 0},
                  {icon: '', temperatureMax: 0, temperatureMin: 0},
                  {icon: '', temperatureMax: 0, temperatureMin: 0},
                  {icon: '', temperatureMax: 0, temperatureMin: 0},
                  {icon: '', temperatureMax: 0, temperatureMin: 0}
                ]
              }
            };

            //TODO guardar todos esses valores em array
            //console.log(cursor.value.key + " " + cursor.value.label); 
            item.key = cursor.value.key;
            item.label = cursor.value.label;

            //currently 
            var currentlyStore = db.transaction('currently').objectStore('currently');
            currentlyStore.openCursor().onsuccess = function(event) {
              
              let cursor = event.target.result;
              if(cursor) {
                //TODO guardar todos esses valores em array
                /*console.log(
                  cursor.value.citykey + " " +
                  cursor.value.time + " " + cursor.value.summary + " " + cursor.value.icon + " " + 
                  cursor.value.temperature + " " + cursor.value.apparentTemperature + " " + cursor.value.precipProbability + " " + 
                  cursor.value.humidity + " " + cursor.value.windBearing + " " + cursor.value.windSpeed 
                );
				
                if(item.key == cursor.value.citykey){
                  //console.log("item.key == cursor.value.citykey");
                  item.currently.time = cursor.value.time;
                  item.currently.summary = cursor.value.summary;
                  item.currently.icon = cursor.value.icon;
                  item.currently.temperature = cursor.value.temperature;
                  item.currently.apparentTemperature = cursor.value.apparentTemperature;
                  item.currently.precipProbability = cursor.value.precipProbability;
                  item.currently.humidity = cursor.value.humidity;
                  item.currently.windBearing = cursor.value.windBearing;
                  item.currently.windSpeed = cursor.value.windSpeed;                    
                }
                else cursor.continue();
              }

              //daily
              var dailyStore = db.transaction('daily').objectStore('daily');
              dailyStore.openCursor().onsuccess = function(event) {              
                let cursor = event.target.result;
                if(cursor) {
                  //TODO                    
                  console.log("item.key:" + item.key + " cursor.value.citykey:" + cursor.value.citykey);
                  if(item.key == cursor.value.citykey){                      
                                      
                    var i = cursor.value.daynumber;
                    //console.log(i);
                    item.daily.data[i] = {icon:cursor.value.icon, temperatureMax: cursor.value.temperatureMax, temperatureMin: cursor.value.temperatureMin};                                                   
                    
                  }
                  cursor.continue();
                }  
                else app.updateForecastCard(item);                  
              }
            }
            
            //app.updateForecastCard(json);   
            cursor.continue();
          } 
          else{
            console.log('all entries displayed');
          }                
        }          
        else{
          //console.log('no records to display');
          app.updateForecastCard(injectedForecast);
        }        
      }
    }
  }
  
  app.saveForecast = function(data){
    
    ////TO DO
    var transaction = db.transaction(["city","currently","daily"], "readwrite"); //   

    transaction.oncomplete = function() {
      console.log('Tansaction readwrite completed');
    }
    transaction.onerror = function() {
      console.log('Error transaction readwrite');
    }

    var itemCity = [{key: data.key,label:data.label}];

    var cityStore = transaction.objectStore("city");
    // add our newItem object to the object store
    var cityRequest = cityStore.add(itemCity[0]);
    cityRequest.onerror =function() {
        console.log("cityRequest.onerror");
    }
    cityRequest.onsuccess = function(event) {        
        // report the success of our new item going into the database
        console.log('cityRequest: New item added to database');        
    }; 

    var itemCurrently = [{
        citykey:data.key,
        time: data.currently.time,
        summary: data.currently.summary,
        icon: data.currently.icon,
        temperature: data.currently.temperature,
        apparentTemperature: data.currently.apparentTemperature, 
        precipProbability: data.currently.precipProbability,
        humidity: data.currently.humidity,
        windBearing: data.currently.windBearing,
        windSpeed: data.currently.windSpeed
    }];   

    var currentlyStore = transaction.objectStore("currently");
    // add our newItem object to the object store
    var currentlyRequest = currentlyStore.add(itemCurrently[0]);
    currentlyStore.onerror =function() {
        console.log("currently.onerror");
    }
    currentlyStore.onsuccess = function(event) {        
        // report the success of our new item going into the database
        console.log('currently: New item added to database');        
    }; 

    var itemDaily = [
      {citykey:data.key, daynumber:0, icon: data.daily.data[0].icon, temperatureMax: data.daily.data[0].temperatureMax, temperatureMin: data.daily.data[0].temperatureMin},
      {citykey:data.key, daynumber:1, icon: data.daily.data[1].icon, temperatureMax: data.daily.data[1].temperatureMax, temperatureMin: data.daily.data[1].temperatureMin},
      {citykey:data.key, daynumber:2, icon: data.daily.data[2].icon, temperatureMax: data.daily.data[2].temperatureMax, temperatureMin: data.daily.data[2].temperatureMin},
      {citykey:data.key, daynumber:3, icon: data.daily.data[3].icon, temperatureMax: data.daily.data[3].temperatureMax, temperatureMin: data.daily.data[3].temperatureMin},
      {citykey:data.key, daynumber:4, icon: data.daily.data[4].icon, temperatureMax: data.daily.data[4].temperatureMax, temperatureMin: data.daily.data[4].temperatureMin},
      {citykey:data.key, daynumber:5, icon: data.daily.data[5].icon, temperatureMax: data.daily.data[5].temperatureMax, temperatureMin: data.daily.data[5].temperatureMin},
      {citykey:data.key, daynumber:6, icon: data.daily.data[6].icon, temperatureMax: data.daily.data[6].temperatureMax, temperatureMin: data.daily.data[6].temperatureMin}
    ];    

    var dailyStore = transaction.objectStore("daily");
    
    for(var i=0;i<itemDaily.length;i++){
      // add our newItem object to the object store
      var dailyRequest = dailyStore.add(itemDaily[i]);
      dailyRequest.onerror =function() {
          console.log("dailyRequest.onerror");
      }
      dailyRequest.onsuccess = function(event) {        
          // report the success of our new item going into the database
          console.log('dailyRequest: New item added to database');        
      }; 
    }
  }

  app.initIndexedDb();  
  //app.updateForecastCard(injectedForecast);
*/
})();
