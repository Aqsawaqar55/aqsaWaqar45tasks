"use strict";
let Guest_List = ['Imrankhan', 'Zardari', 'Nawazsharid'];
//for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure invite you in our party.\n\nThankYou\n\n!')
//}
let absent_Guest = 'Imrankhan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
//for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure invite you in our party.\n\nThankYou\n\n!')
//}
// console.log(`Mr. ${absent_Guest}is not coming to the party.`);
// console.log('Good News!We are find big table so we inviting 3 more guests.')
Guest_List.unshift('Sir Zia khan');
Guest_List.splice(2, 0, 'Maryam nawaz');
Guest_List.push('Bilawal bhutto');
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure invite you in our party.\n\nThankYou\n\n!')
// }
// console.log('\nsorry we can not arrange big table,only two people will be invites.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    //    console.log(`sorry Mr.${remove_Guest},you are not invited to Dinner.`);
}
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nyou are still invited.\n\nThankYou\n\n!')
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
//ex:19
//printing a message indicating the numberof people you are inviting to dinner.
console.log(`Total number o guest are :${Guest_List.length}`);
