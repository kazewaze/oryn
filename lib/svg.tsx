import Image from 'next/image';

/*
    *** ICONS in Space-Kit Folder (USE THEM) ***
    *** Drop them into Sketch and copy svg code ***

  Turn the bulb() function into a lib file (this one - svg.ts).
  SVG code for the bulb icon below:
*/

/*
  const example = {
    svgStr: `\
    <svg width="284px" height="284px" viewBox="0 0 284 284" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="plus" transform="translate(-108.000000, -108.000000)" fill="#000000" fill-rule="nonzero">
          <path d="M401.419558,212.14511 L287.85489,212.14511 L287.85489,98.5804416 C287.85489,84.6451104 276.553628,73.3438486 262.618297,73.3438486 L237.381703,73.3438486 C223.446372,73.3438486 212.14511,84.6451104 212.14511,98.5804416 L212.14511,212.14511 L98.5804416,212.14511 C84.6451104,212.14511 73.3438486,223.446372 73.3438486,237.381703 L73.3438486,262.618297 C73.3438486,276.553628 84.6451104,287.85489 98.5804416,287.85489 L212.14511,287.85489 L212.14511,401.419558 C212.14511,415.35489 223.446372,426.656151 237.381703,426.656151 L262.618297,426.656151 C276.553628,426.656151 287.85489,415.35489 287.85489,401.419558 L287.85489,287.85489 L401.419558,287.85489 C415.35489,287.85489 426.656151,276.553628 426.656151,262.618297 L426.656151,237.381703 C426.656151,223.446372 415.35489,212.14511 401.419558,212.14511 Z" id="Path" transform="translate(250.000000, 250.000000) rotate(45.000000) translate(-250.000000, -250.000000) ">
          </path>
        </g>
      </g>
    </svg>`,
    height: '30',
    width: '15',
    alt: 'Lightbulb Icon',
    fill: '#0b1418'
  };
*/

/*
  !!!
  HAVE TO CREATE A FUNCTION THAT CAN FIND THE NEEDED VALUES: (FILL & STROKE)
  WITHIN THE SVG CODE STRING AND THEN INJECT THEM...

  *** ALL OTHER VALUES ARE PASSED TO THE NEXT IMAGE COMPONENT AS PROPS ***
  !!!
*/

// fill and stroke - OPTIONAL
function svg({ svgStr, height, width, alt, fill='', stroke=''}) {
  const detectValue = value => value === '' ? '' : value;
  const encodedSVG = `data:image/svg+xml;utf8,${encodeURIComponent(svgStr)}`;

  return (
    <Image src={encodedSVG} height={height} width={width} alt={alt} fill={detectValue(fill)} stroke={detectValue(stroke)} />
  );
}

export default svg;