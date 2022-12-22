const  { initialize, retriveMessageFromId,generateTextFromMail,getUserInfoFromCred, checkValidEmail, }  = require("./utils/mail.js");
var aws = require('aws-sdk');
const { formatMonth, buildEmailSearchString,convertAmountStringToInt } = require("./utils/misc.js");
var { convert } = require('html-to-text');
var process = require('process')
var lambda = new aws.Lambda({
  region: 'ap-south-1' //change to your region
});
let gmailList
module.exports.hello = async (event,context,callback) => {
  console.log(event)
  const {tokens, usedApps} = 
  // event
  // event
  {
    tokens: [
      {
    "access_token": "ya29.a0AeTM1icXRCvgjcQOhFYiGS39Idh1OXVJ8V8JhrWfhuci5VQa4_gTvyOKJxVhMN4a6k43_7u1FUdoBbA0W2UbwdppWyaGhN0R1X0I-_KqnVT3wLh6HpDri2XVKK4aevAUPdIpVPBH1E4pndIN19MWreJOrapgaCgYKAYISARISFQHWtWOmVskNIhjQmExsIhvnOPyPaA0163",
    "expiry_date": 1670687332905,
    "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1MmRlMjdmNTE1NzM3NTM5NjAwZDg5YjllZTJlNGVkNTM1ZmI1MTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE2MzE5NTQwMTQ5MDc2ODA4OTMiLCJlbWFpbCI6ImJpc3dhaml0YXBwMTA0NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjdjcmlCZmVVUGNjM0FXdWlYdVR1d3ciLCJuYW1lIjoiQmlzd2FqaXQgU2FodSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA1WHFSV0s2b0JGSHd4eVFwRHhOU1ZNUzZ0aXhwUW5WUzV3bXNWNj1zOTYtYyIsImdpdmVuX25hbWUiOiJCaXN3YWppdCIsImZhbWlseV9uYW1lIjoiU2FodSIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNjcwNjgzNzMzLCJleHAiOjE2NzA2ODczMzN9.I3bvI2Of2Fe8HhFxUKAbXVTUyE9QrrkJIskYjJN_PWEcuwIxrzOW7d-phuwnd-Y1hbdXIjVFXOeGHpG8K4I3gusboRRVnZ9WKf5NmwVnixC6JrQeBndQGyg_konpIUmZoWrkAPU5PKFhP8-aRyFRHDHHdXkkRxe9UCtvRY9idxVsX2BwM1KlRTRVTeYNsmt_QTRbADGc_7utiTuvpO1hM4YK5vcW1rTj_cSijGuyGSAlJjPsAEF2EdnDovC9bcNJJSoeMdgijBKQuBGfcvZwwL4hiyNITNb4rKZIXPWI7oUxJ_QckUEIT6A0I8L-LqYpyqcxr7NgTHI4Yu4hiGNFbQ",
    "refresh_token": "1//0gvqWQo2QrgqZCgYIARAAGBASNwF-L9IrczN5T8jGXYX8L-Q4dDyHXjwI6KY2Z5RnC0hY-JSQAlOC3R1pV9DtFNmrS2r5GideVik",
    "scope": "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/gmail.readonly",
    "token_type": "Bearer"
   },
   {
    "access_token": "ya29.a0AX9GBdWJAbkOIYguze3aajZ5z4uhqf8x3UepEVr2idcMRPACWoRY7IvTa9cYaa3FK7vwof-dvpOwS_tFkwEtgr4E76OaG-RKZVr984H2fdV8SJ4l7U1bjgqJDT1PqO6J5e0ec4ZMimQs2qsEj8N9AC6ofr-TaCgYKAQ8SARESFQHUCsbCgBctBvEXUhUu7Ci_YoT6vQ0163",
    "expiry_date": 1671447211193,
    "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhjMjdkYjRkMTNmNTRlNjU3ZDI2NWI0NTExMDA4MGI0ODhlYjQzOGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MzAyOTk1MDU0NDMtY2lhNHVhOG0wbWllMnIzaWRoOWw1MHI0OXB2bDc4YTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgwMzUwMzM1OTA5MzY1NDk2NTkiLCJlbWFpbCI6InBhZGhpc2lkZGhhcnRoMzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIwUjFWTWFyZFYxVTVDQXM5UmN4S3l3IiwibmFtZSI6IlNpZGRoYXJ0aCBQYWRoaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA0Z0NybUROek9xTzg3V1lWdFVaUkRwRlB5VF9jWVNVVUZYY0s2UT1zOTYtYyIsImdpdmVuX25hbWUiOiJTaWRkaGFydGgiLCJmYW1pbHlfbmFtZSI6IlBhZGhpIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NzE0NDM2MTIsImV4cCI6MTY3MTQ0NzIxMn0.LnHRqltSQdCEbY-ltxo6WWOp1AcWU3vEww1sHd7Cahyfke0b1p4cKSkj-hyHxQm9MV8ZZNDlZdekO0oKp45NQVa7i_ewHZ3bNpYO2B5UpeyMvoc3idmmYtsqy6K8HJDB17UYg0-ei_baH0gGcZVckZh03itL_LRRtnT2WY9DCV0TNkMTLpnQi5EVs5o7FLNk1k0Xw29MENLFyhw1EPGNqPje7OsOOvAF8ZZaiha5PsZbUVMoGydeW4GLhVxTTnqseMjmGzsigJ57FsqM7zHkFC205aicKw6gVtuzj7AdIy6xCHsuDxWCJ2VZdPMaskRg8oi9YEPqH0ksVQUZZyF-lg",
    "refresh_token": "1//0gEueHFCZSCYvCgYIARAAGBASNwF-L9Ir3RYPuq4YJqOtmcGK0kmEqxzpnqSWMex4GckZlGbWfKoZKedICi0iuJKiiYcEDOR1WlU",
    "scope": "openid https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    "token_type": "Bearer"
   }

    ],
    usedApps: [ 'Flipkart Pay Later', 'Amazon Pay Later','simpl' ]
  }
  
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
    slice:{
      due: "Card dues to be paid in full",
      paid: "Slice your repayment successful",
    },
    simpl:{
      due:'Your Simpl bill of is due',
      paid:'has been received for your Simpl account on'
    },
    freecharge:{
      due:'Thank you for using Freecharge Pay Later. Your bill details are given below.',
      paid:'Freecharge Pay Later Bill Payment Successful!'
    },
    'Amazon Pay Later':{
      due: 'Auto repayment reminder: Amazon Pay Later repayment is due on',
      paid: 'Amazon Pay Later repayment successful'
    }
  };
  const fromTable  = {
    'simpl':{ from: 'simpl'},
    'Flipkart Pay Later':{from: 'flipkart'},
    'freecharge':{from: 'freecharge'},
    'slice':{from: 'slice'},
    'amazonPayLater':{from: 'slice'}
  }
  let billDetails = {}
