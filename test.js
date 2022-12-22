const { convert } = require('html-to-text');
// There is also an alias to `convert` called `htmlToText`.

const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta name="viewport" content="width=device-width;initial-scale=1.0; user-scalable=1;">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Flipkart Pay Later Payment Successful</title>
  <meta name="ROBOTS" content="text/html; charset=UTF-8">
  <style type="text/css">
 /* Tablets & mobiles */
 @media only screen and (max-width: 600px) {
 table[class="body-wrapper"],
 a[class="btn"] {
 width: 100% !important;
 }
 td[class="col"] {
 width: 100% !important;
 display: block !important;
 ;
 }
 td[class="bottom-border"] {
 border-right: none !important;
 border-bottom: dashed 1px #b3b3b3 !important;
 }
 td[class="no-right-border"] {
 border-right: none !important;
 }
 #journey{width: 100%;}
 }
 /* Desktop */
 @media only screen and (min-width: 601px) {
 table[class="body-wrapper"] {
 width: 600px !important;
 }
 #journey{width: 70%;}
 }
</style>
  <style type="text/css">
 /*********************************/
 /* Reset CSS styles starts */
 /*********************************/
 body {
 -webkit-font-smoothing: antialiased;
 -webkit-text-size-adjust: 100%;
 -ms-text-size-adjust: 100%;
 width: 100%;
 height: 100%;
 margin: 0;
 padding: 0;
 background-color: #eeeeee;
 font-family: 'Roboto-Regular', Arial, Tahoma, Verdana, sans-serif;
 font-weight: 299px;
 font-size: 13px;
 }
 /* outlook.com / hotmail */
 .ExternalClass {
 width: 100%;
 }
 .ExternalClass,
 .ExternalClass p,
 .ExternalClass span,
 .ExternalClass font,
 .ExternalClass td,
 .ExternalClass div {
 line-height: 100%;
 }
 /* outlook 2007 / 2010 / 2013 */
 table {
 mso-table-lspace: 0pt;
 mso-table-rspace: 0pt;
 }
 img {
 -ms-interpolation-mode: bicubic;
 }
 /* OSX / iOS / windows mobile */
 body {
 -webkit-text-size-adjust: 100%;
 -ms-text-size-adjust: 100%;
 }
 img {
 border: 0px;
 }
 table {
 border-spacing: 0px;
 }
 body,
 div,
 dl,
 dt,
 dd,
 ul,
 li,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 pre,
 form,
 p,
 blockquote,
 th,
 td {
 margin: 0px;
 padding: 0px;
 }
 a:link {
 color: #666666;
 text-decoration: none;
 }
 a:visited {
 color: #666666;
 text-decoration: none;
 }
 a:hover {
 color: #2271B2;
 text-decoration: underline;
 }
 /*********************************/
 /* Email related styles */
 /*********************************/
 .body-wrapper {
 margin: 0px auto;
 }
 .btn {
 background: linear-gradient(to bottom, #007fb8 1%, #6ebad5 3%, #007fb8 7%, #007fb8 100%);
 }
 /* cyrillic-ext */
 @font-face {
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/sTdaA6j0Psb920Vjv-mrzH-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
 unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
 }
 /* cyrillic */
 @font-face {
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/uYECMKoHcO9x1wdmbyHIm3-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
 }
 /* greek-ext */
 @font-face {
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/tnj4SB6DNbdaQnsM8CFqBX-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
 unicode-range: U+1F00-1FFF;
 }
 /* greek */
 @font-face {
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/_VYFx-s824kXq_Ul2BHqYH-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
 unicode-range: U+0370-03FF;
 }
 /* vietnamese */
 @font-face {
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/NJ4vxlgWwWbEsv18dAhqnn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
 unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
 }
 /* latin-ext */
 @font-face {
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/Ks_cVxiCiwUWVsFWFA3Bjn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
 unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
 }
 /* latin */
 @font-face {
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2) format('woff2');
 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
 }
 /* cyrillic-ext */
 @font-face {
 font-family: 'Roboto-Medium';
 font-style: normal;
 src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/ZLqKeelYbATG60EpZBSDy4X0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');
 unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
 }
 /* cyrillic */
 @font-face {
 font-family: 'Roboto-Medium';
 font-style: normal;
 src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/oHi30kwQWvpCWqAhzHcCSIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');
 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
 }
 /* greek-ext */
 @font-face {
 font-family: 'Roboto-Medium';
 font-style: normal;
 src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/rGvHdJnr2l75qb0YND9NyIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');
 unicode-range: U+1F00-1FFF;
 }
 /* greek */
 @font-face {
 font-family: 'Roboto-Medium';
 font-style: normal;
 src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/mx9Uck6uB63VIKFYnEMXrYX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');
 unicode-range: U+0370-03FF;
 }
 /* vietnamese */
 @font-face {
 font-family: 'Roboto-Medium';
 font-style: normal;
 src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/mbmhprMH69Zi6eEPBYVFhYX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');
 unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
 }
 /* latin-ext */
 @font-face {
 font-family: 'Roboto-Medium';
 font-style: normal;
 src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/oOeFwZNlrTefzLYmlVV1UIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');
 unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
 }
 /* latin */
 @font-face {
 font-family: 'Roboto-Medium';
 font-style: normal;
 src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUZBw1xU1rKptJj_0jans920.woff2) format('woff2');
 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
 }
 .header {
 background-color: #027cd5;
 }
