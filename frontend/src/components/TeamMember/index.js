import React from 'react'
import './index.css'
const TeamMember = (props) => {
  const {memberData} = props;
    const {imgUrl,name,title} = memberData;
  return (
    <li className='team-member'>
        <img className='team-member-img' alt={name} src={imgUrl} />
        <h1 className='team-member-name'>{name}</h1>
        <p className='team-member-title'>{title}</p>
    </li>
  )
}

export default TeamMember