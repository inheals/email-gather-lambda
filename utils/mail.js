const {google} = require('googleapis');
const {promisify} = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const { convert } = require('html-to-text');
module.exports.getOAuthClient = async() =>{
    const content = await  readFileAsync('./secret.json');
const credentials = JSON.parse(content); //credential
//authentication
//console.log(credentials)
const clientSecret = credentials.web.client_secret;
const clientId = credentials.web.client_id;
const redirectUrl = credentials.web.redirect_uris[0];
const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);
return oauth2Client;
}
module.exports.initialize = (token) => {
    // console.log('a', token)
    return new Promise(async(resolve,reject)=> {
        try{
            let oAuth2Client = await this.getOAuthClient()
            oAuth2Client.setCredentials(token);
            const gmail = google.gmail({version: 'v1', auth: oAuth2Client});
            // console.log('gmail', gmail)
            resolve(gmail)

        }catch(err){
            // console.log(err)
            reject(new Error(err))

        }
    })
}
module.exports.checkValidEmail = (MailObject, fromDomainName) => {
   //
        let headers = MailObject.payload.headers
        // console.log('header',headers)
        let header = headers.filter(header=> header.name == 'From')
        header = header[0].value
        from = header.split(/[\s,.-]+/)[0].toLowerCase().replace(/[^\s\w\d]/,'')
        // console.log('from',from)
        if(from ==fromDomainName) return(true)
        else return(false)
    // })
}

module.exports.generateTextFromMail = async(MailObject) => {
    return new Promise((resolve,reject)=>{
        let payload = MailObject.payload
        console.log('payload',payload.mimeType == 'text/html')
        if(payload.mimeType == 'plain/text'){{resolve(new Buffer.from(payload.body.data.toString('utf-8'),'base64').toString('utf-8'))}}
        else if(payload.mimeType == 'text/html') {
            console.log('fdffgdgf')
            resolve(new Buffer.from(payload.body.data.toString('utf-8'),'base64').toString('utf-8'))}
        else if(payload.mimeType == 'multipart/alternative' || payload.mimeType == 'multipart/mixed'){
            resolve(convert(manageMultipart(payload.parts),{}))
        }
    })
}

function manageMultipart(parts){
    //console.log('part',parts)
    if( parts == undefined) return []
    let text = parts.filter(part=> {
        return part.mimeType == 'text/plain'
    })
    //console.log('text',text)
    let html = parts.filter(part=>{
        return part.mimeType == 'text/html'
    })
    let multipart = parts.filter(part=>{
        return (part.mimeType == 'multipart/alternative')
    })
    console.log('text',html.length)
    if(html != undefined && html.length){
        return new Buffer.from(html[0].body.data.toString('utf-8'),'base64').toString('utf-8')
    }
     else if(multipart != undefined && multipart.length) return manageMultipart(multipart[0].parts)

}

module.exports.retriveMessageFromId = (gmail, id) => {
    return new Promise((resolve, reject)=>{
        return gmail.users.messages.get({id: id,userId:'me'},(err,res)=>{
            if(err) reject(err)
            else resolve(res.data)
        })
    })
}

module.exports.getUserInfoFromCred = (credentials) =>{
    return new Promise(async(resolve,reject)=>{
       let oAuth2Client = await this.getOAuthClient()
    //    console.log(oAuth2Client)
       oAuth2Client.setCredentials({...credentials})
      let oAuth2 = google.oauth2({
        auth: oAuth2Client,
        version:'v2'
       })
       oAuth2.userinfo.get((err,data)=>{
        // console.log(err)
        if(err) reject(err)
        else resolve(data.data)
       })
    })
}