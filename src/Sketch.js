import Sketch from "react-p5/";
import styled from "styled-components";

const P5 = styled(Sketch)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const Background = () => {

    let angle = 0.9

    let xPos=200;
    let xSpeed = 30;
    let yPos=200;
    let ySpeed = xSpeed*angle;
    

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.frameRate(60);
        
    }

    const draw = (p5) => {

        p5.noStroke();

        p5.background(0, 10); 
        p5.ellipse(xPos, yPos, 100, 80);
        // p5.ellipse(p5.width/2, p5.height/2, 100, 100);

        xPos += xSpeed;
        yPos += ySpeed;

        angle -= 0.01

        if (xPos >= (p5.width-50) || xPos <= 50) {
            xSpeed = xSpeed * -1;
        }
        if (yPos >= (p5.height-40) || yPos <= 40) {
            ySpeed = ySpeed * -1;
        }
    }

    return(
        <P5 windowResized={windowResized} setup={setup} draw={draw}/>
    )

}

export default Background;

