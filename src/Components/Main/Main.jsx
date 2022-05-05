import React from 'react'
import Left from '../Asides/Left'
import Right from '../Asides/Right'
import Card from '../StoryCard/Card'
import device from '../../assets/device.png'
import './Main.css'
const Main = () => {
  const story={
    heading:"Hot Scoops",
    title:"Samsung Galaxy F22 launched in India: Price, features, other details",
    content:"Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.",
    image:device,
    time:"15 mins ago",
    source:"source"
  }
  return (
<div className='body'>
    <Left/>
    <div className="mainWrapper">

<h3>Top Stories for you</h3>

<div className="categories">
  <button>All</button>
  <button>Finance</button>
  <button>Business</button>
  <button>Opportunity</button>
  <button>Personal</button>
  <button>Company</button>

  <h3>...</h3>
</div>
<div className="stories">
{[...Array(10)].map((i,x) =>
    <Card story={story} key={x}/>,
  )}
</div>
    </div>
<Right/>
    </div>
  )
}

export default Main