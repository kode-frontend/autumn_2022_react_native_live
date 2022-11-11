import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from './types';
export const IconPhonePhone = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3881 17.0013C21.4039 16.2122 20.85 15.5613 20.1116 15.4571C19.1065 15.3245 18.1271 15.0808 17.1799 14.7273C16.6339 14.5221 16.016 14.6541 15.6056 15.0598L14.0331 16.6323L13.0177 15.985C10.9885 14.6916 9.26672 12.9698 7.97327 10.9407L7.32598 9.92521L8.17748 9.07371L8.88867 8.36255C9.30408 7.94247 9.43629 7.32462 9.22883 6.77271C8.87782 5.83204 8.63393 4.85266 8.5043 3.86929C8.39775 3.1153 7.75663 2.56273 6.98826 2.57022L3.99954 2.57017C3.57761 2.57056 3.17609 2.74786 2.89217 3.05888C2.6083 3.36986 2.4682 3.78582 2.5038 4.18182C2.82509 7.20839 3.84941 10.1038 5.50488 12.6594C6.99665 15.0071 8.99293 17.0027 11.358 18.5057C13.8825 20.1428 16.7638 21.1673 19.7354 21.4904C20.1727 21.53 20.5901 21.3899 20.9022 21.1036C21.2134 20.8181 21.3898 20.4146 21.3881 19.9861L21.3881 17.0013ZM22.8881 17.0013L22.8881 19.9861C22.8915 20.8308 22.5387 21.6378 21.9162 22.2089C21.2938 22.78 20.4594 23.0621 19.6001 22.9843C16.3674 22.6331 13.2623 21.5284 10.5418 19.7642C8.00173 18.1501 5.84819 15.9966 4.23885 13.4639C2.46343 10.7232 1.35855 7.60295 1.01219 4.34017C0.936396 3.50148 1.21659 2.66955 1.78433 2.0476C2.35208 1.42565 3.15508 1.07096 3.99813 1.07017L6.98829 1.07022C8.49408 1.0554 9.77754 2.15917 9.98954 3.65941C10.1063 4.5447 10.3228 5.41395 10.6342 6.24831C11.0463 7.34462 10.7827 8.58052 9.95523 9.41727L9.23814 10.1344C10.414 11.979 11.9793 13.5443 13.8239 14.7202L14.545 13.9991C15.3778 13.1756 16.6137 12.912 17.7077 13.3233C18.5443 13.6355 19.4136 13.852 20.3078 13.97C21.8117 14.1821 22.919 15.4844 22.8881 17.0013Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  );
};