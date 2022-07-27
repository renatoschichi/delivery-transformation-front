import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../../styles/backscreen.scss';

function backScreen() {
    window.history.back();
}

function nextScreen() {
    window.history.forward();
}

export function BackScreen() {
    return (
        <div className="backscreen-container">

            <div className="left-arrow" onClick={backScreen}>
                <ArrowCircleLeftIcon />
            </div>

            <div className="right-arrow" onClick={nextScreen}>
                <ArrowCircleRightIcon />
            </div>

        </div>
    )
}