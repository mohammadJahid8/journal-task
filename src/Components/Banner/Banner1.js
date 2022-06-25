import { Carousel } from 'react-carousel-minimal';
import b1 from '../../images/products/b1.png'
import b2 from '../../images/products/b2.png'
import b3 from '../../images/products/b3.png'
import './Banner.css'

const Banner1 = () => {
    const data = [
        {
            image: "https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png.webp",
            caption: `
            <div class="flex justify-start cap-style items-start"> 
            <div class='pl-12'>
                <p class='bg-blue-600 w-[68px] p-1 font-bold rounded text-white'>Layouts</p>
                <h2 class='tracking-wider text-4xl pb-6 font-bold text-black text-left '>Sound That Goes <br /> Straight to Your heart</h2>
                <div class="flex justify-start">
                
                <a
                    href="/"
                    aria-label=""
                    class="btn btn-outline pb-8 pt-5 px-7 rounded-none text-left"
                >See Product</a>
                </div>
            </div>
            </div>
        `
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

    // const captionStyle = {
    //     fontSize: '2em',
    //     fontWeight: 'bold',
    // }
    // const slideNumberStyle = {
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    // }
    return (
        <div style={{ textAlign: "center" }} className="z-0 bg-">

            <div style={{
                padding: "0 5px"
            }}>
                <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="510px"
                    // captionStyle={captionStyle}
                    radius="10px"
                    // slideNumber={true}
                    // slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    // pauseIconColor="white"
                    pauseIconSize="40px"
                    // slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    // thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        // textAlign: "center",
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