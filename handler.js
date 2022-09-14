const  { initialize, retriveMessageFromId,generateTextFromMail,getUserInfoFromCred }  = require("./utils/mail.js");
var aws = require('aws-sdk');
const { formatMonth } = require("./utils/misc.js");
var lambda = new aws.Lambda({
  region: 'ap-south-1' //change to your region
});
let gmailList
module.exports.hello = async (event,context,callback) => {
  console.log(event)
  const {tokens, usedApps} = event
  //event
//   {
//     "tokens": [{
//       "access_token": "ya29.a0AVA9y1sbkcwBBpdWgMoGCGjovyGvD08Y6QDHAyX-UCF9AFPkjzLPnoFHpq3TazYeOF5fjyXts9xoAaKb_ZBxpGb002e3jNyseseoGvbl2Xvzwd039Z1BehDOVb3n5gdFe6Cv51p1VAip82kpDuoVIUYOMpBIaCgYKATASAQASFQE65dr8akRdeEMsXj52P63MVBrjrg0163",
//       "expiry_date": 1662647182732,
//       "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU4NDdkOTk0OGU4NTQ1OTQ4ZmE4MTU3YjczZTkxNWM1NjczMDJkNGUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgwMzUwMzM1OTA5MzY1NDk2NTkiLCJlbWFpbCI6InBhZGhpc2lkZGhhcnRoMzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI0QUlvM2pibmlhaThSUlEzZVpJYjBRIiwibmFtZSI6IlNpZGRoYXJ0aCBQYWRoaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BSXRidm1uejVGYUJvRzVRRGEwU0JpU25kaUlNajBxd2YzbXF6WFFRN0ZPRj1zOTYtYyIsImdpdmVuX25hbWUiOiJTaWRkaGFydGgiLCJmYW1pbHlfbmFtZSI6IlBhZGhpIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NjI2NDM1ODQsImV4cCI6MTY2MjY0NzE4NH0.fZeLjp_lofanPLs6tmVGufSOCgHm16WcImIL5Rb2Bi3P2oLieklahNtORmrADCkizAzYBwKg-G1PUbBYRu4uayxECV0Rk6TY90CawQT_bl3r_a4iyUB3xL7_mbA_B65HEIY-32mfuuiD3lgrEwmVEXtiQ8Nu_zgkLWWe9B0n9OIyFRdbXojg7q68DoFF61tHPtpaGbAoNCZbFs2Kjk1X98rAwCTR1FIu9sngyCifsk5TRwrYZaHDl99QNrhXdvLm_onjv0dFmRiRKNzZgnajOFBMLQ6JRzSOaV8uDXdYjhci7FKFpFLscRrqrOiFCaCqIH_t55r-hQswnm51qZ_cvQ",
//       "refresh_token": "1//0gdm8mkSYIaZpCgYIARAAGBASNwF-L9Ir-OJUdnlB_vM65o7YOYAbvWBLgmUmcoR42kq8BnoLNuwXluJolzcZXk4wfmhLT_eoMBg",
//       "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/gmail.readonly",
//       "token_type": "Bearer"
//      }],
//    "usedApps":["Flipkart Pay Later"]
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
    },
    simpl:{
      due:'Your Simpl bill of is due',
      paid:'Payment of received Current due simpl'
    }
  };
  const fromTable = {
    simpl:{ from: 'bpadhi499@gmail.com'},
    'Flipkart Pay Later':{from: 'bpadhi499@gmail.com'}
  }
  let billDetails = {}
