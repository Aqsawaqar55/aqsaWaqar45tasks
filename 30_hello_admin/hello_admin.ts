const userName:string[]=['admin','bugs bunny','daffy dog','pooh','twety'];

for(let i=0; i<userName.length;i++){
    if(userName[i] === 'admin'){
        console.log('Hello admin,would you like to see a status report?');
    }
    else{
        console.log('Hello ${userName[i]},thankyou for logging in again.')
    }
}