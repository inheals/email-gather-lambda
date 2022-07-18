const {google} = require('googleapis');
const {promisify} = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
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
    console.log('a', token)
    return new Promise(async(resolve,reject)=> {
        try{
            let oAuth2Client = await this.getOAuthClient()
            oAuth2Client.setCredentials(token);
            const gmail = google.gmail({version: 'v1', auth: oAuth2Client});
            resolve(gmail)

        }catch(err){
            console.log(err)
            reject(err)

        }
    })
}

module.exports.generateTextFromMail = async(MailObject) => {
    return new Promise((resolve,reject)=>{
        let payload = MailObject.payload
        if(payload.mimeType == 'plain/text'){return ''}
        else if(payload.mimeType == 'text/html') {return ''}
        else if(payload.mimeType == 'multipart/alternative' || payload.mimeType == 'multipart/mixed'){
            resolve(manageMultipart(payload.parts))
        }
    })
}

function manageMultipart(parts){
    //console.log('part',parts)
    if( parts == undefined) return []
    let text = parts.filter(part=> {
        return part.mimeType == 'text/plain'
    })
    let html = parts.filter(part=>{
        return part.mimeType == 'text/html'
    })
    let multipart = parts.filter(part=>{
        return (part.mimeType == 'multipart/alternative')
    })
    //console.log('muilti',multipart)
    if(text.length){
        return new Buffer(text[0].body.data.toString('utf-8'),'base64').toString('utf-8')
    }else if(html.length){
        return html
    }else if(multipart.length) return manageMultipart(multipart[0].parts)

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
       console.log(oAuth2Client)
       oAuth2Client.setCredentials({...credentials})
      let oAuth2 = google.oauth2({
        auth: oAuth2Client,
        version:'v2'
       })
       oAuth2.userinfo.get((err,data)=>{
        if(err) reject(err)
        else resolve(data.data)
       })
    })
}