const songs = [
    {
        title: 'Song 1',
        artists: [{ name: 'Artist 1' }],
        duration: 200
    },
    {
        title: 'Song 2',
        artists: [{ name: 'Artist 2' }],
        duration: 250
    },
    {
        title: 'Song 3',
        artists: [{ name: 'Artist 3' }],
        duration: 300
    }
]

function songList (){
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (songs) resolve(songs);
        reject('Failed to fetch! no song found')
    },2000);
})};

async function main(){
    try {
        const song= await songList()
        // console.log(song)
        console.log("Song Lists: ")
        song.forEach(s=>{
            console.log("==============================")
            console.log(`Title:  ${s.title}`)
            console.log(`Artist:  ${s.artists[0].name}`)
            console.log(`Duration:  ${s.duration}`)
        })
    } catch (error) {
        console.log(error)
    }
}
main();


// const songList = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         if (songs) resolve(songs);
//         reject('Failed to fetch! no data found')
//     },3000);
// });

// songList
//     .then(response => {
//         console.log("Song Lists: ")
//         response.forEach(song=>{
//             console.log("==============================")
//             console.log(`Title:  ${song.title}`)
//             console.log(`Artist:  ${song.artists[0].name}`)
//             console.log(`Duration:  ${song.duration}`)
//         })
//     }).catch(e =>{
//         console.log(e)
//     })