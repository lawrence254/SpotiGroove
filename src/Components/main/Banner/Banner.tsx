import './styles.scss'

const Banner = () =>{
    return (
        <div className="bannerArt">
            <div className="details">
                <p className="verified">Verified Artist</p>
                <p className="artist">Tylor Swift</p>
                <p className="listeners">45,238,998 Monthly Listeners</p>
            </div>
            <div className="art">
                <img src="https://media.newyorker.com/photos/60747954c920e996bd1e486d/master/pass/Battan-FearlessTaylorsVersion.jpg" alt="album.artist.art" />
            </div>
        </div>
    )
}

export default Banner;