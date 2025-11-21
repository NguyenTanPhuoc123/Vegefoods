import React from 'react'
import './CircleQuality.css'
import { Container, Image } from 'react-bootstrap'

type CircleQualityProps = {
    bgColor:string,
    title:string,
    description:string,
    icon?:string
}

const CircleQuality = (props: CircleQualityProps) => {
    const {bgColor,title,description,icon} = props;
  return (
    <Container className='circle-quality'>
    <Container id='bg-circle-quality' style={{"--bg-color":bgColor} as React.CSSProperties }>
        <Container id='content-circle-quality'>
        <Image className='icon' src={icon} alt='icon-circle-quality'/>
        </Container>
    </Container>
    <h6>{title}</h6>
    <p>{description}</p>
    </Container>
  )
}

export default CircleQuality