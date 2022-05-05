import React from 'react'
import './Right.css'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineRise } from 'react-icons/ai'
const Right = () => {
    const cross = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6401 2.66602L2.97339 13.3327" stroke="#5B7083" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.97339 2.66602L13.6401 13.3327" stroke="#5B7083" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    const topicList = [
        {
            heading: "UX Design",
            subHeading: "Design",
        },
        {
            heading: "Technology",
            subHeading: "All About Technology",
        },
        {
            heading: "Python",
            subHeading: "Computer Programming",
        },
        {
            heading: "Technology",
            subHeading: "Topic",
        },
        {
            heading: "Legal",
            subHeading: "Topic",
        },
        {
            heading: "New Hire",
            subHeading: "Topic",
        },

    ]
    const history = [
        {
            title: "UX Design",
            trending: "true"
        },
        {
            title: "Marketing",
            trending: "true"
        },
        { title: "Expansion" },
        { title: "Technology" },
    ]
const showMore=
    <div className='showMore'>
                    <span>Show more</span>
                </div>
                

    return (
        <aside className='rightAside'>
            <div className="recentSearches">
                <h3>Recent Searches</h3>

{
    history.map((data,i)=>(
<div className='historyDiv' key={i}>
                    <FiSearch />
                    <span>{data.title}</span>
                    {
                        data.trending && 
                    <AiOutlineRise className='trending' />
                    }
                </div>
    ))
}
{showMore}
            </div>

            <div className="topicToFollow">
                <h3>Topics to follow</h3>
                {
                    topicList && topicList.map((data,i) => (
                        <div className='topicToFollowDiv' key={i}>
                            <div className='title'>
                                <span className='heading'>{data.heading}</span>
                                <span className='subHeading'>{data.subHeading}</span>

                            </div>

                            <div className='followButton'>
                                <span>Follow</span>
                            </div>
                            {cross
                            }

                        </div>
                    ))
                }
                {showMore}
            </div>
        </aside>
    )
}

export default Right