import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SongList =  () =>{
    const [songs, setSongs] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://b32a-118-99-73-236.ngrok-free.app/songs');
              setSongs(response.data);
              console.log(songs)
            } catch (error) {
              setError('Error fetching data from the API.');

            }
          };
      
          fetchData();
        }, []);


    if(error){
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h1>Song List</h1>
            <ul>
                {songs.listOfSongs.map((song) => (
                    <li>
                        {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SongList

// // src/components/SongList.js
// import React, { useState, useEffect } from 'react';

// const SongList = () => {
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://b32a-118-99-73-236.ngrok-free.app/songs');
//         if (!response.ok) {
//           throw new Error('Network response was not ok.');
//         }
//         const data = await response.json();
//         setSongs(data.listOfSongs);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching data from the API.');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h2>List of Songs:</h2>
//       <ul>
//         {songs.map((song) => (
//           <li key={song.id}>
//             {song.title} - {song.artist}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SongList;


