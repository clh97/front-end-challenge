import { css } from 'styled-components';

// Proudly taken fron https://www.styled-components.com/docs/advanced

const sizes = {
  ultra: 3840,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export {
  media
};
