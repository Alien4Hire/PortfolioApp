/*eslint-disable*/
import React, {useState, useEffect} from "react";
// reactstrap components
import { Container, Button } from "reactstrap";
import { useSpring, animated } from 'react-spring'

const Description = () => {
    const [buttonHover, setButtonHover] = useState(false)
    const [hover, setHover] = useState(true)

    const { x } = useSpring({ from: { x: 0 }, x: hover ? 1 : 0, config: { duration: 1000 } })
    return (
        <>
        <span className="header-font" id="script-one" style={{ animation: `workDance 3s` }}>{'<'}body{'>'}</span>
        <span className="header-font" id="script-two" style={{ animation: `workDanceSequal 4s` }}>{'<'}h1{'>'}</span>
        <span className="header-font" id="script-three" style={{ animation: `workDance 5s` }}>{'<'}h1{'/>'}</span>
        <span className="header-font" id="script-four" style={{ animation: `workDanceSequal 3s` }}>{'</'}body{'>'}</span>
        <span className="header-font" id="script-five" style={{ animation: `workDance 4s` }}>{'</'}html{'>'}</span>
        <span className="header-font" id="script-six" style={{ animation: `workDanceSequal 5s` }}>{'<'}Rubix{'>'}</span>
        <span className="header-font" id="script-seven" style={{ animation: `workDance 3s` }}>{'<'}Rubix{'/>'}</span>
        <span className="header-font" id="script-eight" style={{ animation: `workDanceSequal 4s` }}>{'<'}Script{'/>'}</span>
        <span className="header-font" id="script-nine" style={{ animation: `workDance 5s` }}>{'<'}Navbar{'/>'}</span>
        <Container >
        <div classname="description-name" id="title-texts">
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(0)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 0 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                H
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 1 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                i
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 2 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                
                }}>
                ,
            </animated.span>
            </span>
            {/* <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(4)}
                onMouseLeave={() => setHover(true)}
            >
                <animated.span
                    id={hover === 4 ? 'blueish' : ''}
                    style={{
                    // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                    transform: 
                        x.interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                    }}>
                    _
                </animated.span>
            </span> */}
            </div>
        <div classname="description-name" id="title-texts">
        <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(3)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 3 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                I
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(4)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 4 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                '
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(5)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 5 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                {`m `}
            </animated.span>
            </span> 
            {<img src={require("assets/img/jj.png")} className="special-j"/>}
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(6)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 6 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                a
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(7)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 7 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                s
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(8)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 8 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                o
            </animated.span>
            </span> 
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(9)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 9 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                n
            </animated.span>
            </span> 
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(10)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 10 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                ,
            </animated.span>
            </span> 
        </div>
        <div classname="description-name" id="title-texts">
        <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(11)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 11 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                w
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(12)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 12 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                e
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(13)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 13 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                {`b `}
            </animated.span>
            </span> 
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(14)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 14 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                d
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(15)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 15 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                e
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(16)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 16 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                v
            </animated.span>
            </span> 
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(17)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 17 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                e
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(18)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 18 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                l
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(19)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 19 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                o
            </animated.span>
            </span> 
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(20)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 20 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                p
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(21)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 21 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                e
            </animated.span>
            </span>
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(22)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 22 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                r
            </animated.span>
            </span> 
            <span 
                className="letter-animation" 
                onMouseEnter={() => setHover(23)}
                onMouseLeave={() => setHover(true)}
            >
            <animated.span
                id={hover === 23 ? 'blueish' : ''}
                style={{
                // opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: 
                    x.interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}>
                .
            </animated.span>
            </span> 
        </div>
        <div classname="description-name">Full Stack Developer / React Expert</div>
        <Button 
        classname="description-name" 
        id={buttonHover ? 'desc-hover' : 'desc-button' }
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        >Contact me!</Button>
        </Container>
        </>
    )
}

export default Description;