usedApps.forEach(app=> billDetails[app] = {due:0,paid:0})

  function calculate(dueArray, paidArray){
    console.log(dueArray, paidArray)
    let Month = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let currMonth
    if(new Date().getMonth()) currMonth = Month[new Date().getMonth()-1] 
    else currMonth = Month[11]
    // this currmonth is the previous month on which bill is generated
    let total_dues = 0
    dueArray.map(app=>{
        //console.log('app',app)
        if(app.length){
          app.map(bill=>{
            console.log(Math.max(parseFloat(bill.amount_due ? bill.amount_due : 0), billDetails[bill.appName].due ))
            
            console.log(formatMonth(currMonth), formatMonth(bill.bill_month)) 
            if(formatMonth(currMonth) == formatMonth(bill.bill_month)){
              billDetails[bill.appName] = {... billDetails[bill.appName], ...bill}
              delete billDetails[bill.appName]['amount_due'] 
              billDetails[bill.appName].due = Math.max(parseFloat(bill.amount_due ? bill.amount_due : 0), billDetails[bill.appName].due )
              console.log('11',billDetails)
            }
          })
        }
    })
    console.log('bill',billDetails)
    paidArray.map(app=>{
        if(app.length){

          app.map(bill=>{
            
            if(Object.keys(bill).length && formatMonth(currMonth) == formatMonth(bill.bill_month)){
              billDetails[bill.appName] = {... billDetails[bill.appName], ...bill}
              delete billDetails[bill.appName]['paid_amount']
              if(billDetails[bill.appName].paid != bill.paid_amount) billDetails[bill.appName].paid += bill.amount_due
            }
          })
        }
    })
    console.log('bill')
    for (const [key, value] of Object.entries(billDetails)) {
      if(value.paid) billDetails[key].due-= value.paid
      total_dues += billDetails[key].due
    }
    billDetails = {...billDetails, total_dues}
    return billDetails
  }


  async function getMailReport(){
    return new Promise(async(resolve, reject)=>{
      try {
        let res = await Promise.all(gmailList.map(gmail=> resolveGmailClients(gmail)))
        //console.log('res',res)
        let final_bills = {}
        res.map(bill=> final_bills = {...final_bills, ...bill})
        resolve(final_bills)
        
      } catch (error) {
        reject(error)
      }

  })
  }
  async function resolveGmailClients (gmail) {
    return new Promise(async(resolve, reject)=>{
      try {
        DueMailList = 
        await Promise.all(
          usedApps.map((appName) =>
            resolveAppSpecific(gmail, searchPhrase[appName].due, appName, fromTable[appName].from)
          )
        )
      PaidMailList = 
        await Promise.all(
          usedApps.map((appName) =>
          resolveAppSpecific(gmail, searchPhrase[appName].paid, appName,fromTable[appName].from) 
          )
        )
      
        let cal = calculate(DueMailList,PaidMailList)
      //console.log('a',cal)
    resolve(cal) 
        
      } catch (error) {
        reject(error)
        
      }

    })
  }
  async function resolveAppSpecific(gmail,search,appName,from){
    return new Promise(async(resolve, reject)=>{
      const {email} = await getUserInfoFromCred(tokens[0])
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      gmail.users.messages.list(
        {
          userId: "me",
          q: `after: ${month}/01/${year} AND ${search}`,
        },
        async (err, res) => {
          //console.log(err, res)
          if (err) reject("The API returned an error: " + err);
          else {
            //console.log("data", res.data);
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
      try {
        let message = await retriveMessageFromId(gmail,messageId)
        message = await formatMail(message,appName)
        //console.log('c',message)
        resolve(message)
        
      } catch (error) {
        console.log('error',error)
        reject(error)
        
      }

    })
  
  }
  async function analyzeEmail(mail,appName){
    return new Promise(async(resolve,reject)=>{
      //console.log(mail)
      lambda.invoke({
        FunctionName: 'email-analysis-dev-hello',
        Payload: JSON.stringify({'email': mail, 'appName': appName}) // pass params
      }, function(error, data) {
        if (error) {
          console.log(error)
         reject(error);
        }
        if(data.Payload){
          //console.log(JSON.parse(data.Payload))
         resolve(JSON.parse(data.Payload))
        }
      });
    })
  }
  async function formatMail(message,appName){
    return new Promise(async(resolve,reject)=>{
      //console.log('rr',message)
      try {
        let a = await generateTextFromMail(message)
        a = await analyzeEmail(a,appName)
        //console.log('email',a)
        resolve(a)
        
      } catch (error) {
        reject(error)
      }
      // console.log('name',a)

      //console.log('re',a)
      
      
    })
  }
  try {
    gmailList = await Promise.all(tokens.map(token=> initialize(token)))
    let res = await getMailReport()
    let resObject = {
      statusCode: 200,
      res: res
    }
    //console.log('res')
    return callback(null, resObject);
    
  } catch (error) {
    console.log('error',error)
    //lambda return error here
    var myErrorObj = {
      "isBase64Encoded" : false,
      "statusCode": 500,
      "body": error
    }
    return callback(null, myErrorObj);
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
