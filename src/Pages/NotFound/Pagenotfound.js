import './Pagenotfound.css';
import error from '../../Image/404.png';
import { Link } from 'react-router-dom';
export default function Pagenotfound(){
    return(
        <>
       <div class="wrap">
<img className="wrap" src='https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png'/>
</div>
<div className='bottom'>
  <p><b className='big'>OOPSS !!! </b>  Page Is Not Available....<Link to='./' ><button className='goback'>Back To Home</button></Link></p>
  
</div>

        </>
    );
}