usedApps.forEach(app=> billDetails[app] = {due:0,paid:0}) 

  function calculate(dueArray, paidArray){
    //console.log(dueArray, paidArray)
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
            //console.log(Math.max(parseFloat(bill.amount_due ? bill.amount_due : 0), billDetails[bill.appName].due ))
            //console.log('yes',formatMonth(bill.bill_due_month) , new Date().getMonth().toString())
            if(bill.bill_due_month && formatMonth(bill.bill_due_month) == new Date().getMonth().toString()){
              billDetails[bill.appName] = {... billDetails[bill.appName], ...bill}
              delete billDetails[bill.appName]['amount_due'] 
              billDetails[bill.appName].due = Math.max(parseFloat(convertAmountStringToInt(bill.amount_due) ? convertAmountStringToInt(bill.amount_due) : 0), billDetails[bill.appName].due )
              // console.log('11',billDetails)
            }
          })
        }
    })
    //console.log('bill',billDetails)
    paidArray.map(app=>{
        if(app.length){

          app.map(bill=>{
            
            if(bill.bill_paid_month && Object.keys(bill).length && formatMonth(bill.bill_due_month) == new Date().getMonth().toString()){
              billDetails[bill.appName] = {... billDetails[bill.appName], ...bill}
              delete billDetails[bill.appName]['paid_amount']
              if(billDetails[bill.appName].paid != Math.max(convertAmountStringToInt(bill.paid_amount))) billDetails[bill.appName].paid += Math.max(convertAmountStringToInt(bill.paid_amount))
            }
          })
        }
    })
    // console.log('bill', billDetails)
     Object.entries(billDetails).map(([key, val]) => {if(val.paid) billDetails[key].due-= val.paid})
    // for (const [key, value] of Object.entries(billDetails)) {
    //   //console.log(key,value)
    //   // console.log(value.paid)
    //   if(value.paid) billDetails[key].due-= value.paid
    //   // //console.log(billDetails[key].due)
    //   // total_dues += billDetails[key].due
    // }

    Object.entries(billDetails).map(([key, value])=> {
      total_dues += convertAmountStringToInt(billDetails[key].due)
   })
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
       // console.log(error)
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
      const emails = await Promise.all(tokens.map(token=> getUserInfoFromCred(token)  ))
      let email = buildEmailSearchString(emails.map(email=> email.email))
      // console.log('email',email)
      const year = new Date().getFullYear()
      const month = new Date().getMonth()
      console.log('ffvff',month,year)
      gmail.users.messages.list(
        {
          userId: "me",
          q: `after:${11}/11/${year} AND ${search}`,
          //q: `${search}`,
        },
        async (err, res) => {
          //console.log(err, res)
          if (err) {
            console.log(err)
            reject("The API returned an error: " + err);}
          else {
            console.log("data", res.data);
            if(res.data.messages){
              ans = await Promise.allSettled(res.data.messages.map(message=> resolveMessageList(gmail,message.id,appName)))
              ans = ans.filter(a=> a.status != 'rejected')
              ans = ans.map(a=> a.value)
             // console.log('ans', ans)
              resolve(ans)
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
        //console.log('message',message)
        message = await formatMail(message, appName)
        //console.log('dd', message)
        resolve(message)
        // if(checkValidEmail(message, fromTable[appName].from)){
        //   message = await formatMail(message,appName)
        //   //console.log(message)
        //   resolve(message)
        // }else reject("error")
        

        //console.log('c',message)
        
        
      } catch (error) {
       // console.log('error',error)
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
        console.log('lamb',JSON.parse(data.Payload))
         resolve(JSON.parse(data.Payload))
        }
      });
    })
  }
  async function formatMail(message,appName){

    return new Promise(async(resolve,reject)=>{
      
      try {
        let a = await generateTextFromMail(message)
         console.log('messagell',a)
         //console.log(process.memoryUsage())
        a = await analyzeEmail(a,appName)
        //console.log('email',a)
        resolve(a)
        
      } catch (error) {
        console.log(error)
        reject(error)
      }
      // console.log('name',a)

      //console.log('re',a)
      
      
    })
  }
  try {
    gmailList = await Promise.all(tokens.map(token=> initialize(token)))
    //console.log(gmailList)
    let res = await getMailReport()
    let resObject = {
      statusCode: 200,
      res: res
    }
    //console.log('res')
    return callback(null, resObject);
    
  } catch (error) {
    console.log(error)
    //console.log('error',error)
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
