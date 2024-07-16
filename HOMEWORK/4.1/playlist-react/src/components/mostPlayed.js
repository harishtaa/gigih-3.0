import songs from "../data/list";

const MostPlayed = () => {
    return(
        <div className="lalal">
            <h1 className="header">Most Played</h1>
            {
                songs
                .sort((a,b) => {return (b.playCount) - (a.playCount)})
                .map(s=>
                    <div className="songCard">
                        <img src={s.thumbnail} className="thumbnail" alt=""/>
                        <h3 className="title">{s.title}</h3>
                        <span>{s.artist}</span>
                        <span>Played {s.playCount} times</span>
                    </div>
                )
            } 
        </div>
    )
}

export default MostPlayed