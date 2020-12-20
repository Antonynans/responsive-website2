import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyles/GlobalStyles'
import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper, TopLine } from './InfosectionStyle'

const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headLine,topLine,lightText, primary, img, alt, start }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} /> 
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
