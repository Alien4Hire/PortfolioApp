import React from 'react';
import {Container} from 'reactstrap';

//images
import Clothes1 from '../../assets/img/gallery/e commerce/clothes-category-view.png';
import Clothes2 from '../../assets/img/gallery/e commerce/clothes-explore-view.png';
import Clothes3 from '../../assets/img/gallery/e commerce/clothes-product-view.png';
import Clothes4 from '../../assets/img/gallery/e commerce/clothes-Select-cloths.png';
import Clothes5 from '../../assets/img/gallery/e commerce/clothes-shopping-cart.png';
import Courses1 from '../../assets/img/gallery/e commerce/courses-behind-the-music.png';
import Courses2 from '../../assets/img/gallery/e commerce/courses-bootcamp-signup.png';
import Courses3 from '../../assets/img/gallery/e commerce/courses-buy-shop.png';
import Courses4 from '../../assets/img/gallery/e commerce/courses-home-layout.png';
import Courses5 from '../../assets/img/gallery/e commerce/courses-resources-img.png';
import Finance1 from '../../assets/img/gallery/e commerce/finance-about-footer.png';
import Finance2 from '../../assets/img/gallery/e commerce/finance-debt-shredder.png';
import Finance3 from '../../assets/img/gallery/e commerce/finance-home-view.jpg';
import Finance4 from '../../assets/img/gallery/e commerce/finance-savings-form.jpg';
import Skate1 from '../../assets/img/gallery/e commerce/skate-home-page.jpg';
import Bull1 from '../../assets/img/gallery/fintech/bull-about-io.png';
import Bull2 from '../../assets/img/gallery/fintech/bull-features-io.png';
import Bull3 from '../../assets/img/gallery/fintech/bull-home-io.png';
import Bull4 from '../../assets/img/gallery/fintech/bull-login-io.png';
import Bull5 from '../../assets/img/gallery/fintech/bull-pricing-io.png';
import Trading1 from '../../assets/img/gallery/fintech/trading-api-o.png';
import Trading2 from '../../assets/img/gallery/fintech/trading-dashboard-o.png';
import Trading3 from '../../assets/img/gallery/fintech/trading-home-o.png';
import Trading4 from '../../assets/img/gallery/fintech/trading-info-i.png';
import Trading5 from '../../assets/img/gallery/fintech/trading-review-o.png';
import Game1 from '../../assets/img/gallery/games/game-chess-react.png';
import Game2 from '../../assets/img/gallery/games/game-rubix-react.png';
import Game3 from '../../assets/img/gallery/games/games-galaga-react.png';
import Game4 from '../../assets/img/gallery/games/games-pacman-react.png';
import Game5 from '../../assets/img/gallery/games/games-tetris-react.png';


const ProjectDisplay = () => {
    return (
        <>
        <div className="wrapper section section-dark">
            <Container className="project-container">
                    <div>
                        E Commerce
                    </div>
                    <div className="img-container">
                        <div className="img-display-case" style={{animation: `slideOut 6s`}}>
                            <div className="inner-div"><img src={Clothes1} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case-init" style={{animation: `oneRow 2s`}}>
                            <div className="inner-div"><img src={Clothes2} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `slideOut 6.4s`}}>
                            <div className="inner-div"><img src={Clothes3} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `slideOut 6.8s`}}>
                            <div className="inner-div"><img src={Clothes4} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `slideOut 7.2s`}}>
                            <div className="inner-div"><img src={Clothes5} alt="" className="img-display" /></div>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img-display-case" style={{animation: `moveUp 11.5s`}}>
                            <div className="inner-div"><img src={Courses1} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 11.5s`}}>
                            <div className="inner-div"><img src={Courses2} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 11.5s`}}>
                            <div className="inner-div"><img src={Courses3} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `oneRow 3s`}}>
                            <div className="inner-div"><img src={Courses4} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 11.5s`}}>
                            <div className="inner-div"><img src={Courses5} alt="" className="img-display" /></div>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img-display-case" >
                            <div className="inner-div" style={{animation: `oneRow 4s`}}><img src={Finance1} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 12s`}}>
                            <div className="inner-div" ><img src={Finance2} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 12s`}}>
                            <div className="inner-div" ><img src={Finance3} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 12s`}}>
                            <div className="inner-div" ><img src={Finance4} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 12s`}}>
                            <div className="inner-div" ><img src={Skate1} alt="" className="img-display" /></div>
                        </div>
                    </div>
                    <div>
                        FinTech
                    </div>
                    <div className="img-container">
                        <div className="img-display-case" style={{animation: `moveUp 12.5s`}}>
                            <div className="inner-div" ><img src={Bull1} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 12.5s`}}>
                            <div className="inner-div" ><img src={Bull2} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `oneRow 5s`}}>
                            <div className="inner-div" ><img src={Bull3} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 12.5s`}}>
                            <div className="inner-div" ><img src={Bull4} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 12.5s`}}>
                            <div className="inner-div" ><img src={Bull5} alt="" className="img-display" /></div>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img-display-case" style={{animation: `moveUp 13s`}}>
                            <div className="inner-div"><img src={Trading1} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 13s`}}>
                            <div className="inner-div"><img src={Trading2} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 13s`}}>
                            <div className="inner-div"><img src={Trading3} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `oneRow 6s`}}>
                            <div className="inner-div"><img src={Trading4} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 13s`}}>
                            <div className="inner-div"><img src={Trading5} alt="" className="img-display" /></div>
                        </div>
                    </div>
                    <div>
                        Games
                    </div>
                    <div className="img-container">
                        <div className="img-display-case" style={{animation: `oneRow 7s`}}>
                            <div className="inner-div"><img src={Game1} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 13.5s`}}>
                            <div className="inner-div"><img src={Game2} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 13.5s`}}>
                            <div className="inner-div"><img src={Game3} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 13.5s`}}>
                            <div className="inner-div"><img src={Game4} alt="" className="img-display" /></div>
                        </div>
                        <div className="img-display-case" style={{animation: `moveUp 13.5s`}}>
                            <div className="inner-div"><img src={Game5} alt="" className="img-display" /></div>
                        </div>
                    </div>
            </Container>
        </div>
        </>
    )
}

export default ProjectDisplay;