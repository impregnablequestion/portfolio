import Sketch from "react-p5/";
import styled from "styled-components";

const P5 = styled(Sketch)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const Background = () => {
    
    let drops = []
    let count = 0;
    const frequency = 10;
    const simultaneity = 300;

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.frameRate(30);
        p5.background(0);
        p5.noFill();
    }

    const draw = (p5) => {

        if (p5.frameCount % frequency === 0) {
            drops.push(new drop(p5, p5.random(p5.width), p5.random(p5.height)));
            count ++;
            if (count > simultaneity) {drops.shift()}
        }

        for (let drop of drops) {
            drop.update();
            drop.display();
        }

    }

    function mouseClicked (p5) {
        if (p5.mouseY >= 150) {
            drops.shift();
            drops.push(new drop(p5, p5.mouseX, p5.mouseY))
        }

    }

    function drop (p5, x, y) {
        this.size = 0;
        this.stroke = 100;
        this.count = 0;

        this.update = () => {
            this.size += 1;
            this.stroke -= 1;
            this.count ++;
        }

        this.display = () => {
            p5.strokeWeight(2);
            p5.stroke(this.stroke);
            if (this.count <= 500) {
                p5.circle(x, y, this.size);
            }
        }
    }

    return(
        <P5 windowResized={windowResized} setup={setup} draw={draw} mouseClicked={mouseClicked}/>
    )

}

export default Background;

