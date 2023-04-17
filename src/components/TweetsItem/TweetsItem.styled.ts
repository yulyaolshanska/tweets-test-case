import styled from "styled-components";
import BackgroundImg from "../../img/background.svg";
import { ReactComponent as LogoImg } from "../../img/logo.svg";
import { ReactComponent as Ellipse } from "../../img/ellipse.svg";
import { ReactComponent as Rectangle } from "../../img/rectangle.svg";
import theme from "styles/theme";

interface FollowButtonProps {
  active?: boolean;
}

export const TweetItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 28px 36px 36px 36px;
  overflow: hidden;
  background: url(${BackgroundImg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: 28px 36px, 0px 0px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  box-sizing: border-box;
`;

export const Logo = styled(LogoImg)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const AvatarEllipse = styled(Ellipse)`
  position: absolute;
  top: 178px;
  left: 150px;
  z-index: 10;
`;

export const AvatarRectangle = styled(Rectangle)`
  position: absolute;
  top: 214px;
  left: 0px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 187px;
  left: 164px;
  width: 62px;
  height: 62px;
  z-index: 10;
  border-radius: 50%;
  background-color: #5736a3;
`;

export const InfoContainer = styled.div`
  margin-top: 264px;
  text-align: center;
`;

export const TweetsCount = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowersCount = styled.p`
  margin-bottom: 26px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowButton = styled.button<FollowButtonProps>`
  padding: 14px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  background: ${(p: FollowButtonProps) =>
    p.active ? theme.colors.backgroundBtn : theme.colors.backgroundActiveBtn};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;
