interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const song = "This is a other name song";

const { song: anotherNameSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log("Other Song: ", song);
console.log("Song: ", anotherNameSong);
console.log("Duration: ", duration);
console.log("Author: ", audioPlayer.details.author);
console.log("Author: ", author);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
console.log("Personaje 3:", dbz[2]);
console.log("Personaje 3:", dbz[3] || "No hay personaje");

/* ignorar la primera y segunda posición */
const [, , trunks = "Not found"]: string[] = ["Goku", "Vegeta"];
console.log("Personaje 3:", { trunks });

/* También se puede destructurar array's para evitar el "," por datos que no quieres, ejemplo: Si se quiere obtener cualquier valor del array, tener en cuenta que se hace mediante el índice que se encuentra el valor a destructurar (En este caso se sacará el valor de "Jean" que se encuentra en el índice 2) */
/* Object destructuring solution for long arrays: https://stackoverflow.com/questions/33397430/object-destructuring-solution-for-long-arrays/33397569#33397569 */
const nombres = ["David", "Erick", "Jean", "Jose"];
const { 2: amigoJean } = nombres; // Desestructuración de una array como si fuera un objeto
console.log({ amigoJean }); //Jean

export {};
