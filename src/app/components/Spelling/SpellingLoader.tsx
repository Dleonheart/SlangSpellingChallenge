import * as React from 'react';

import { TweenMax } from 'gsap'

export class SpellingLoader extends React.Component<{}, {}> {

  private logoSegments : HTMLCollection;

  constructor(props) {
    super(props);  
  }

  componentDidMount() {
    TweenMax.staggerFrom(this.logoSegments, .8, {alpha: 0, y: 15, repeat: -1, yoyo: true}, .1);
  }  

  render() {
    return (
    <svg viewBox="0 0 153 220">
      <g fill="none" transform="translate(-459.000000, -408.000000)">
        <g id="slang-logo" transform="translate(459.000000, 408.000000)" ref={logo => logo && (this.logoSegments = logo.children)}>
          <path d="M85.1189403,2.0435881 C75.5230385,-2.7260536 63.8571183,1.13738754 59.0495955,10.6770587 C56.7460788,15.2569737 56.3677829,20.560155 57.9980844,25.4177822 C59.6283859,30.2754093 63.1334613,34.2887436 67.7407924,36.5732467 L124.885306,64.9572596 C134.479024,69.7246555 146.141401,65.8636485 150.950404,56.3280128 C153.253921,51.7480979 153.632217,46.4449165 152.001916,41.5872894 C150.371614,36.7296622 146.866539,32.7163279 142.259208,30.4318248 L85.1189403,2.04781191 L85.1189403,2.0435881 Z" id="Shape" fill="#47AAF7"></path>
          <path d="M67.8811297,2.03967816 L10.742907,30.4231835 C6.13428936,32.7076348 2.62825997,36.7216364 0.997822127,41.5801881 C-0.632615717,46.4387399 -0.253574532,51.7428697 2.05137534,56.3231322 C6.85908331,65.8626328 18.5254529,69.7260049 28.1217244,64.9564484 L85.264193,36.5729431 C91.468968,33.4930518 95.548798,27.3522911 95.9649324,20.4667131 C96.3810669,13.5811352 93.0701909,6.99838109 87.281036,3.20120554 C81.48697,-0.603641345 74.093485,-1.04791995 67.8811297,2.03545442" id="Shape" fill="#00CA96"></path>
          <path d="M85.2570422,59.4267533 L28.1145523,31.0427404 C18.5211737,26.2753445 6.85920956,30.1363515 2.05037625,39.6719872 C-0.254101299,44.2528489 -0.632488991,49.5574834 0.998649336,54.4161952 C2.62978766,59.2749071 6.13648932,63.2886583 10.7455111,65.572399 L67.8837553,93.9564119 C77.4793174,98.7260536 89.1448245,94.8626125 93.9521771,85.3229413 C96.2542684,80.743456 96.6318203,75.4413178 95.00165,70.584702 C93.3714798,65.7280862 89.8673471,61.7154908 85.2612879,59.4309771" id="Shape" fill="#92DA0D"></path>
          <path d="M142.257507,144.427601 L85.11724,116.043588 C75.5213383,111.273946 63.8554182,115.137388 59.0478954,124.677059 C56.7457226,129.256544 56.3681573,134.558682 57.9983853,139.415298 C59.6286132,144.271914 63.13287,148.284509 67.7390922,150.569023 L124.883605,178.95726 C134.477323,183.724656 146.1397,179.863649 150.948704,170.328013 C153.253565,165.747668 153.632591,160.443444 152.002216,155.584805 C150.371841,150.726166 146.865947,146.712093 142.257507,144.427601" id="Shape" fill="#FEC600"></path>
          <path d="M67.7383784,173.425552 C63.1313699,175.710987 59.6269047,179.72496 57.9972749,184.582898 C56.367645,189.440837 56.7466011,194.744028 59.0506312,199.323788 C63.8585341,208.86177 75.5223903,212.725108 85.1181189,207.957941 L142.263623,179.571683 C148.468727,176.491494 152.548774,170.350137 152.964931,163.463892 C153.381087,156.577646 150.070035,149.994254 144.280573,146.19671 C138.487481,142.396066 131.0978,141.953412 124.888129,145.03507 L67.7383784,173.421328 L67.7383784,173.425552 Z" id="Shape" fill="#FF9200"></path>
          <path d="M85.2553422,173.428289 L28.1128519,145.042843 C18.5194732,140.275207 6.85750902,144.136409 2.04867568,153.672526 C-0.254457497,158.253189 -0.632114428,163.557048 0.998950321,168.414993 C2.63001507,173.272939 6.13589778,177.286154 10.7438105,179.570021 L67.8820551,207.955466 C77.4764862,212.725954 89.1415829,208.864344 93.950477,199.325784 C96.2539123,194.745638 96.6321947,189.442189 95.0019509,184.584316 C93.3717071,179.726444 89.8667558,175.712907 85.2595879,173.428289" id="Shape" fill="#FC6E6E"></path>
        </g>
        </g>
    </svg>
    );
  }
};
