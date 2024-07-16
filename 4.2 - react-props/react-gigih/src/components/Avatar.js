const user = 
    {
        name: "Shani Indira Natio",
        middleName: "Shani",
        image: "https://img.celebrities.id/okz/600/9BaU18/master_J9l38BQ8u6_482_shani_jkt48.jpg"
    }
const fullName = `${user.name.split(" ")[0]} "${user.middleName}" ${user.name.replace(user.name.split(" ")[0],"")}`

const Avatar = (props) => {
    return(
        <div>
            <img src = {user.image} className = "avatar"></img>
            <h1>{fullName}</h1>
        </div>
    )
}

export default Avatar