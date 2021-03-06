import React, {useState} from 'react';
import Ecom from '../../assets/img/logo/ecommerce.png';
import fintech from '../../assets/img/logo/fintech-logo.png';
import Game from '../../assets/img/logo/game-logo2.png';
import Blog from '../../assets/img/logo/news-logo.png';
import Streaming from '../../assets/img/logo/streaming-logo.png';

const ShowYourWork = () => {
    const [hover, setHover] = useState('webapp')

    const types = [
    {
        name: 'Blog',
        picture: Blog,
        time: '2s',
    },
    {
        name: 'Fintech',
        picture: fintech,
        time: '2s',
    },
    {
        name: 'E Commerce',
        picture: Ecom,
        time: '1s',
    },
    {
        name: 'Games',
        picture: Game,
        time: '3s',
    },
    {
        name: 'Streaming',
        picture: Streaming,
        time: '3s',
    },
    ]   





    return (
        <div>
            <div className="shift-lefts">
                <div onMouseEnter={() => setHover('webapp')}>
                <div className={hover === 'webapp' ? 'display-underline' : 'nono'}><span>Web App</span></div>
                </div>
                <div onMouseEnter={() => setHover('native')}>
                <div className={hover === 'native' ? 'display-underline' : 'nono'}><span>Native</span></div>
                </div>
                <div onMouseEnter={() => setHover('interactive')}>
                <div className={hover === 'interactive' ? 'display-underline' : 'nono'}><span>Interactive</span></div>
                </div>
                <a href="/work" onMouseLeave={() => setHover(false)}>
                <div className={`view-all ${hover === 'view-all' ? 'display-view-all' : ''}`} onMouseEnter={() => setHover('view-all')} href="/work">View All 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                     </span>
                </div>
                </a>
            </div>
        {types.map(type => (
            <div className="work-title-elm" style={{ animation: `slideIn 2s` }}>
            <div>
                <img src={type.picture} alt="" className="img-work"/>
            </div>
            <div className="work-title">
                {type.name}
            </div>
            </div>
        ))}
        </div>

    )
}

export default ShowYourWork;