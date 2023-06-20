import React, { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({email: "", password:""})

  const navigate = useNavigate()

  const handleSignIn = async()=>{
     try {
         const{email, password} = formValues;
         await createUserWithEmailAndPassword(firebaseAuth, email,password)
     } catch (error) {
          console.log(error)
     }
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser)navigate('/')
  })

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h2>Unlimited movies,Tv shows and more</h2>
            <h4>watch anywhere, Cancel Anytime</h4>
            <h5>
              Raedy to watch? Enter your email to create or restart menbership
            </h5>
          </div>
          <div className="form">
            {showPassword ? (
              <input type="password" placeholder="password" name="password"
              value={formValues.password}
              onChange={(e)=>setFormValues({
                ...formValues,[e.target.name]: e.target.value
              })}
              />
            ) : (
              <input type="email" placeholder="email address" name="email"
              value={formValues.email}
              onChange={(e)=>setFormValues({
                ...formValues,[e.target.name]: e.target.value
              })}
              />
            )}

            {
              !showPassword ? (
                <button onClick={()=>setShowPassword(true)}>Get Started {">"}</button>
              ): <button onClick={handleSignIn}>Sign Up</button>
            }

           
           
          </div>
        </div>
      </div>
      {/* feature1 */}
      <div class="features__container">
      <div class="feature">
            <div class="feature__details">
              <h3 class="feature__title">Enjoy on your TV</h3>
              <h5 class="feature__sub__title">
                  Watch on smart TVs, PlayStation, 
              Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
              </h5>
           </div>
           <div class="feature__image__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="Feature image"
              class="feature__image"
            />
            <div class="feature__backgroud__video__container">
              <video autoplay playsInline loop muted
                class="feature__backgroud__video"
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
      </div>
      {/* featur2 */}
      <div class="feature1">
          <div class="feature__details1">
            <h3 class="feature__title1">
              Download your shows to watch offline.
            </h3>
            <h5 class="feature__sub__title1">
              Save your favourites easily and always have something to watch.
            </h5>
          </div>
          <div class="feature__image__container1">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Feature image"
              class="feature__image1"
            />
            <div class="feature__2__poster__container">
              <div class="poster__container">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="poster"
                  class="poster"
                />
              </div>
              <div class="poster__details">
                <h4>Stranger Things</h4>
                <h6>Downloading...</h6>
              </div>
              <div class="download__gif__container">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt="downloading gif"
                  class="gif"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature 3 --> */}
        <div class="feature2">
          <div class="feature__details2">
            <h3 class="feature__title2">Watch everywhere.</h3>
            <h5 class="feature__sub__title2">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h5>
          </div>
          <div class="feature__3__image__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="Feature image"
              class="feature__imagefeature__3__image"
            />
            <div
              class="
                feature__3__backgroud__video__container
              "
            >
              <video
                autoplay=""
                loop=""
                muted=""
                class="feature__3__backgroud__video"
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div> 
        {/* <!-- Feature 4 --> */}
        <div class="feature3">
          <div class="feature__details3">
            <h3 class="feature__title1">Create profiles for children.</h3>
            <h5 class="feature__sub__title1">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h5>
          </div>
          <div class="feature__image__container3">
            <img
              src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
              alt="Feature image"
              class="feature__image3"
            />
          </div>
        </div>
        <div class="FAQ__list__container">
        <h1 class="FAQ__heading">Frequently Asked Questions</h1>
        <div class="FAQ__list">
          <div class="FAQ__accordian">
            <button class="FAQ__title">
              What is Netflix?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </div>
          </div>
          <div class="FAQ__accordian">
            <button class="FAQ__title">
              How much does netflix cost?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
              </p>
            </div>
          </div>
          <div class="FAQ__accordian">
            <button class="FAQ__title">
              Where can i watch?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
                Watch anywhere, anytime, on an unlimited number of devices. Sign
                in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any
                internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and
                game consoles.
              </p>
              <p>
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
              </p>
            </div>
          </div>
          <div class="FAQ__accordian">
            <button class="FAQ__title">
              How do I cancel?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
              </p>
            </div>
          </div>
          <div class="FAQ__accordian">
            <button class="FAQ__title">
              What can I watch from Netflix?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </div>
          <div class="FAQ__accordian">
            <button class="FAQ__title">
              Is Netflix good for kids?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
              <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </div>
          </div>
        </div>
        <div class="FAQ__get__started__email">
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="form" id="r">
            {showPassword ? (
              <input type="password" placeholder="password" name="password"
              value={formValues.password}
              onChange={(e)=>setFormValues({
                ...formValues,[e.target.name]: e.target.value
              })}
              />
            ) : (
              <input type="email" placeholder="email address" name="email"
              value={formValues.email}
              onChange={(e)=>setFormValues({
                ...formValues,[e.target.name]: e.target.value
              })}
              />
            )}

            {
              !showPassword ? (
                <button onClick={()=>setShowPassword(true)}>Get Started {">"}</button>
              ): <button onClick={handleSignIn}>Sign Up</button>
            }

           
           
          </div>
        </div>
      </div>
      <footer>
      <div class="footer__row__1">
        <h4>Questions? Call 000-800-040-1843</h4>
      </div>
      <div class="footer__row__2">
        <div class="column__1">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div class="column__2">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div class="column__3">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div class="column__4">
          <p>Media Centre</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div class="footer__row__3">
        <div class="dropdown__container">
          <i class="fas fa-globe"></i>
          <select
                name="languages"
                id="languagesSelect"
                class="lan"
              >
                <option lan="en" label='English' value="english" selected>English</option>
                <option lan="hi" label='हिन्दी' value="hindi">हिन्दी</option>
              </select>
        </div>
      </div>
      <div class="footer__row__4">
        <p>Netflix India</p>
      </div>
    </footer>
    </div>
   </Container>
    
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 2rem;
      color: white;
      padding: 1rem;
    }
    h2 {
      padding: 0 15rem;
    }
    h4 {
     margin: 1rem;
     font-size: 25px;
     font-weight: 400;
     
    }
    h5 {
     margin: 1rem;
     font-size: 25px;
     font-weight: 400;

    }
  }
  .form {
    display: grid;
    width: 60%;
    grid-template-columns: ${({showPassword})=>showPassword? "1fr 1fr" : "2fr 1fr"};
    input {
      color: black;
      padding: 1rem;
      font-size: 1.2rem;
      border: 1px solid grey;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.79);
      width: 25rem;
      margin-left:120px;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      cursor: pointer;
      color: white;
      border: none;
      font-size: 1.2rem;
      border-radius: 0.2rem;
      width: 10rem;
      font-weight:bolder
    }
  }
  .feature {
    border-top: 8px solid #222;
    padding-bottom: 22rem;
    height: fit-content;
    .feature__details {
    text-align:initial;
    color: white;
    width: 50%;
    height: fit-content;

     .feature__title {
       font-size: 25px;
       font-weight: 300;
       margin: 10px 100px;
       position: relative;
       top: 140px;
       font-size: 3rem;
       font-weight: bolder;
       }
     .feature__sub__title {
      display: flex;
      flex-direction: initial;
      margin-left: 100px;
       font-size: 15px;
       font-weight: 300;
       position: relative;
       top: 140px;
       font-size: 2rem;
       
       }
    }
    .feature__image__container {
       width: 35%;
       margin-left: 53%;
       margin-top: -7rem;
       position: absolute;
       top: 21.7%;
      .feature__image {
         width: 100%;
         }
    }
  
  
   .feature__backgroud__video__container {
       position: absolute;
       width: 100%;
       top: 20%;
       left: 13%;
       height: 100%;
       max-width: 73%;
       max-height: 54%;
       z-index: -2;
       .feature__backgroud__video {
          width: 100%;
        }
   }
  }
   .feature1 {
    border-top: 8px solid #222;
    padding-bottom: 22rem;
    .feature__image__container1 {
       width: 35%;
       margin-left: 10%;
       position:absolute;
       top: 33.1%;
      .feature__image1 {
         width: 100%;
         }
      .feature__2__poster__container {
         position: absolute;
         bottom: 8%;
         right: -5%;
         transform: translateX(-50%);
         width: 100%;
         max-width: 16em;
         display: flex;
         align-items: center;
         background-color: black;
         border: 2px solid rgba(255, 255, 255, 0.25);
         border-radius: 10px;
         height: 60px;
         padding: 0.25rem 0.6rem;
         gap: 15px;
         .poster__container {
            width: 20%;
            .poster {
              width: 100%;
              height: 100%;
            }
          }
          .poster__details {
            width: 60%;
            .poster__details > h4 {
               font-size: 13px;
               font-weight: 500;
            }
            .poster__details > h6 {
              font-size: 12px;
              font-weight: 400;
              color: rgb(63, 63, 246);
            }
          }
          .download__gif__container {
              width: 20%;
              height: 100%;
              .gif {
                 width: 100%;
                 height: 100%;
              }
          }
      }
    } 
  }
  .feature2 {
    border-top: 8px solid #222;
    padding-bottom: 22rem;
    height: fit-content;
    .feature__details2 {
    text-align:initial;
    color: white;
    width: 50%;
    height: fit-content;

     .feature__title2 {
       font-size: 25px;
       font-weight: 300;
       margin: 10px 100px;
       position: relative;
       top: 140px;
       font-size: 3rem;
       font-weight: bolder;
       }
     .feature__sub__title2 {
      display: flex;
      flex-direction: initial;
      margin-left: 100px;
       font-size: 15px;
       font-weight: 300;
       position: relative;
       top: 140px;
       font-size: 2rem;
       
       }
    }
    .feature__3__image__container {
       width: 35%;
       margin-left: 53%;
       margin-top: -7rem;
       position: absolute;
       top: 51.4%;
      .feature__imagefeature__3__image {
         width: 100%;
         }
    }
  
  
   .feature__3__backgroud__video__container {
       position: absolute;
       width: 100%;
       top: 10%;
       left: 17%;
       height: 100%;
       max-width: 65%;
       max-height: 54%;
       z-index: -2;
       .feature__3__backgroud__video {
          width: 100%;
        }
   }
  }
  .feature3 {
    border-top: 8px solid #222;
    padding-bottom: 22rem;
    .feature__image__container3 {
       width: 35%;
       margin-left: 10%;
       position:absolute;
       top: 60%;
      .feature__image3 {
         width: 100%;
         }
      /* .feature__2__poster__container {
         position: absolute;
         bottom: 8%;
         right: -5%;
         transform: translateX(-50%);
         width: 100%;
         max-width: 16em;
         display: flex;
         align-items: center;
         background-color: black;
         border: 2px solid rgba(255, 255, 255, 0.25);
         border-radius: 10px;
         height: 60px;
         padding: 0.25rem 0.6rem;
         gap: 15px; */
         /* .poster__container {
            width: 20%;
            .poster {
              width: 100%;
              height: 100%;
            }
          } */
          /* .poster__details {
            width: 60%;
            .poster__details > h4 {
               font-size: 13px;
               font-weight: 500;
            }
            .poster__details > h6 {
              font-size: 12px;
              font-weight: 400;
              color: rgb(63, 63, 246);
            }
          } */
          /* .download__gif__container {
              width: 20%;
              height: 100%;
              .gif {
                 width: 100%;
                 height: 100%;
              }
          } */
      }
  }
  .FAQ__list__container {
    border-top: 8px solid #222;
    padding: 2rem 0;
    .FAQ__heading {
    font-size: 40px;
    color: white;
    text-align: center;
    font-weight: 1000;
    margin: 3rem;
    }
    .FAQ__list {
    display: flex;
    padding: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .FAQ__accordian {
    width: 80%;
    border: 1px solid #303030;
    .FAQ__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    font-size: 18px;
    background-color: #303030;
    border: 1px solid #303030;
    color: white;
  }
  
  .FAQ__visible {
    background-color: #303030;
    border-top: 1px solid black;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    .FAQ__visible > p {
       margin: 1rem;
       }
     }
   } 
 }
 .FAQ__get__started__email {
    text-align: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: lighter;
    .FAQ__get__started__email > h3 {
    font-size: 18px;
    font-weight: 400;
    margin: 2rem 0;
    
  }
  }
  }
  footer {
    border-top: 8px solid #333;
    padding: 2rem 1rem;
    color: #757575;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .footer__row__2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    margin-left: 65px;
    }
  
  .footer__row__1 > h4 {
    font-size: 15px;
    font-weight: 500;
    margin-left: 11.5%;
    color: lightgray;
    }
    
  }
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  /* 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  @media (min-width: 768px) {
    .hero__bg__image__container {
      height: 100vh;
    }
  
    .hero__bg__overlay {
      height: 100vh;
    }
    .hero__card {
      top: 40%;
      left: 30%;
      transform: translate(-20%, -20%);
    }
    .hero__title {
      font-size: 3rem;
    }
    .hero__subtitle,
    .hero__description {
      font-size: 1.3rem;
    }
  
    .feature {
      padding: 4rem;
    }
  
    .feature__title {
      font-size: 35px;
    }
  
    .feature__sub__title {
      font-size: 20px;
    }
    .feature__2__poster__container {
      max-width: 26em;
      height: 85px;
    }
    .poster__container {
      width: 15%;
    }
    .download__gif__container {
      width: 3rem;
      height: 3rem;
    }
  
    .poster__details > h4 {
      font-size: 18px;
    }
    .poster__details > h6 {
      font-size: 14px;
    }
    .FAQ__title {
      font-size: 20px;
    }
    .FAQ__heading {
      font-size: 38px;
      font-weight: 500;
      letter-spacing: 1px;
    }
    .FAQ__list {
      padding: 1rem 5rem;
    }
    .FAQ__get__started__email {
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transform: translateX(15%);
    }
  }
  
  @media (min-width: 1024px) {
    .navbar {
      padding: 2% 5%;
    }
  
    .navbar__brand {
      width: 150px;
    }
  
    .signin__button {
      padding: 10px 20px;
      font-size: 18px;
    }
    .dropdown__container {
      padding: 10px 5px;
    }
  
    .navbar__nav__items {
      gap: 30px;
    }
  
    .hero__card {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  
    .form__container {
      width: 50%;
    }
    .email__form__container {
      flex-direction: row;
      align-items: center;
      gap: 1px;
    }
    .primary__button {
      height: 50px;
    }
  
    .feature {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
  
    .feature__details {
      text-align: left;
      padding: 0 6rem;
    }
  
    .feature__title {
      font-size: 50px;
    }
  
    .feature__sub__title {
      font-size: 25px;
    }
  
    .feature__image__container {
      max-width: 500px;
    }
  
    .feature:nth-child(even) {
      flex-direction: row-reverse;
    }
  
    .feature__2__poster__container {
      max-width: 20em;
      height: 100px;
      padding: 1rem;
    }
    .poster__container {
      width: 20%;
    }
    .FAQ__list {
      padding: 1rem 25rem;
    }
    .FAQ__get__started__email {
      transform: translateX(16%);
    }
    footer {
      padding: 2rem 20rem;
      justify-content: flex-start;
      text-align: left;
      align-items: flex-start;
    }
  
    .footer__row__2 {
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: nowrap;
    }
  
    .footer__row__1,
    .footer__row__3,
    .footer__row__4 {
      align-self: flex-start;
    }
  }
  
  @media (min-width: 1254px) {
  } */
`;

export default SignUpPage;
