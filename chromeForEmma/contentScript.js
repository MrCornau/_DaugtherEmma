console.log(location.href);

let getData = () => {

    return new Promise((resolve, reject) => {
        $.get(location.href, function (data) {
           // console.log(data);
            let produkt = $(data).find('#prodDetails');
            let n = produkt.text();
            let b = n.split('ASIN=').pop();
            let asin = b.split('&',1);
           // console.log(n.search('ASIN'));
            console.log(asin);

        })
    })
}

getData()
    .then(info => checkIfProductsearch(info))
    .then(info => {
        //createNotification
    })




