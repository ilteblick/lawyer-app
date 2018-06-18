import React from 'react';

import { Link } from 'react-router-dom';

import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import Text from 'components/Text';
import Banner from 'components/Banner';
import PersonInfo from 'components/PersonInfo';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

import Photo from './resources/Deborah-Soleymani[2].jpg';
import { StyledPersonContainer, StyledPageContainer, Img, StyledLi, StyledUl } from './styled';

export default function PersonPage() {
    return (
        <StyledPageContainer>
            <Banner label="Person" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Person</BradcrumpsLink>
            </Bradcrumps>

            <StyledPersonContainer>
                <Title>Deborah Soleymani</Title>
                <SubTitle>Associate Attorney, Family Law</SubTitle>
                <Text>About: Deborah Soleymani is an Associate Attorney who handles all areas of family law. These include dissolution, child custody disputes, and domestic violence. Prior to becoming an associate, Ms. Soleymani was a Senior Law Clerk for the firm. She is fluent in Farsi.</Text>

                <div style={{ display: 'flex' }}>
                    <Img src={Photo} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <PersonInfo>Education: Bachelors in English, University of California, Los Angeles (UCLA); Southwestern University Law School</PersonInfo>
                        <PersonInfo>Accreditation: Member of the Pasadena Bar Association</PersonInfo>
                    </div>
                </div>

                <div style={{ margin: '1em 0em' }}>
                    <span style={{ fontSize: '1.75em' }}>Community Involvement & Educational Activities:</span>
                    <StyledUl>
                        <StyledLi><Text>Break the Cycle - a national, non-profit organization that empowers youth to end domestic violence</Text></StyledLi>
                        <StyledLi><Text>Extern in the Preliminary Hearings Unit of the Los Angeles County District Attorneys Office</Text></StyledLi>
                        <StyledLi><Text>Litigation Assistant at a civil litigation firm during her last 2 years of law school</Text></StyledLi>
                    </StyledUl>
                </div>

                <Text>Experience: Ms. Soleymani has dedicated her legal career to providing efficient representation on behalf of clients. During law school, she excelled in her classes and grew in her knowledge and experience of civil litigation. Her hands-on approach to learning makes her a fierce legal advocate for clients facing stressful family law cases today.</Text>
            </StyledPersonContainer>
        </StyledPageContainer>
    );
}
