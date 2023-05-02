import styled, { keyframes } from "styled-components/macro";

import {Themes} from "../../../constants/globalStyle";

/*
Themes has this form {
  true: white theme options,
  false: dark theme options
}

*/

export const Container = styled.div`
  background: ${({ white }) => Themes[white].background};
  color: ${({ white }) => Themes[white].color};
  transition: background 500ms;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Logo = styled.div`
  font-size: 3rem;
  font-weight: 900;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  & a {
    text-decoration: none;
  }
`;

const ApperAnimation = keyframes`
    0% {
        display: none;
        left: -10rem;
    }
    100% {
        display: flex;
        left: 0;
    }
`;

export const LinkContainer = styled.div.attrs((props) => ({
  "aria-expanded": props.expanded,
}))`
  background: ${({ white }) => Themes[white].background};
  color: ${({ white }) => Themes[white].color};
  transition: background 500ms;

  position: absolute;
  top: 4rem;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 2rem;

  @media (max-width: 600px) {
    width: 120px;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    gap: 1rem;
  }

  &[aria-expanded="false"] {
    display: none;
  }
  animation-name: ${ApperAnimation};
  animation-duration: 500ms;
`;

export const Link = styled.div`
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Hamburger = styled.div.attrs((props) => ({
  "aria-expanded": props.expanded,
}))`
  display: flex;
  align-items: center;

  & svg {
    fill: none;
    stroke: ${({ white }) => Themes[white].color};
    width: 3rem;
    height: 3.5rem;
  }

  & path {
    transform-origin: center;
    transition: 1s;
    stroke-dasharray: 30 16 30 300;
  }

  &[aria-expanded="true"] path {
    stroke-dasharray: 30 50 30 300;
    stroke-dashoffset: -46;
    translate: 5px -5px;
    rotate: 0.125turn;
  }
`;

export const ChangeThemeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 3rem;
  height: 1.5rem;
  border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
  padding: 2px;
  background: ${({ white }) => Themes[white].background};
  outline: 1px solid ${({ white }) => Themes[white].color};
  transition: all 500ms;
`;

export const WhiteTheme = styled.div`
  width: 1.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const DarkTheme = styled.div`
  width: 1.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const ThemeSelector = styled.div.attrs((props) => ({
  "aria-selected": props.white,
}))`
  position: absolute;
  width: 1.5rem;
  aspect-ratio: 1;
  background: ${({ white }) => Themes[white].color};
  border-radius: 50%;

  &[aria-selected="true"] {
    left: 5%;
  }
  &[aria-selected="false"] {
    left: 50%;
  }

  transition: all 500ms;
