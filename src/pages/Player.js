import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate()
  return (
    <PlayContainer>
        <div className='player'>
          <div className='backArrow'>
            <BsArrowLeft onClick={()=>navigate(-1)}/>
          </div>
          <video src='https://res.cloudinary.com/dxr0jgdza/video/upload/v1687632547/Iron_Man_3_Domestic_Trailer_2-480p-HDTN_oprkcn.mp4'
          autoPlay loop controls 
          />
        </div>
    </PlayContainer>
  )
}

const PlayContainer = styled.div`
    .player{
      width: 100vw;
      height: 100vh;
      .backArrow{
         position: absolute;
         padding: 2rem;
         z-index: 1;
         svg{
          font-size: 3rem;
          cursor: pointer;
          color: white;
         }
      }
     video{
      height: 100%;
      width: 100%;
     }
    }
`

export default Player