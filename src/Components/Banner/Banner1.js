import { Carousel } from 'react-carousel-minimal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Banner.css'

const Banner1 = () => {
    const data = [
        {
            image: "https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png.webp",
            caption: `
            <div class="flex justify-start cap-style items-start"> 
            <div class='pl-12'>
                <p class='bg-blue-600 w-[68px] p-1 font-bold rounded text-white'>New</p>
                <h2 class='tracking-wider  md:text-4xl pb-3 md:pb-6 font-bold text-black text-left '>Sound That Goes <br /> Straight to Your heart</h2>
                <div class="flex justify-start ">
                <a
                    href="/"
                    aria-label=""
                    class="btn btn-outline btn-md md:py-2 px-4 md:px-4 hover:bg-blue-600 border- rounded-none text-left flex-nowrap"
                >See Product
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>
                </div>
            </div>
            </div>
        `
        },
        {
            image: "https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png.webp",
            caption: `
            <div class="flex justify-start cap-style items-start"> 
            <div class='pl-12'>
                <p class='bg-blue-600 w-[68px] p-1 font-bold rounded text-white'>Mobile</p>
                <h2 class='tracking-wider  md:text-4xl pb-3 md:pb-6 font-bold text-black text-left '>Best Mobile Options <br />at any resolution</h2>
                <div class="flex justify-start ">
                <a
                    href="/"
                    aria-label=""
                    class="btn btn-outline btn-md md:py-2 px-4 md:px-4 hover:bg-blue-600 border- rounded-none text-left flex-nowrap"
                >Learn More
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>
                </div>
            </div>
            </div>
            `
        },
        {
            image: "https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s2-960x450h.png.webp",
            caption: `
            <div class="flex justify-start cap-style items-start"> 
            <div class='pl-12'>
                <p class='bg-blue-600 w-[68px] p-1 font-bold rounded text-white'>Mobile</p>
                <h2 class='tracking-wider  md:text-4xl pb-3 md:pb-6 font-bold text-black text-left '>Most advance <br />admin in Opencart</h2>
                <div class="flex justify-start ">
                <a
                    href="/"
                    aria-label=""
                    class="btn btn-outline btn-md md:py-2 px-4 md:px-4 hover:bg-blue-600 border- rounded-none text-left flex-nowrap"
                >Learn More
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>
                </div>
            </div>
            </div>
            `
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