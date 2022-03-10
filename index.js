var listaFilmes = ["https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f1f881062c7307c1f1c289ef5df5ee7e650214ec7e03deced3cf9c19e1c2ac25._RI_V_TTW_.jpg",
"https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg", "https://br.web.img3.acsta.net/img/23/b7/23b757ce995171ae05ba7449c67a47dc.jpg"]

for(var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">")
}

