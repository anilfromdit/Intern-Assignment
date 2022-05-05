import React from 'react'
import './Card.css'
import {FiShare} from 'react-icons/fi'
import {BiLike} from 'react-icons/bi'
import {RiShieldCheckLine} from 'react-icons/ri'

const Card = ({story}) => {
  return (
    <div className='card'>
        <div className="content">
<h6>{story.heading}</h6>
<h3>{story.title}</h3>
<p>{story.content}</p>
<div className="actionButtons">
    <ul>

        <li>
        <BiLike/>
    <span>Relevant</span>
        </li>
        <li>
        <FiShare/>
    <span>Share</span>
        </li>
        <li>
        <RiShieldCheckLine/>
    <span>Read Later</span>
        </li>
    </ul>

    <div>
<a href={story.link}>[Source]</a>
<span style={{color:"grey",fontSize:"16px"}}>.</span>
        <span style={{color:"grey",fontSize:"16px"}}>{story.time}</span>
    </div>
</div>
</div>
<img src={story.image} alt="text version of pic,lol"/>
    </div>
  )
}

export default Card