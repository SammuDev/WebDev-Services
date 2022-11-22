import Carousel from 'react-bootstrap/Carousel';

import dados1 from './../../images-slide/dados.png';
import dados2 from './../../images-slide/dados2.png';
import dados3 from './../../images-slide/emp4.png';

export const Carr1 = () => (
    <Carousel className='carrMain'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={dados1}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={dados2}
            alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={dados3}
            alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
