function getMD5(body){
    return CryptoJS.MD5(JSON.stringify(body));
}

function getAuthSignature(md5,timeStamp){
    return CryptoJS.HmacSHA256(`POST\n/apps/1259459/events\nauth_key=fa7ee674664954c1f5be&auth_timestamp=${timeStamp}&auth_version=1.0&body_md5=${md5}`,"2d1293ec93e526dd6cf1");
}

let sendMessage = async function(){
    let body = {data:'{message:"hello world"}',name:"my-event",channel:"my-channel"}
    let timeStamp = Date.now()/1000;
    let md5=getMD5(body);
    let url =`https://cors.bridged.cc/https://api-eu.pusher.com/apps/1259459/events?body_md5=${md5}&auth_version=1.0&auth_key=fa7ee674664954c1f5be&auth_timestamp=${timeStamp}&auth_signature=${getAuthSignature(md5,timeStamp)}`;
    let req = await fetch(url,{
        method:'POST',
        body:JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    });
}