
const magicians: string[] = ["AQSA", "waqar", "hadi", "Bari"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);