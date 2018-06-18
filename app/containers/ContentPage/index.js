import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function ContentPage() {
    return (
        <StyledPageWrapper>
            <Banner label="Person" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Person</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <Title>Pasadena Child Abuse Attorney</Title>
                <SubTitle>Protecting Children from Domestic Violence</SubTitle>
                <Text>We have all heard the terrible stories of children who were abused growing up, or perhaps have seen the effects and aftermath of such abuse. For you, however, the situation may be much more personal. If your child or the child of someone you know is suffering from domestic violence and abuse, it is your duty to speak up on the child's behalf to protect them from further abuse. Searching for an attorney for a child abuse case in Pasadena? Speak with a Pasadena domestic violence lawyer as soon as possible to find out what legal options are available to report abuse and prevent further violence against a defenseless child.</Text>
                <Text>On the other hand, you may be facing false charges of child abuse due to a bitter or angry spouse, partner, or child. Our law firm has a comprehensive understanding of California's family law, as well as extensive experience in criminal defense. We know what strategies the prosecution may use to handle your case and can build your defense accordingly. Learn more by speaking with a member of our team as soon as possible.</Text>
                <SubTitle>Restraining Orders for Child Abuse</SubTitle>
                <Text>Child abuse can come in many forms. Some are non-violent, such as emotional abuse, psychological abuse, or neglect, while other cases can be violent or cause physical harm, such as physical or sexual abuse. No matter what the situation may be, a restraining order can be obtained to prevent the abuse from causing further harm without suffering criminal penalties. If you are a friend, neighbor, teacher, or other person looking to report child abuse, contact the Los Angeles Department of Children and Family Services. If you are the child's parent or legal guardian, you can approach the court and file for a temporary restraining order on behalf of your child, protecting them from further abuse until your court hearing for a permanent order.</Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
