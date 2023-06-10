import React, { useEffect, useState, useRef } from 'react';
import Map from '../components/Map';
import { Link } from 'react-scroll';
import { Link as GatsbyLink} from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import emailjs from '@emailjs/browser';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/navigation';
import expandArrow from '../images/expandArrow.svg';
import grillIcon from '../images/grill.svg'
import insulatedIcon from '../images/insulated.svg';
import linensIcon from '../images/linens.svg';
import parkingIcon from '../images/parking.svg';
import wifiIcon from '../images/wifi.svg';
import televisionIcon from '../images/television.svg';
import waterIcon from '../images/water.svg';
import ownersIcon from '../images/owners.svg'
import refrigeratorIcon from '../images/refrigerator.svg';
import stoveIcon from '../images/stove.svg';
import microwaveIcon from '../images/microwave.svg';
import coffeeIcon from '../images/coffee.svg';
import circleCheckIcon from '../images/circleCheck.png';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/main.scss';

const IndexPage = () => {
  const [headerClass, setHeaderClass] = useState("");
  const [addressClass, setAddressClass] = useState("address");
  const [arrowClass, setArrowClass] = useState("arrow");
  const [leftClass, setLeftClass] = useState('active');
  const [rightClass, setRightClass] = useState('');
  const [CTAContainerClass, setCTAContainerClass] = useState(false);
  const [isReserve, setIsReserve] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  useEffect(() => {
      setHeaderClass("headerAnim");
      setAddressClass("addressAnim address");
      setArrowClass("arrowAnim arrow");
  }, []);

  const Form = () => {
  
      const formSubmit = (e) => {
          e.preventDefault();
          emailjs.send('service_k8lwgll', 'template_6ivx7ff', {
              name: form.current.name.value,
              email: form.current.email.value,
              checkIn: form.current.checkIn.value,
              checkOut: form.current.checkOut.value,
              message: form.current.message.value,
          }, 'jNY0lGrNxSb3KUch9');
          setIsSubmit(true);
      }
          
      return(
          <form className="form" ref={form} onSubmit={formSubmit}>
              <h4>Request a Reservation</h4>
              <input type="text" name="name" placeholder='Full Name' required />
              <input type="email" name='email' placeholder='Email Address' required />
              <div className="datesContainer">
                  <div className="checkIn">
                      <p>CHECK-IN:</p>
                      <input type="date" name='checkIn' />
                  </div>
                  <div className='checkOut'>
                      <p>CHECK-OUT:</p>
                      <input type="date" name='checkOut' />
                  </div>
              </div>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' ></textarea>
              <input id='submitButton' type="submit" />
          </form>
      );
  }

  const SubmitMessage = () => {

      return(
          <div className="submitMessage">
              <img src={circleCheckIcon} alt='Check Mark Icon' />
              <p>Thanks for your request! We will reach out shortly with confirmation or to help you reschedule.</p>
          </div>
      );
  }

  const Other = () => {
      return(
          <div className="other">
              <p>Request a reservation, ask a question, or just get in touch.</p>
              <div className='email'>
                  <p>Email Us:</p>
                  <div>
                      <p>loonCottages@hotmail.com</p>
                  </div>
              </div>
              <div className='phone'>
                  <p>Text or Call Us:</p>
                  <div>
                      <p>207-322-1081</p>
                  </div>
              </div>
          </div>
      );
  }
  
  const contactDisplay = () => {

      if(isReserve === true){
          if(isSubmit === true){
              return <SubmitMessage />
          } else {
              return <Form />
          }
      }else{
          return <Other />
      }
  }

  const reserveButton = () => {
    if(CTAContainerClass === true){
      return 'active';
    }else{
      return '';
    }
  }

  return (
      <div>
          <main className='main'>
              <div className='hero'>
                  <StaticImage src='../images/frontView.png' alt='Image of Chickadee' />
                  <div className='header'>
                      <h1 className={headerClass}>Loon Lookout - Chickadee</h1>
                      <a className={addressClass} href='https://www.google.com/maps/place/14+W+Moores+Shore+Ln,+Swanville,+ME+04915' target="_blank" rel="noopener noreferrer">14 West Moores Shore Lane, Swanville, Maine</a>
                      <Link className={arrowClass} to='landingPage' smooth={true}>
                        <img src={expandArrow} alt='Arrow' />
                      </Link>
                  </div>
              </div>
              <div name='landingPage' className='landingPageContainer'>
                  <div className="landingPageContent">
                      <div className="houseOverview divider">
                          <h2>Loon Lookout - Chickadee</h2>
                          <div className="houseDetails">
                              <p>1 Bedroom</p><div className="dot"></div><p>1 Bathroom</p><div className="dot"></div><p>Partial Lakeside View</p>
                          </div>
                      </div>
                      <div className="description divider">
                          <p>Welcome to our cozy rental cottage in Swanville, Maine. We have been in the rental business for many years and  are dedicated to providing our guests with a comfortable and enjoyable stay.  The cottage has one queen size bed, a double sofa bed, bathroom, kitchen and living/dining room.  It is furnished (including linens) and recently renovated. The large front deck offers partial views of beautiful Swan Lake and is a great place to relax, cook on the grill, read a book  and enjoy the outdoors.</p>
                      </div>
                      <div className="imgSliderContainer divider">
                          <Swiper className='imgSlider' modules={[Navigation, A11y]} spaceBetween={20} slidesPerView='auto' navigation>
                              <SwiperSlide><StaticImage src='../images/livingRoom3.jpg' alt='Couch, rocking chair, and stand still chair' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/livingRoom1.jpg' alt='Living room with TV, couch, and rocking chair' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/bedroom1.jpg' alt='Queen bed with full linens' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/bedroom2.jpg' alt='End of queen bed and dresser' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/deck1.jpg' alt='Large deck with chairs and driveway in background' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/deck2.jpg' alt='Large deck with grill and chairs' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/deck3.jpg' alt='Large yard with grass and trees' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/sideView.jpg' alt='Side view of house with deck and plants' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/flowers1.jpg' alt='Flowers next to beautiful stone wall' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/flowers2.jpg' alt='Large collection of green shrubbery and flowers' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/kitchen.jpg' alt='kitchen with sink and refrigerator' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/bathroom1.jpg' alt='bathroom view of toilet' /></SwiperSlide>
                              <SwiperSlide><StaticImage src='../images/bathroom2.jpg' alt='bathroom view of sink' /></SwiperSlide>
                          </Swiper>
                      </div>
                      <div className="statePark divider">
                        <StaticImage src='../images/statePark.jpeg' alt='Picture of Swan Lake State Park' />
                        <div className='stateParkDetails'>
                            <h3>Swan Lake State Park</h3>
                            <p>Swan Lake State Park is a 5-minute drive from the cottage- and offers a sandy beach for swimming, fishing, a children's playground and other recreational activities.</p>
                        </div>
                      </div>
                      <div className="belfast divider">
                        <p>Nearby coastal Belfast has a thriving downtown with shopping and dining options. It also is host to the Maine Celtic celebration, an iconic shoe store,
                        farmers markets, waterfront art festivals, historic walking tours, book stores, a food co-op and a 'rail trail' walk along the waterfront and beyond.  The waterfront offers scenic and educational boat rides.</p>
                        <StaticImage src='../images/belfast.jpg' alt='Picture of Belfast' />
                      </div>
                      <div className="amenitiesContainer divider">
                          <div className="wifi">
                            <img src={wifiIcon} alt='Wifi symbol' />
                            <p>Wifi</p>
                          </div>
                          <div className="television">
                            <img src={televisionIcon} alt='TV symbol' />
                            <p>TV with Roku</p>
                          </div>
                          <div className="water">
                            <img src={waterIcon} alt='Water symbol' />
                            <p>Water View</p>
                          </div>
                          <div className="parking">
                            <img src={parkingIcon} alt='Parking symbol' />
                            <p>Private</p>
                          </div>
                          <div className="linens">
                            <img src={linensIcon} alt='Linens symbol' />
                            <p>Full Linens Provided</p>
                          </div>
                          <div className="owners">
                            <img src={ownersIcon} alt='Owners symbol' />
                            <p>Owners Live Near Site</p>
                          </div>
                          <div className="insulated">
                            <img src={insulatedIcon} alt='Insulation symbol' />
                            <p>Heater and A/C</p>
                          </div>
                          <div className="grill">
                            <img src={grillIcon} alt='Grill symbol' />
                            <p>Outdoor Grill</p>
                          </div>
                          <div className="refrigerator">
                            <img src={refrigeratorIcon} alt='Refrigerator symbol' />
                            <p>Refrigerator</p>
                          </div>
                          <div className="stove">
                            <img src={stoveIcon} alt='Stove symbol' />
                            <p>Electric Stove</p>
                          </div>
                          <div className="microwave">
                            <img src={microwaveIcon} alt='Microwave symbol' />
                            <p>Microwave</p>
                          </div>
                          <div className="coffee">
                            <img src={coffeeIcon} alt='Coffee Maker symbol' />
                            <p>Coffee Maker</p>
                          </div>
                      </div>
                      <div className="mapContainer">
                          <Map />
                          <div className="mapInfo">
                              <h3>Swan Lake - Maine</h3>
                              <a href='https://www.google.com/maps/place/14+W+Moores+Shore+Ln,+Swanville,+ME+04915' target="_blank" rel="noopener noreferrer">14 West Moores Shore Lane, Swanville, ME</a>
                          </div>
                      </div>
                  </div>
                  <div className={`CTAContainer ${reserveButton()}`}>
                    <div className="CTA">
                      <div className="priceContainer">
                        <p className='price'>$750</p>
                        <p className='weekly'>Weekly</p>
                      </div>
                      <button onClick={() => {setCTAContainerClass(!CTAContainerClass)}} className={reserveButton()} >Reserve<img src={expandArrow} alt="Arrow" /></button>
                    </div>
                    <div className={`CTAContent ${reserveButton()}`}>
                      <div className="priceContainer">
                        <p className='price'>$750</p>
                        <p className='weekly'>Weekly</p>
                      </div>
                      <div className="contactContainer">
                          <ul>
                              <li><a className={`left ${leftClass}`} onClick={() => {
                                  setIsReserve(true);
                                  setLeftClass("active");
                                  setRightClass("");
                              }}><span>Reserve</span></a></li>
                              <li><a className={`right ${rightClass}`} onClick={() => {
                                  setIsReserve(false);
                                  setRightClass("active");
                                  setLeftClass("");
                              }}><span>Contact</span></a></li>
                          </ul>
                          {contactDisplay()}
                      </div>
                    </div>
                  </div>
              </div>
          </main>
          <div className='footer'>
            <p><GatsbyLink to='/PrivacyPolicy'>Privacy Policy</GatsbyLink> | Copyright © 2023, Travis Falk</p>
          </div>
      </div>
  );
}

export default IndexPage

export const Head = () => {
  return(
      <>
          <title>Loon Lookout</title>
          <meta name='description' content='Cheap, cozy cottage for rent in Swanville, Maine.' />
          <meta name='keywords' content='Rent Swanville Maine Cottage House Swanlake Lake'/>
          <link rel="canonical" href="https://loonlookout.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </>
  );
}
