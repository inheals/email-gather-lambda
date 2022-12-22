module.exports.formatMonth = (month) => {
    console.log(month)
    if(month == undefined) return month
    month = month.toLowerCase()
    if(month == 'jan' || month == 'january') return '01'
    if(month == 'feb' || month == 'february' ) return '02'
    if(month ==  'mar' || month == 'march') return '03'
    if(month == 'apr' || month == 'april') return '04'
    if(month == 'may') return '05'
    if(month == 'jun' || month == 'june') return '06'
    if(month == 'jul' || month == 'july') return '07'
    if(month == 'aug' || month == 'august') return '08'
    if(month == 'sep' || month == 'sept' || month == 'september') return '09'
    if(month == 'oct' || month == 'october') return '10'
    if(month == 'nov' || month == 'november') return '11'
    if(month == 'dec' || month == 'december') return '12'
    else return month

}

module.exports.buildEmailSearchString = (emails) =>{
    str = ''
    emails.forEach(email => {
        str = str + `to:${email}` + ' '
    });
    return str
}

module.exports.convertAmountStringToInt = (amount) => {
    console.log('fgfg',typeof(amount))
    if (typeof( amount) == "number"){
        return amount
    }
    if (typeof(amount) == "undefined"){ 
        return 0
    }else{
        amount = amount.replace(/\,|\-_/g,'')
        return parseFloat(amount)
    }

}