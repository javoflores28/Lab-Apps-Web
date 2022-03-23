//const { json } = require("express/lib/response");

var map = L.map('map').setView([19.284076,-99.1355524], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoibHVpc2pvc2U1IiwiYSI6ImNsMDc0dDVtMjAza3gzanM4d3J0ZnMzbzgifQ.NfkxFbGmErrf6AayBjmuXg'
}).addTo(map);

//Adding a marker
L.marker([19.284076,-99.1355524], title='test').addTo(map);
L.marker([19.285086,-99.136590], title='test').addTo(map);


//AJAX para añadir las bicis

$.ajax({
    dataType: "json", 
    url : "api/bicicletas",
    success: function(result){
        console.log(result)
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        })
    }
})