console.log(API_END_APP_VWO_COM); //TDZ starts //
//ReferenceError: Cannot access 'API_END_APP_VWO_COM' before initialization
console.log("API End Point before declaration")
if (true) {

}

const API_END_APP_VWO_COM = "https://app.vwo.com/login/api";// TDZ ends
console.log("API End Point before declaration" + API_END_APP_VWO_COM);