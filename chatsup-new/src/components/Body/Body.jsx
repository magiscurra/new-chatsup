import './Body.css'
import GoogleButton from 'react-google-button'


const Body = () => {
    return(
        <div className="body">
           <div className="slok">
           <p className='sloka'>They all start with a "SUP!"</p>
           </div>
           <div className="para">
           <p className='sample'>lorem ipsum somethein <br /> hsaoh adhfk ahfa ahfkh <br /> ajfhfj ahfhk afhk </p>
           </div>
           <div className="buttons">
           <button className='btn1'><GoogleButton type='light' onClick={() => { console.log('Google button clicked') }}/></button>
           <p>or</p>
           <button className='btn2'>Chat as guest</button>
           </div>
        </div>
    );
}
export default Body;