import "./intro.scss"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/profile.jpg" alt="" />
                    </div>
            </div>
            <div className="right">
                <h2>About Me</h2>                    
                <h3>Hi and welcome to my portfolio! As you can see this is site is still in progess. 
                    But in preperation for what this site will become, here is some basic info about me.  
                    I am currently studying at University of Western Ontario in Software Engineering and
                    I'll be entering my third year this Septemeber. An interesting fact about me is that I've
                    never watched the orginal Star Wars trilogies and so I always pretend I understand the references.  
                </h3>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/saif-u/" className="icon"> <AiFillLinkedin/> </a>
                    <a href="https://github.com/SaifU213" className="icon"> <AiFillGithub/></a>
                    <a href="https://www.instagram.com/saif___u" className="icon"> <AiFillInstagram/>
                    </a>   
                </div>    
            </div>
        </div>
    )
}
