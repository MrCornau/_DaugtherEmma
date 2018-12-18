let link = "https://www.amazon.de/Tangle-Teezer-Salon-Midnight-schwarz/dp/B001S261Q6/ref=pd_ys_c_rfy_rp_all_1?_encoding=UTF8&pd_rd_i=B001S261Q6&pd_rd_r=NJFTY4P9SXVGSPF54ZH7&pd_rd_w=buOHU&pd_rd_wg=YbLKD&psc=1&refRID=72MC7P3XKR3H3YHJT1XA";

getData()
    .then(info => checkIfProductsearch(info))
    .then(info => {
        //createNotification
    })



function getData() {
   // console.log("position",document.URL);
    return new Promise((resolve, reject) =>{
       
        $.get(link, function(data){
            let produkt = $(data).find('#prodDetails');
            let n = produkt.text();
            let b = n.split('ASIN=').pop();
            let asin = b.split('&',1);
           // console.log(n.search('ASIN'));
            console.log(asin);

            
        })
    }); 
}

