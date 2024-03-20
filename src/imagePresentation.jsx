import ImgFeuille from "./img.png";
import ImgLegume from "./img2.png";
import './imagePresentation.css';

function ImagePresentation() {
    return (
        <div className='img-presentation'>
            <div className='left-image'>
                <img className='img-feuille' src={ImgFeuille} alt="Feuille" />
            </div>
            <div className='right-image'>
                <img className='img-legume' src={ImgLegume} alt="Légume"/>
                <p><strong>Central California</strong> — The person who grew these was located in Central California
                    and, er, hopefully very well-compensated.</p>

            </div>
        </div>
    );
}

export default ImagePresentation;
