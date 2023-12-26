function getGST(amount, gst, CB) {
    setTimeout(() => {
        if (typeof (amount) != 'number') {
            return CB('provide number')
        }
        if (typeof (gst) != 'number') {
            return CB('provide gst in % number')
        }
        let gstpercent = gst == 0 ? 18 : gst;
        let getamount = gstpercent * amount / 100
        // let getwithgst = getamount + gstpercent
        return CB(null, getamount)
    }, 2000)
}
getGST(500, 0, (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log("gst percet", data)
});


//gst with amount
function getwithgst(amount, gst, CB) {
    setTimeout(() => {
        if (typeof (amount) != 'number') {
            return CB('provie amount as number')
        }
        if (typeof (gst) != 'number') {
            return CB('provide gst in %')
        }
        let gstpercent = gst == 0 ? 18 : gst;
        getamount = gstpercent * amount / 100 + amount;
        return CB(null, getamount)

    }, 2000)
}
getwithgst(500, 0, (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log('gst with amount', data)
})

//discount
function getAfterdiscount(amount, discount, CB) {
    setTimeout(() => {
        if (typeof (amount) != 'number') {
            return CB('provide amount  as number')
        }
        if (typeof (discount) != "number") {
            return CB('provide discount as in %')
        }
        let afterdiscount = amount - (amount * discount / 100)
        return CB(null, afterdiscount);
    }, 2000)

}
getAfterdiscount(500, 10, (error, data) => {
    if (error) {
        console.log('error', error)
    }
    console.log('after discount amount will be', data)
})


//getfinalamount
function getfinalamount(amount, gst, discount, CB) {
    setTimeout(() => {
        if (typeof (amount) != 'number') {
            return CB('provide number')
        }
        if (typeof (gst) != 'number') {
            return CB('provide gst in % number')
        }
        if (typeof (discount) != "number") {
            return CB('provide discount as in %')
        }
        let gstpercent = gst == 0 ? 18 : gst;
        let getamount = gstpercent * amount / 100 + amount

        let finaldiscount = getamount - discount * getamount / 100
        return CB(null, finaldiscount)

    }, 2000)
}
getfinalamount(500, 0, 10, (error, data) => {
    if (error) {
        console.log('error', error)
    }
    console.log('final amount will be', data)

})



