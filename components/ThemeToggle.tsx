import Image from 'next/image';

import { useTheme } from './ThemeContext';

import styles from './ThemeToggle.module.css';

/*
{
  height: "50",            (dimension) [REQUIRED]
  width: "50",             (dimension) [REQUIRED]
  stroke: ""               (color)     [OPTIONAL]
  fill: ""                 (color)     [OPTIONAL]
  imgClass: styles.bulbImg (class)     [OPTIONAL]
}
*/

function bulb({ height, width, fill='', imgClass='' }) {
  const stringSVG =
    `<svg width="352px" height="512px" viewBox="0 0 352 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
       <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
         <g id="lightbulb" fill="${fill === '' ? '#000000' : fill}" fillRule="nonzero">
           <path d="M256,384 C265.6,352.1 285.5,324.9 305.2,297.8 C305.2,297.8 305.2,297.8 305.2,297.8 C310.4,290.7 315.6,283.6 320.6,276.4 C340.4,247.9 352,213.4 352,176.1 C352,78.8 273.2,0 176,0 C78.8,0 0,78.8 0,176 C0,213.3 11.6,247.9 31.4,276.3 C36.4,283.5 41.6,290.6 46.8,297.7 C46.8,297.7 46.8,297.7 46.8,297.7 C66.6,324.8 86.5,352.1 96,383.9 L256,383.9 L256,384 Z M176,512 C220.2,512 256,476.2 256,432 L256,416 L96,416 L96,432 C96,476.2 131.8,512 176,512 Z M96,176 C96,184.8 88.8,192 80,192 C71.2,192 64,184.8 64,176 C64,114.1 114.1,64 176,64 C184.8,64 192,71.2 192,80 C192,88.8 184.8,96 176,96 C131.8,96 96,131.8 96,176 Z" id="Shape">
           </path>
         </g>
       </g>
     </svg>`;

  const encodedSVG = `data:image/svg+xml;utf8,${encodeURIComponent(stringSVG)}`;

  return (
    imgClass === ''
      ? <Image height={height} width={width} src={encodedSVG} alt='Lightbulb Icon' />
      : <Image className={imgClass} height={height} width={width} src={encodedSVG} alt='Lightbulb Icon' />
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const light = { height: '30', width: '15', fill: '#0b1418' };
  const dark = { height: '30', width: '15', fill: '#cfd7d6' };

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      { theme === 'light' ? bulb({...light}) : bulb({...dark}) }
    </button>
  );
}

export default ThemeToggle;