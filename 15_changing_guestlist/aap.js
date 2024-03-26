"use strict";
let Guest_List = ['Imrankhan', 'Zardari', 'Nawazsharid'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure invite you in our party.\n\nThankYou\n\n!');
}
let absent_Guest = 'Imrankhan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure invite you in our party.\n\nThankYou\n\n!');
}
console.log(`Mr. ${absent_Guest}is not coming to the party.`);
