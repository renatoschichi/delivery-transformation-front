import mrshake1 from '../../assets/images/mrshake1.jpg';
import mrshake2 from '../../assets/images/mrshake2.jpg';
import mrshake3 from '../../assets/images/mrshake3.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../../styles/carousel.scss';

function handleTransition() {
    console.log('testing the function');
}

export function Carousel() {
    return (
        <div className="carousel">
            <div className="arrow" onClick={handleTransition}>
                <ArrowBackIosIcon />
            </div>
            <img src={mrshake1} />
            <img src={mrshake2} />
            <img src={mrshake3} />
            <div className="arrow" onClick={handleTransition}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}