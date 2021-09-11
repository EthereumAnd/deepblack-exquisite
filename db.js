var openSeaCallback = function (responseText) {
    console.log(responseText);
}

function db() {
    console.log("init");
    setInterval(function () {
        console.log("about to ht ope");
        getLatestSales(5, openSeaCallback)
    }, 30 * 1000); // 60 * 1000 milsec
}

function getLatestSales(n, callback) {
    const url = "https://api.opensea.io/api/v1/events?asset_contract_address=0xd70f41dd5875eee7fa9dd8048567bc932124a8d2&event_type=successful&only_opensea=false&offset=0&limit=" + n;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}
