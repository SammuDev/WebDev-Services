import Carousel from 'react-bootstrap/Carousel';

import amazon1 from "./../../images-Ex-publicidades/amazon1.jpg";
import amazon2 from "./../../images-Ex-publicidades/amazon2.jpg";

export const Carr2 = () => (
    <Carousel className='carrMain'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={amazon1}
            alt="First slide"
            />
            {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={amazon2}
            alt="Second slide"
            />

            {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
    </Carousel>
)
