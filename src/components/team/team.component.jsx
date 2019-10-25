import React from 'react';
import Title from '../title/title.component';
import { TeamStyle, TeamHolder, TeamMember, MemberInfo } from './team.styles';
import BackgroundImage from '../background-image/background-image.component';
import { withTranslation } from 'react-i18next';
import hiker1 from '../../resources/images/team/hiker1.jpg';
import hiker2 from '../../resources/images/team/hiker2.jpg';
import hiker3 from '../../resources/images/team/hiker3.jpg';

const Team = ({ t }) => {
    return (
        <TeamStyle>
            <Title title={t('descriptions.team.title')} text={t('descriptions.team.text')} />
            <TeamHolder>
                <TeamMember>
                    <BackgroundImage elWidth="100%" elHeight="29rem" imageUrl={hiker1} />
                    <MemberInfo>
                        <span>JOHN DOE</span>
                        <span>Cortina, Italy</span>
                    </MemberInfo>
                </TeamMember>

                <TeamMember>
                    <BackgroundImage elWidth="100%" elHeight="29rem" imageUrl={hiker2} />
                    <MemberInfo>
                        <span>JESSICA SIMPSON</span>
                        <span>Chamonix-Mont-Blanc, France</span>
                    </MemberInfo>
                </TeamMember>

                <TeamMember>
                    <BackgroundImage elWidth="100%" elHeight="29rem" imageUrl={hiker3} />
                    <MemberInfo>
                        <span>ROBERT BROWN</span>
                        <span>Kitzbühel, Austria</span>
                    </MemberInfo>
                </TeamMember>

            </TeamHolder>

        </TeamStyle>
    );
};

export default withTranslation('common')(Team);