</style>
 </head>
 <body style="-webkit-font-smoothing:antialiased; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; width: 100%; height: 100%; margin:10px auto; padding:0; background-color:#F1F2F3;font-family: 'Roboto-Regular', Arial,Tahoma,Verdana,sans-serif;font-weight:300;font-size:13px;text-align:center;">
  <img style="width:1px;height:1px;" src="http://l.flipkart.com/t/open/Pqt5dGC5tS9HKrZzbsZoVI7MNe8B2zIOaIvOqDOaC_5jG_br77Pl1XYUs214iGawCG-v5NWjP_yAwuLdKUp0VmbypM4BJ9mJx0IodGJjuqN3j9uKgTYxjWk9-aw-gonQdGr7YMoNo9yCPEx8pC57B41KSVWcNm9Tlm76gofVCdbLF_tcvk8pAXbkKgc6oqwxUcczdVqtCeLS4BFXGLPCKZaHjFStykN7L76bP0ZVdhJA2HRS-JYAtSVcm3hwM-9kt3gzknh8fxKy1I05zHuHy38_ePgjSNsr3rffxayPSOyMTNkb66Cou3rBsqEPfsZpRmwE8BSF6bq_WGTYarRSqQ==?e=true">
  <table width="100%" cellspacing="0" cellpadding="0" height="60">
   <tbody>
    <tr style="background: #2175ff">
     <td>
      <table width="100%" style="max-width: 600px; margin: 0 auto;">
       <tbody>
        <tr>
         <td style="width: 50%;text-align: left; padding-left: 16px"> <a style="text-decoration:none;outline:none;color:#ffffff;font-size: 13px;" href="http://l.flipkart.com/t/click/ioUdrLOVu4babyFxhzpH7TjGynp8L5H_QOCxupKAfugs6ToZANjbd5IYNrFvnfwfOYsBx6julLe3AnEWsOsB2dflAA5Js8BDJirrsoaMhKpFuva2KdNwoW8gYPS9gfbzBaPPG8vekuIIKeJQX5wxwcc97FFxPYfd1QkK17BNkDn5QGBhPoryXwtFVrWiV6fEBjlBRMYDN_zryyVgYeXFj9MxchaGJFHIHybB_iY5Rdyw3Ef9jM5BPqW-0M3FInNCLhXsjvV-swamdfmCwPoZCo6eTfzFucB-WuaNLdmzL_MGt4wz0lODGcCJnn_xl7U18Qf_5rdRK0GZT6tiIcj6q0RFzD5tDHnGUJTPrYd3mxjwb372QFzYEZUF99i7JyAxnF64tsbyONogQD7832Hhl4lmeEmljHMSPNUwPBAwCMHixFg12l7kWs_zoBSGEkK8dopyf4TClroM0zQ1QWWr0EnkAGN6OVyD3gX_I41cj1oFl4A07aO_Rl6CcdE6oqJdabYYmVtIz-gHXksWmwuXzw==?e=true" target="_blank"> <img border="0" height="30" src="https://img1a.flixcart.com/www/email/images/20170217-182335-2017-02-17.png" alt="Flipkart.com" style="border:none;"> </a> </td>
        </tr>
       </tbody>
      </table> </td>
    </tr>
   </tbody>
  </table>
  <!-- Wrapper table for outlook 2000 / 2002 / 2003/ 2007 / 2010 / 2013 and Lotus notes 8 & 8.5 -->
  <!--[if (gte mso 9)|(IE)]>
      <table width="600" style="width:600px; margin: 0 auto" cellspacing="0" align="center" cellpadding="0">
        <tr>
          <td valign="top" align="center">
            <![endif]-->
  <table width="100%" cellspacing="0" cellpadding="0" style="margin: 0 auto; padding: 10px; background-color:#F1F2F3;">
   <tbody>
    <tr>
     <td>
      <table width="100%" cellspacing="0" cellpadding="0" style="margin: 0 auto; max-width:600px; background: #FFFFFF;">
       <tbody>
        <tr>
         <td align="left" valign="top" class="container" style="display:block; margin:0 auto; clear:both; padding: 0px 40px;">
          <table width="100%" cellspacing="0" cellpadding="0" style="margin: 0 auto; max-width:600px; background: #FFFFFF">
           <tbody>
            <tr style="color:#212121; display:block; margin:0 auto; clear:both; padding: 24px 0 4px 0;">
             <td align="left" valign="top" class="container"> <p style="padding:0;margin:0;font-size:16px; font-family: 'Roboto-Medium', sans-serif;"> Hi Biswajit </p> </td>
            </tr>
           </tbody>
          </table>
          <table width="100%" cellspacing="0" cellpadding="0" style="margin: 0 auto; max-width:600px;background: #FFFFFF">
           <tbody>
            <tr>
             <td align="left" valign="top" class="container" style="color:#212121; display:block; margin:0 auto; clear:both; padding: 3px 0 0 0;">
              <table width="100%" cellspacing="0" cellpadding="0">
               <tbody>
                <tr>
                 <td valign="top" align="left" style="float:left; vertical-align: middle;"> <p style="font-family: 'Roboto-Medium', sans-serif;font-size: 16px;font-weight: normal;font-style: normal;line-height: 1.5;font-stretch: normal;color: #212121; margin: 16px 0px"> Greetings from Flipkart. </p> </td>
                </tr>
               </tbody>
              </table> </td>
            </tr>
           </tbody>
          </table>
          <table width="100%" cellspacing="0" cellpadding="0" style="margin: 0 auto; max-width:600px; background: #FFFFFF">
           <tbody>
            <tr style="color:#212121; display:block; margin:0 auto; clear:both; padding: 24px 0 4px 0;">
             <td align="left" valign="top" class="container"> <p style="padding:0;margin:0;font-size:16px; font-family: 'Roboto-Medium', sans-serif;"> Thanks for using Flipkart Pay Later. We've received Rs 199.0 towards your August bill. </p> <br> </td>
            </tr>
           </tbody>
          </table> <br>
          <!--start survey--> <p style="font-family: Arial; font-size: 12px; font-weight: normal; font-stretch: normal; line-height: 14px; letter-spacing: normal; color: #212121; margin-top: 0; margin-bottom: 10px;">We would love to get your feedback.</p> <p style="font-family: Arial; font-size: 12px; font-weight: bold; line-height: 14px; color: #212121; padding-top: 0px; margin-top: 0; margin-bottom: 10px;">How was your <span>Flipkart Pay Later</span> bill payment experience? </p>
          <table cellspacing="0" cellpadding="0">
           <tbody>
            <tr>
             <td style="float: left; border-bottom-left-radius: 3px; border-top-left-radius: 3px; background-color: #ce0f03; border: 0; display: inline-block; padding: 0; margin: 0;" align="left"> <a style="border: 0; display: block; font-size: 14px; text-decoration: none; text-align: center; line-height: 40px; width: 48px; height: 40px; color: #fff; font-family: Arial;" href="http://l.flipkart.com/t/click/R1HSGnfZXPeFyc_byasNFUgnEi2TeRhr0czYQLwvL8nzJzZKtAfACkUv_ZFiSky2XkCN78TtiwoPfQTxX_AM4GFss55-b0W5DqcN2rhO-KlthpsS2ZWMb-1fECNiEcjtses2NpFMw5l6vkyosMBop7kX-LzV9uD65AoNldN3ebr9QBMEhehSsaXtYJXtHLIKHei_Ovik2XrIdKBicTZEOaVFjqH97b3UxndEHFMQoxU0vKuoBj3KwP3al_umf33k5gi4PPiw6MSwPUh1qellWMIJG15yHuLIxygLYMBwANjjXt3u-JPxujiWeTMKLBHOTm8M2XJE9ZTzkIMdbRdrNfwLdP2bXZ8KkeFUSfYCA1551lNx-NoQ7eJ40sccXccmupAAkdEt-7TwwgwPKUHOEFZsLS5zqFf8WcziZxF2V8kk_993K3ujyvbWMxMM5HI8KJ2K4skw0bZtqEnuHqxWna5GbvCTJ_NmZ9Ewfz_i6HSVNKArA2ty9GUwt0mmraP_-6n_7oHVUH1iy_XbP_qRrKFyFj0-Oe1eFW-7Qc3lsRxS11YhkRzQfrogiCsS1P7119RsjjeI3PdSNDQ7FRkcH61GbyDtpawPXz37R6oENTWVkiBY5p8us2EmmD5J7w6TETEZTIndL4rsU6VLTFHNHg4kW6b-Kyv5EmvzDSY3_BVqwKJa7Ye2cS_Bj98yoBoV?e=true" target="_blank">1</a> </td>
             <td style="float: left; margin: 0; padding: 0; background-color: #fb641b; border: 0; display: inline-block;" align="left"> <a style="border: 0; display: block; font-size: 14px; text-decoration: none; text-align: center; line-height: 40px; width: 48px; height: 40px; color: #fff; font-family: Arial;" href="http://l.flipkart.com/t/click/R1HSGnfZXPeFyc_byasNFRbMKM5OGoWRumbFvXL8ZpbupmZ-8NrslGYzlR4sjPdA4-tfXg0CdateQYUW9-Sim1neualrkzqH0-3GIwlu8yDzBo0owJ8ySDmr-oHSd2V_sweRDly5sxMd8eKfstWQX8JqXkiJMlYgSuR_ASqjVtzEE6HutnHaAXoBEwKgI_62ylSGQgCn0fo_FsWGlPYBee6DTkfiQNlb3ql_KaymVJ7CDRIKOZhG5Jc9SyHTXGWL0ddHgKXhbzAEsZvAHasoKlSsbpbO2Q6Ba5y9mhogAIWvRVIsfOyrrxYGsP0XsHyl_3bLz6WJbwEafYNZgrLyJaiSIaxGH8vliNYh8eWJ5dITihd6WF_95HV-PoOzms_nGapbUlJOjJGUGGsZTanQnOuUGCq2AIeHYFXQUA7D7M0jLl5JnIHarIQI5k43bV1dBfHafIaJA1JkxvnyE18uW77ABgWFeW1y_SHJaB2PPua_ffUwzGUsd2pOpZ0m9wz-rXyd3At1g_hNhv4_nSlgJApqwXB4bLmLi3PQvGk7vuu_ANFJKNp2129O9MfD-Kaf02SQAG4RbvKGk4ZQd53veI6htZTxuiP3j5g2sC6ibGP8pvKHRYDxM41fKG2wX8-X3Hvm9LTd6NOC06GCiJJF17oLeJCqFS1AtsWGyRM1O-Pd411ISUZcnsev_nMQvBhU?e=true" target="_blank">2</a> </td>
             <td style="float: left; margin: 0; padding: 0; background-color: #ffba01; border: 0; display: inline-block;" align="left"> <a style="border: 0; display: block; font-size: 14px; text-decoration: none; text-align: center; line-height: 40px; width: 48px; height: 40px; color: #fff; font-family: Arial;" href="http://l.flipkart.com/t/click/R1HSGnfZXPeFyc_byasNFa0XfyF5u1HEzpdhy8bdFHmc4DVmPVxxK9_yNCeSC9nOqZgfLEJes0gv_bfL7kRSkDcL44lwtCIB0ndv80SvncrCZoTD3iOqsYhokECS6vpcsKSIIiPANDJcNm3grpAgk61PBHz5RNM41-hJD1YqI3EQuASdV5RVWbRPKkLQ4m0wKPXwsaAvntgkNmSPVEVaFWh4b-90Hmicame45ouOrzVZKp9DAZQKGZoNaNx30K9d0NdpfnCzELedLvTlH9w1lWxEoSjLpfKw03EV2DRXJnAuQ4tkQ8W5Cz2i8uJMZLCAjAHw7rAWLWDLXemKL4AJjcMcvvh_ANCaASm4P2pWce5TN6clCPc1iDWDymHsgBFiTQ14EPIvXhwHq33P1LTWXKaN8tln5jKMFXZ2DhbbhIPyrTf1t6biI0CAAUbWyRnRcAfmhLvS25DAp85NO0brcW9WlI6URmIbv6lh0_KKbrF8cv4qD3j2_kplUD3vrPDOrXyd3At1g_hNhv4_nSlgJHZhtXa4c6YnkfodrNLCIgjA-UaOtHAoxPw8SgxDi9yZdK8MKNaZ00VcOc2drtVF0WCZkAvuyAHbz9j1IrP1DCOMF-VoYzgCeasTOs6mTHsd1gFvJuKudpYke_O-mAq1-sT6U5SfrDECbmbOkEGC21cj117gLiuBOWvgiquwqm12?e=true" target="_blank">3</a> </td>
             <td style="float: left; margin: 0; padding: 0; background-color: #5ba929; border: 0; display: inline-block;" align="left"> <a style="border: 0; display: block; font-size: 14px; text-decoration: none; text-align: center; line-height: 40px; width: 48px; height: 40px; color: #fff; font-family: Arial;" href="http://l.flipkart.com/t/click/R1HSGnfZXPeFyc_byasNFfHO20hXUKgW3lDbfBA6dmkgsWJWcZBBJSvHLmQdd5ud74MqZJeh_PJ2ocCP_UVTcD-d5pfPXpSTJ9jnJOzO4wT3PH60X9sc1imSpmpyqFWmCKiOXDjU3UC8ZSo3QXNWqmg8cO0DwH-Tbf_pYO6XDG66VcICPrt1WwfL-JaJ8EbDRSUXlNOG9MIAN3p-h_OM8xMnYx8udHh4h-wtaGYl0ZECCpE08E1nZjMNNM8QqIp7Tm_RniGUaUSz4kg_rm7Noy_QXmQH6zPgOegrcEn5i7qdYXxkCQkNULh485BYFa6_GApMTciJ6wg4J178pAsavQm6l1OvMXWlboveoPEdz5_MXds7xLhJOatVBL2FccvjA9gFRVvAKSSQgfhdQMvxg9tbfNdK_PsjwYA9FwVZD8MoQ2ICeoGf3Ftirl9RFDo6ANuWrOuIsQRg27rbEOsWqSD2cy36kneVzmEOpz9gORzJQeQJbtVGxFREmkaus-F0i5d1G32QqwBbO97R7H6c_YTGjOhm-ZGctQ0VYmdJbS8hvCmVWrxCV0dgopvVuK5WyBgodsbGcK5lt3h0q5rM2e-V4Tmt_-g1cGWF7CqNM0DxYexgiCkqHMmiLMiLJI1WupJm3pH77rmXD3YNA57rKT6c-naP8ta9-0temixSex4G2jRLe9FZBS0luLxkjeR8?e=true" target="_blank">4</a> </td>
             <td style="float: left; margin: 0; padding: 0; border-bottom-right-radius: 3px; border-top-right-radius: 3px; background-color: #3f7e01; border: 0; display: inline-block;" align="left"> <a style="border: 0; display: block; font-size: 14px; text-decoration: none; text-align: center; line-height: 40px; width: 48px; height: 40px; color: #fff; font-family: Arial;" href="http://l.flipkart.com/t/click/R1HSGnfZXPeFyc_byasNFU98CLHXbJ-TdHRM4Q3wFHT7nB0LGziQJwCIfs77hlW-Yqkf8z7GMzSMWT0pdlmHSQh9wSA4VQI0UXLr0Ux00CzHq2T-XFZ0pkveF-07juHICKq14nhZ0SLddp4Nodji9cg4e2CKRlqpnGzLBIbuWY5e85LqdUeoBI69OPw7xdVBxJftLv9j99tQIkUQEfuLKTTddXwsfrMTMLMwW7ZXhko57_1iiccQeOtSRi6d1tLE1scBnNxhUVaFlDTF1HL9K4LFR3e0Z6NXinCLC-M6lm9zp-ENMOEcaQPU7LrDSYrdwaZoYTmDYZUYK9e1mXUxlBM6uWCm0YhFg8NGNIRvHVk87PZ06e-EkrbZ8qeUxbtV2PRoBy_65yiSbeOlQAqX5b7f7lpQltEXvQcBXlMkyHxEFi3vtBmNPaS71ZCGyeQRnT7vSgeL6yDrtR0Lq69dnh6PUhpmen9BN0xi3K6InNHZ-gRGRfvriRJNyzvJKySb39c6UNS7sxhfBi6dbzN3Bf-S8POACfG41OpskGoMnPZpPK9_DP5GNE4U5DHYaddm8iJxSPvlkzyLNRDLorWNFK4Gb-zx8zHUh0JGy7iqY5E3a8NAYBeOt-H8ZLJY6wGrgVaIG56TxWrAGmAeGn993w82QAOwzhO73ka4rXO-WufTFj80fFYsl0pb9v17Qz0q?e=true" target="_blank">5</a> </td>
            </tr>
           </tbody>
          </table>
          <table width="240">
           <tbody>
            <tr>
             <td> <p style="margin-top: 5px; font-family: Arial; font-size: 10px; font-weight: normal; font-style: normal; font-stretch: normal; line-height: 11px; letter-spacing: normal; color: #878787; margin-bottom: 10px;">Very poor <span style="float: right;">Very good </span> </p> </td>
            </tr>
           </tbody>
          </table>
          <!--survey ends--> </td>
        </tr>
       </tbody>
      </table>
      <table width="100%" cellspacing="0" cellpadding="0" style="margin: 0 auto; max-width:600px;margin-top: 24px;">
       <tbody>
        <tr>
         <td align="left" valign="top" class="container" style="color:#2c2c2c; display:block; line-height:20px; font-weight:300; margin:0 auto; clear:both;background-color: transparent;">
          <table class="body-wrapper">
           <tbody>
            <tr>
             <td style="width: 75%;text-align: left"> <a style="color:#027cd8; text-decoration:none;outline:none;color:#ffffff;font-size: 13px;" href="http://l.flipkart.com/t/click/ioUdrLOVu4babyFxhzpH7TjGynp8L5H_QOCxupKAfugs6ToZANjbd5IYNrFvnfwfOYsBx6julLe3AnEWsOsB2dflAA5Js8BDJirrsoaMhKpFuva2KdNwoW8gYPS9gfbzBaPPG8vekuIIKeJQX5wxwcc97FFxPYfd1QkK17BNkDn5QGBhPoryXwtFVrWiV6fEBjlBRMYDN_zryyVgYeXFj9MxchaGJFHIHybB_iY5Rdyw3Ef9jM5BPqW-0M3FInNCLhXsjvV-swamdfmCwPoZCo6eTfzFucB-WuaNLdmzL_MGt4wz0lODGcCJnn_xl7U18Qf_5rdRK0GZT6tiIcj6q0RFzD5tDHnGUJTPrYd3mxjwb372QFzYEZUF99i7JyAxnF64tsbyONogQD7832Hhl4lmeEmljHMSPNUwPBAwCMHixFg12l7kWs_zoBSGEkK8dopyf4TClroM0zQ1QWWr0EnkAGN6OVyD3gX_I41cj1oFl4A07aO_Rl6CcdE6oqJdabYYmVtIz-gHXksWmwuXzw==?e=true" target="_blank"> <img border="0" height="24" src="http://img5a.flixcart.com/www/promos/new/20161115-163837-email-logo-footer.png" alt="Flipkart.com" style="border:none;"> </a> </td>
             <td style="width: 15%;text-align: left"> <a style="text-decoration:none;outline:none;color:#ffffff;font-size: 13px;" href="http://l.flipkart.com/t/click/ioUdrLOVu4babyFxhzpH7WdGe1-cw3ijUy1cAJO6GB66VkYxpqpbVzrGoRrbSw2SLggpuLOTSTXNxoasKv2nIn76ixkgYypVyaxZzzBUYU6ZdLKjYbbfSaBnByYhY7l8W4uCJRNGMeeW3LBJuEoZvC0GFiKVgpokJqoMuSU9U-XpftpW_c0VTrwFECNz9UFCA9H6qnBNSFFWA7IDsCEq562muboXacK9Cg1NI9IaQ4--OEo4BvRNXh36EIFdHMh_dMNCoZ79g40zHXXoR5kWW6CE76WXsuJBXJ-UA3j9571Qar4whiN0XIFtij1tqmnwvw5eWHDwy4E4vLJq0eFiFeAajxfgD2hcNjovW6QNIWWBZqt6ySOKOqYqajy4f3d97DV-iQjwm53szmYmH7V5qSJ3VUw8PPqVH1HRa_jT-jDitkoHS7t7xQUWdQ8yrFN1GBPMTrrZmTbBBbFm7PbyDrAwlyMpzZY7ggX7VL405ZoID6qHVfBRxBpEnpKc5z5PLyXL8iRkdrBR-KLO_XMBAxzKxBli7vVOuqtNElrFuzKw3INPUbAR_DrTqooR3zdr?e=true" target="_blank"> <img border="0" height="24" src="http://img6a.flixcart.com/www/promos/new/20160910-183744-google-play-min.png " alt="Flipkart.com" style="border:none;"> </a> </td>
             <td style="width: 10%;text-align: right"> <a style="text-decoration:none;outline:none;color:#ffffff;font-size: 13px;" href="http://l.flipkart.com/t/click/ioUdrLOVu4babyFxhzpH7dVKvhM4HlQ8OqnqcZkyGiTyZt6ImjYqPYLaHxyyunwRi8QLTIROAwSnypbnFevZMlFj5jNYB9NyjdBaFHIND7LTqL0DuYAiJgOaro6Eh7TzGcDfyUyg8km23x8X056zhG_-OlaRdzTBoR8yYzCbk_00RwYKPfZc7C9QxUs5w1q1JkYW3PAHcUnXMQpPYC1b57G3glEVmDcLkWG0N1q5spWu1-03SU68ptHqOr6Go_F_uIA17vBG3pBYdqvPJc3NrJCtN-VglAPgSuE93jdU18OqzdkGiMcBzZwBcF8FbkpHNbALR5T70eeYY4z0jIuEyuiKym56eEA8nPvLdlrxMVdzNqmMYQfnXko5WbzhJUHE01YAmRMFvRolyWGZIkBBu0nOi4_Zdji95MVE-jycacR_I78klECrUmOEXMx1M12fcoc8z-kwp9cTKv0z1dVf2KfoyZd_SU-B_h17xdi0s-DVnrmTfnT1o4meG-3SJIuh8HlTFPbPxDhO3GyUZKMWLQv2Ny2DAtJDAvHjOCka0_I=?e=true" target="_blank"> <img border="0" height="24" src="http://img5a.flixcart.com/www/promos/new/20160910-183649-apple-store-min.png" alt="Flipkart.com" style="border:none;"> </a> </td>
            </tr>
           </tbody>
          </table> </td>
        </tr>
       </tbody>
      </table> </td>
    </tr>
   </tbody>
  </table>
  <!--[if (gte mso 9)|(IE)]>
                </td>
              </tr>
            </table>
            <![endif]-->
 <img src="http://sendgrid.flipkart.com/wf/open?upn=sQ3vk4cYCHThs6Ow8YdkFn2YzbjmJSwNbQ-2Fx953xW4XsvEmoTvyA06x3weV0d2r2B8xk8hA7Swth1i4v5E2xQUkERnQG-2FvvlkVpnD9KlVPS6cjoFG5A83J0jgVFlULyoUr8CQleR7tviVPs3wd8T4Pb2HS94n2r23zKLOzjBKbMq3vTJIkhapFt4tRFED8sg8FIc9Nd8GvVa7oEV0DcwLavgzWcKN2NjBUgULD4YawWd87BjCtdXv2X27sC2KjzIqSbXbXTKRDzf4mNo5aeYShaPl1NPysR-2B6wNRHvAkLkzUMQVdXM8bYQkgBlQH01lvvg5IPnG3PcZV7cL-2FU8C-2F15YJz7-2BA1LfP6B5M9ZEHT26nDbVRX9bkBdCNVPz18nhYCoI0bnmGqUEnkIpQMqZZROAtfUYn0tsFYgkHZUjaXtN97OJVWzlguoLztZHu7J0Vi7DloBtFXEfPZS1s74BPn48p79slQK8tpjuKyT6cOL-2Fy-2FcvNEvcPNZ66jBq38pc1x89LXgpX8AAN-2BXpva2dc3Q6R21EIHtzGxB7o2-2F7NaAE-3D" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>
</html>`;
const text = convert(html, {
  wordwrap: null
});
console.log(text); // Hello World