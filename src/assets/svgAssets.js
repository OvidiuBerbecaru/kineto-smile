import React from 'react';

export const CeTratam = props => (
  <svg width={210} height={210} {...props} className="position-absolute separator-message">
    <defs>
      <filter
        id="prefix__a"
        x={0}
        y={0}
        width={210}
        height={210}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={10} result="b" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="prefix__b"
        x={61.45}
        y={58.95}
        width={68}
        height={67}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={1} result="d" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="d" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="prefix__c"
        x={122.968}
        y={58.956}
        width={28}
        height={63}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={1} result="f" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="f" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="prefix__d"
        x={61.919}
        y={116.962}
        width={86}
        height={30}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={1} result="h" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="h" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#prefix__a)">
      <circle cx={75} cy={75} r={75} transform="translate(30 27)" fill="#fff" />
    </g>
    <g filter="url(#prefix__b)">
      <text
        transform="translate(93.45 105.95)"
        fill="#ff4d00"
        fontSize={49}
        fontFamily="Colus-Regular, Colus"
      >
        <tspan x={-30.797} y={0}>
          {'CE'}
        </tspan>
      </text>
    </g>
    <g filter="url(#prefix__c)">
      <text
        transform="translate(134.97 102.96)"
        fill="#ff4d00"
        fontSize={46}
        fontFamily="Colus-Regular, Colus"
      >
        <tspan x={-10.465} y={0}>
          {'?'}
        </tspan>
      </text>
    </g>
    <g filter="url(#prefix__d)">
      <text
        transform="translate(102.92 135.96)"
        fill="#ff4d00"
        fontSize={19}
        fontFamily="Colus-Regular, Colus"
      >
        <tspan x={-39.178} y={0}>
          {'tratam'}
        </tspan>
      </text>
    </g>
  </svg>
);
