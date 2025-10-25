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
    <Container>
    <Container id='bg-circle-quality' style={{"--bg-color":bgColor} as React.CSSProperties }>
        <Image src={icon} className='icon' />
    </Container>
    <h2>{title}</h2>
    <p>{description}</p>
    </Container>
  )
}

export default CircleQuality