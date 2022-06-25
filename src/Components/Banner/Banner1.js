import { Carousel } from 'react-carousel-minimal';
import b1 from '../../images/products/b1.png'
import b2 from '../../images/products/b2.png'
import b3 from '../../images/products/b3.png'

const Banner1 = () => {
    const data = [
        {
            image: "https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png.webp",
            caption: `<div>
            <p>Layouts</p>
            <h2>Sound That Goes <br /> Straight to Your heart</h2>
            <a
                href="/"
                aria-label=""
               
            >See Product</a>
        </div>`
        },
        {
            image: "https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png.webp",
            caption: "Scotland"
        },
        {
            image: "https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s2-960x450h.png.webp",
            caption: "Darjeeling"
        }

    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div style={{ textAlign: "center" }}>

            <div style={{
                padding: "0 5px"
            }}>
                <Carousel
                    data={data}
                    time={10000}
                    width="850px"
                    height="510px"
                    captionStyle={captionStyle}
                    radius="10px"
                    // slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    // thumbnails={true}
                    // thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "",
                    }}
                >


                </Carousel>
            </div>
        </div>
    );
};
export default Banner1;