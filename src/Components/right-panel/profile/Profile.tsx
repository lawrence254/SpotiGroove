import './style.scss';
const Profile = ()=>{
    return(
        <div className="userPill">
            <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="User Profile Image" />
            <div className="userDetails">
            <p className='userName'>John Paulo</p>
            <p className='subscription'>Free Subscription</p>
            </div>
        </div>
    )
}

export default Profile;