`;

export const White = ({ white = true }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 3.75V3C11.25 2.80109 11.329 2.61032 11.4697 2.46967C11.6103 2.32902 11.8011 2.25 12 2.25C12.1989 2.25 12.3897 2.32902 12.5303 2.46967C12.671 2.61032 12.75 2.80109 12.75 3V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66557 17.6532 8.59647 17.0818 7.75736 16.2426C6.91824 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45672 9.7039C6.91085 8.60754 7.67988 7.67047 8.66658 7.01118C9.65327 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12ZM16.5 12C16.5 11.11 16.2361 10.24 15.7416 9.49993C15.2471 8.75991 14.5443 8.18314 13.7221 7.84254C12.8998 7.50195 11.995 7.41283 11.1221 7.58647C10.2492 7.7601 9.44736 8.18868 8.81802 8.81802C8.18868 9.44736 7.7601 10.2492 7.58647 11.1221C7.41283 11.995 7.50195 12.8998 7.84254 13.7221C8.18314 14.5443 8.75991 15.2471 9.49993 15.7416C10.24 16.2361 11.11 16.5 12 16.5C13.1931 16.4988 14.337 16.0243 15.1806 15.1806C16.0243 14.337 16.4988 13.1931 16.5 12ZM5.46938 6.53063C5.61011 6.67136 5.80098 6.75042 6 6.75042C6.19902 6.75042 6.38989 6.67136 6.53062 6.53062C6.67136 6.38989 6.75042 6.19902 6.75042 6C6.75042 5.80098 6.67136 5.61011 6.53063 5.46938L5.78062 4.71938C5.63989 4.57864 5.44902 4.49958 5.25 4.49958C5.05098 4.49958 4.86011 4.57864 4.71938 4.71938C4.57864 4.86011 4.49958 5.05098 4.49958 5.25C4.49958 5.44902 4.57864 5.63989 4.71938 5.78062L5.46938 6.53063ZM5.46938 17.4694L4.71938 18.2194C4.57864 18.3601 4.49958 18.551 4.49958 18.75C4.49958 18.949 4.57864 19.1399 4.71938 19.2806C4.86011 19.4214 5.05098 19.5004 5.25 19.5004C5.44902 19.5004 5.63989 19.4214 5.78062 19.2806L6.53063 18.5306C6.60031 18.4609 6.65558 18.3782 6.6933 18.2872C6.73101 18.1961 6.75042 18.0985 6.75042 18C6.75042 17.9015 6.73101 17.8039 6.6933 17.7128C6.65558 17.6218 6.60031 17.5391 6.53063 17.4694C6.46094 17.3997 6.37822 17.3444 6.28717 17.3067C6.19613 17.269 6.09855 17.2496 6 17.2496C5.90145 17.2496 5.80387 17.269 5.71283 17.3067C5.62178 17.3444 5.53906 17.3997 5.46938 17.4694ZM18 6.75C18.0985 6.75008 18.1961 6.73074 18.2871 6.6931C18.3782 6.65546 18.4609 6.60025 18.5306 6.53063L19.2806 5.78062C19.4214 5.63989 19.5004 5.44902 19.5004 5.25C19.5004 5.05098 19.4214 4.86011 19.2806 4.71938C19.1399 4.57864 18.949 4.49958 18.75 4.49958C18.551 4.49958 18.3601 4.57864 18.2194 4.71938L17.4694 5.46938C17.3644 5.57427 17.2928 5.70796 17.2639 5.85352C17.2349 5.99908 17.2497 6.14998 17.3065 6.28709C17.3633 6.42421 17.4596 6.54139 17.583 6.62379C17.7065 6.70619 17.8516 6.75012 18 6.75ZM18.5306 17.4694C18.3899 17.3286 18.199 17.2496 18 17.2496C17.801 17.2496 17.6101 17.3286 17.4694 17.4694C17.3286 17.6101 17.2496 17.801 17.2496 18C17.2496 18.199 17.3286 18.3899 17.4694 18.5306L18.2194 19.2806C18.2891 19.3503 18.3718 19.4056 18.4628 19.4433C18.5539 19.481 18.6515 19.5004 18.75 19.5004C18.8485 19.5004 18.9461 19.481 19.0372 19.4433C19.1282 19.4056 19.2109 19.3503 19.2806 19.2806C19.3503 19.2109 19.4056 19.1282 19.4433 19.0372C19.481 18.9461 19.5004 18.8485 19.5004 18.75C19.5004 18.6515 19.481 18.5539 19.4433 18.4628C19.4056 18.3718 19.3503 18.2891 19.2806 18.2194L18.5306 17.4694ZM3.75 11.25H3C2.80109 11.25 2.61032 11.329 2.46967 11.4697C2.32902 11.6103 2.25 11.8011 2.25 12C2.25 12.1989 2.32902 12.3897 2.46967 12.5303C2.61032 12.671 2.80109 12.75 3 12.75H3.75C3.94891 12.75 4.13968 12.671 4.28033 12.5303C4.42098 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.42098 11.6103 4.28033 11.4697C4.13968 11.329 3.94891 11.25 3.75 11.25ZM12 19.5C11.8011 19.5 11.6103 19.579 11.4697 19.7197C11.329 19.8603 11.25 20.0511 11.25 20.25V21C11.25 21.1989 11.329 21.3897 11.4697 21.5303C11.6103 21.671 11.8011 21.75 12 21.75C12.1989 21.75 12.3897 21.671 12.5303 21.5303C12.671 21.3897 12.75 21.1989 12.75 21V20.25C12.75 20.0511 12.671 19.8603 12.5303 19.7197C12.3897 19.579 12.1989 19.5 12 19.5ZM21 11.25H20.25C20.0511 11.25 19.8603 11.329 19.7197 11.4697C19.579 11.6103 19.5 11.8011 19.5 12C19.5 12.1989 19.579 12.3897 19.7197 12.5303C19.8603 12.671 20.0511 12.75 20.25 12.75H21C21.1989 12.75 21.3897 12.671 21.5303 12.5303C21.671 12.3897 21.75 12.1989 21.75 12C21.75 11.8011 21.671 11.6103 21.5303 11.4697C21.3897 11.329 21.1989 11.25 21 11.25Z"
        fill={Themes[white].color}
      />
    </svg>
  );
};

export const Dark = ({ white = true }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7622 13.4662C21.6899 13.3941 21.5994 13.343 21.5003 13.3184C21.4012 13.2938 21.2973 13.2966 21.1997 13.3266C19.7372 13.7686 18.1821 13.8055 16.7002 13.4335C15.2184 13.0614 13.8652 12.2942 12.785 11.2137C11.7048 10.1332 10.938 8.77982 10.5663 7.29785C10.1946 5.81589 10.232 4.26084 10.6744 2.79843C10.7039 2.70091 10.7065 2.59719 10.6816 2.49836C10.6568 2.39952 10.6057 2.30928 10.5335 2.23727C10.4614 2.16526 10.3711 2.1142 10.2723 2.08952C10.1734 2.06485 10.0697 2.0675 9.9722 2.09718C8.03304 2.69211 6.33079 3.88326 5.10751 5.50124C3.72082 7.34258 3.04592 9.62285 3.20706 11.9223C3.3682 14.2217 4.35452 16.3856 5.98446 18.0155C7.6144 19.6455 9.77826 20.6318 12.0777 20.7929C14.3772 20.9541 16.6574 20.2792 18.4988 18.8925C20.1168 17.6692 21.3079 15.967 21.9028 14.0278C21.9325 13.9302 21.9351 13.8265 21.9103 13.7275C21.8855 13.6286 21.8343 13.5383 21.7622 13.4662ZM17.8247 17.9934C16.1999 19.2121 14.19 19.8037 12.1641 19.6597C10.1381 19.5157 8.23214 18.6458 6.79598 17.2096C5.35983 15.7735 4.4899 13.8675 4.34593 11.8416C4.20195 9.81563 4.79358 7.80576 6.0122 6.18093C6.88018 5.03008 8.02591 4.1182 9.3422 3.53062C9.06508 5.05276 9.16121 6.61941 9.62235 8.09625C10.0835 9.5731 10.8959 10.9161 11.9899 12.0101C13.0839 13.1041 14.4269 13.9165 15.9038 14.3777C17.3806 14.8388 18.9472 14.9349 20.4694 14.6578C19.8834 15.9758 18.9725 17.1235 17.8219 17.9934H17.8247Z"
        fill={Themes[white].color}
      />
    </svg>
  );
};
