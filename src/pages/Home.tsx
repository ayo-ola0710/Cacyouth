import Button from '../components/ui/Button.tsx'
import {useGSAP} from '@gsap/react'
import {SplitText} from "gsap/all";
import gsap from 'gsap'
import Partners from "../components/ui/Partners.tsx";



const Home=  ()=> {
    useGSAP(()=>{

        const heroSplit = new SplitText("#head", { type: " lines, chars" });
        const paragraphSplit = new SplitText("#sub", { type: "lines" });

        heroSplit.chars.forEach((chars) => chars.classList.add("text-gradient"));
        gsap.from(heroSplit.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.06,
            delay: 1,
        });

        gsap.from('#btn', {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.06,
            delay: 1,
        })

        const abtTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger:'#about',
                start: 'top top',
                scrub:true,
                pin: true,
                pinType:'fixed'
            }
        })

        abtTimeLine.from('#abt',{
            opacity: 0,
            xPercent: -100,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.06,
        })

        abtTimeLine.from('#abtimg',{
            opacity: 0,
            xPercent: 100,
            yPercent: -100,
            duration: 0.5,
            ease: "power2.inOut",
        })

        const conTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger:'#contact',
                start: 'top top',
            }
        })

        conTimeLine.from('#cont',{
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
        })
    })


return (
    <div>
        <section className="bg-[linear-gradient(rgba(26,16,34,0.7)_0%,rgba(74,20,140,0.5)_100%),url('/assets/back.png')] bg-cover bg-center bg-no-repeat w-full h-screen space-y-7 pt-30  px-4  ">
            <h1 className="text-white text-6xl font-black leading-tight tracking-tight  lg:text-[80px] text-center" id='head'>
                CAC Youth  Medaiyese <br />   WorldWide
            </h1>
            <h2 className="text-white font-normal leading-normal  text-center" id='sub'>
                Partner with us to empower the next generation. Your support fuels a
                spiritual  <br /> revival that impacts thousands of young lives across
                the region.
            </h2>
            <div className='flex justify-center mt-12' id='btn'>< Button title='Become a Sponsor' containerClass='bg-black-light hover:bg-gray-800 cursor-pointer hover:scale-105'  /></div>
         </section>
        <section
            className=" py-10 flex justify-center items-center gap-25 px-10  "
            id="about"
        >
            <div className="text-left">
               <div id='abt'>
                   <h2 className="text-5xl font-bold leading-tight tracking-tight text-primary">
                       About the <br /> Fellowship
                   </h2>
                   <div className="mt-6 max-w-3xl">
                       <p className="text-sm leading-relaxed ">
                           The Christ Apostolic Church Youth Fellowship (CACYOF) <br className='hidden md:block' /> of the
                           Medaiyese Region is  dedicated to nurturing a generation <br /> of
                           young leaders grounded in faith, purpose, and  community.
                       </p>
                   </div>
                   <Button title='About Us' containerClass='bg-purple-100 hover:bg-gray-800 cursor-pointer hover:scale-105 mt-5' />
               </div>

            </div>
            <img src='/assets/back.png' alt='Image' className='h-100 ' id='abtimg'/>
        </section>
        <Partners />
        <section className="py-16 sm:py-24 bg-primary text-white" id="contact">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" id='cont'>
                <h2 className="text-5xl font-bold leading-tight tracking-tight ">
                    Join the Movement
                </h2>
                <p className="mt-4 text-lg text-white">
                    This is more than a concert—it’s a revival. <br /> Together, we can empower
                    the next generation.
                </p>
                <Button title='Contact Us' containerClass='bg-purple-100 hover:bg-gray-800 cursor-pointer hover:scale-105 mt-5' />
            </div>
        </section>

    </div>
)
}

export default Home;

{/*<div className="mt-8 flex justify-center items-center gap-6">*/}
{/*    <a*/}
{/*        className="text-white hover:text-secondary"*/}
{/*        data-alt="YouTube icon"*/}
{/*        href="#"*/}
{/*    >*/}
{/*        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">*/}
{/*            <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.73,18.78 17.93,18.84C17.13,18.91 16.44,18.94 15.84,18.94L15,19C12.81,19 11.2,18.84 10.17,18.56C9.27,18.31 8.69,17.73 8.44,16.83C8.31,16.36 8.22,15.73 8.16,14.93C8.09,14.13 8.06,13.44 8.06,12.84L8,12C8,9.81 8.16,8.2 8.44,7.17C8.69,6.27 9.27,5.69 10.17,5.44C10.64,5.31 11.27,5.22 12.07,5.16C12.87,5.09 13.56,5.06 14.16,5.06L15,5C17.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path>*/}
{/*        </svg>*/}
{/*    </a>*/}
{/*    <a*/}
{/*        className="text-white hover:text-secondary"*/}
{/*        data-alt="Facebook icon"*/}
{/*        href="#"*/}
{/*    >*/}
{/*        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">*/}
{/*            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path>*/}
{/*        </svg>*/}
{/*    </a>*/}
{/*    <a*/}
{/*        className="text-white hover:text-secondary"*/}
{/*        data-alt="Instagram icon"*/}
{/*        href="#"*/}
{/*    >*/}
{/*        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">*/}
{/*            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>*/}
{/*        </svg>*/}
{/*    </a>*/}
{/*</div>*/}