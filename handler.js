const  { initialize, retriveMessageFromId,generateTextFromMail,getUserInfoFromCred }  = require("./utils/mail.js");
var aws = require('aws-sdk');
var lambda = new aws.Lambda({
  region: 'ap-south-1' //change to your region
});

module.exports.hello = async (event) => {
  console.log(event)
  const {tokens, usedApps} =  event
//   {
//     "tokens": [{
      
//   access_token: 'ya29.A0ARrdaM_-DZwD7L-4imfqi53kjJnZTlmPLb3-b6FtjJKhn8JYuLyRMl2qxfh43Y6kJWngYigdKoKsUPG4brSZzlKwVCj1ijdSJ76tuzTnq8XplgKrQsztZY1fRWuY2AuwELm5B-hMVM5YIEsUnB47z4KPndLfYUNnWUtBVEFTQVRBU0ZRRl91NjFWZ09JWDVZZDZTVEJqRmFBME1sZ2Vldw0163',
//   id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI2NTBhMmNlNDdiMWFiM2JhNDA5OTc5N2Y4YzA2ZWJjM2RlOTI4YWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgwMzUwMzM1OTA5MzY1NDk2NTkiLCJlbWFpbCI6InBhZGhpc2lkZGhhcnRoMzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJNVGJRNWtWNXludHE2TmdNQTVBRHV3IiwibmFtZSI6IlNpZGRoYXJ0aCBQYWRoaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BSXRidm1uejVGYUJvRzVRRGEwU0JpU25kaUlNajBxd2YzbXF6WFFRN0ZPRj1zOTYtYyIsImdpdmVuX25hbWUiOiJTaWRkaGFydGgiLCJmYW1pbHlfbmFtZSI6IlBhZGhpIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NTcwMzc2MjgsImV4cCI6MTY1NzA0MTIyOH0.Erbe8HKY--I6YczRmXOa0eIyHGtqm2LCTpE-0pHfhUW7xsCShOqFnldLy-9Wc7mc1lT73duNNY9Ji_Nj08U6d0Q5LFQO5mI-hRdhkKhkRrNpF7TEafmGvR7O3waLwUEXXyxzLb-Yt3JssqdGvJLkVbTao2qxBj4Pr9ML_AOWxSCrL1j0vOLQP06uVgvAn5XFfn4s64LGVPO95-i76UAhrFtgLGZzgzhoHJzDl-1VzrLxLXYbzkccR5FMUS5menbbo_ybfIKNvlIQfnPluEchJAy4wpK3jsKfV6qlXjuROIW50IPgo3N_fsH1BR-1jpF3A1xR6VrEeSOM7fxXid3NZA',
//   refresh_token: '1//0gyFDdr_vloXfCgYIARAAGBASNwF-L9IreoNXQjVEfFpSUiBsoTpmi2D5gG9j1TK4b1SgP0zEjNudqqZqZySKQR5od_KDcl3sVQw',
//   token_type: 'Bearer',
//   scope: 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
//   expiry_date: 1657041227297
//     }],
//    "usedApps":["flip"]
// }
  
  //JSON.parse(event.body)
  const searchPhrase = {
    'Flipkart Pay Later': {
      due: "Flipkart Pay Later statement for",
      paid: "Your Flipkart Pay Later bill payment was successful",
    },
    ola: {
      due: "you paid towards olamoney ",
      paid: "Your Ola Money Postpaid payment is now due",
    },
    Slice:{
      due: "slice payment reminder",
      paid: "Slice payment successful",
    }
  };
  let billDetails = {}
usedApps.forEach(app=> billDetails[app] = {due:0,paid:0})

  function calculate(dueArray, paidArray){
    let Month = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let currMonth
    if(new Date().getMonth()) currMonth = Month[new Date().getMonth()-1] 
    else currMonth = Month[11]
    dueArray.map(app=>{
        console.log('app',app)
        if(app.length){
          app.map(bill=>{
            billDetails[bill.appName] = {... billDetails[bill.appName], ...bill}
            delete billDetails[bill.appName]['amount_due']
            if(currMonth == bill.bill_month){
              billDetails[bill.appName].due = Math.max(parseFloat(bill.amount_due), billDetails[bill.appName].due)
            }
          })
        }
    })
    console.log('bill',billDetails)
    paidArray.map(app=>{
        if(app.length){
          billDetails[bill.appName] = {... billDetails[bill.appName], ...bill}
          delete billDetails[bill.appName]['paid_amount']
          app.map(bill=>{
            if(Object.keys(bill).length && currMonth == bill.bill_month){
              if(billDetails[bill.appName].paid != bill.paid_amount) billDetails[bill.appName].paid += bill.due_amount
            }
          })
        }
    })
    for (const [key, value] of Object.entries(billDetails)) {
      if(value.paid) billDetails[key].paid-= value.paid
    }
    return billDetails
  
    
  }

  const gmailList = await Promise.all(tokens.map(token=> initialize(token) ))
  async function getMailReport(){
    return new Promise(async(resolve, reject)=>{
      let res = await Promise.all(gmailList.map(gmail=> resolveGmailClients(gmail)))
      console.log('res',res)
      let final_bills = {}
      res.map(bill=> final_bills = {...final_bills, ...bill})
      resolve(final_bills)
  })
  }
  async function resolveGmailClients (gmail) {
    return new Promise(async(resolve, reject)=>{
      DueMailList = 
        await Promise.all(
          usedApps.map((appName) =>
            resolveAppSpecific(gmail, searchPhrase[appName].due, appName)
          )
        )
      PaidMailList = 
        await Promise.all(
          usedApps.map((appName) =>
          resolveAppSpecific(gmail, searchPhrase[appName].paid, appName)
          )
        )
      
        let cal = calculate(DueMailList,PaidMailList)
      console.log('a',cal)
    resolve(cal) 
    })
  }
  async function resolveAppSpecific(gmail,search,appName){
    return new Promise(async(resolve, reject)=>{
      const {email} = await getUserInfoFromCred(tokens[0])
      const year = new Date().getFullYear()
      const month = new Date().getMonth() +1
      gmail.users.messages.list(
        {
          userId: "me",
          q: `after:${new Date(`${month}/01/${year}`).getTime() / 1000} AND ${search}`,
        },
        async (err, res) => {
          //console.log(err, res)
          if (err) reject("The API returned an error: " + err);
          else {
            console.log("data", res.data);
            if(res.data.messages){
              resolve(await Promise.all(res.data.messages.map(message=> resolveMessageList(gmail,message.id,appName))))
            }else{
              resolve([])
            }
           // resolve(res.data);
          }
  
          // message = await retriveMessageFromId(gmail, res.data.messages[0].id)
          // a = new Buffer.from(message.payload.parts[0].body.data.toString('ascii'), 'base64')
          // console.log(a.toString('ascii'))
          // res1.send(a)
        }
      );
  
    })
  }
  async function resolveMessageList(gmail,messageId,appName){
    return new Promise(async(resolve,reject)=>{
      let message = await retriveMessageFromId(gmail,messageId)
      message = await formatMail(message,appName)
      //console.log('c',message)
      resolve(message)
    })
  
  }
  async function analyzeEmail(mail,appName){
    return new Promise(async(resolve,reject)=>{
      lambda.invoke({
        FunctionName: 'email-analysis-dev-hello',
        Payload: JSON.stringify({'email': mail, 'appName': appName}) // pass params
      }, function(error, data) {
        if (error) {
          console.log(error)
         reject(error);
        }
        if(data.Payload){
          console.log(JSON.parse(data.Payload))
         resolve(JSON.parse(data.Payload))
        }
      });
    })
  }
  async function formatMail(message,appName){
    return new Promise(async(resolve,reject)=>{
      console.log('rr',message)
      let a = await generateTextFromMail(message)

      a = await analyzeEmail(a,appName)
      console.log('dddddd')
      // console.log('name',a)
      resolve(a)
      //console.log('re',a)
      
      
    })
  }
  let res = await getMailReport()
  return res
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
