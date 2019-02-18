import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';
import { Back, TimelineLite } from 'gsap'


export interface IntroProps {
    introFinished: () => void;
}

@observer
export class SlangIntro extends React.Component<IntroProps> {
  
  private tLine : TimelineLite;
  private logoSegments : HTMLCollection;
  private logoTitle : SVGSVGElement;

  constructor(props:IntroProps) {
    super(props);
    this.animationFinished = this.animationFinished.bind(this);
  }

  private buildTimeline(): void {
    this.tLine = new TimelineLite({paused: true, onComplete: this.animationFinished});
    this.tLine.staggerFrom(this.logoSegments, 1, {alpha: 0, y: 15}, .1)
      .from(this.logoTitle, 1.2, {alpha: 0, y: 15, ease: Back.easeOut}, '-=0.7');
    this.tLine.play();
  }

  private animationFinished(): void {
    this.tLine.eventCallback('onReverseComplete', () =>{
      this.props.introFinished();
    });
    this.tLine.reverse();
  }

  componentDidMount(): void {
    this.buildTimeline();
  }

  render() {
    return (
      <div className={style.introContainer} onClick={() => this.tLine.restart()}>
        <div className={style.scene}>
          <svg width="153px" height="210px" viewBox="0 0 153 210" className={style.slangLogo}>
            <g fill="none" transform="translate(-459.000000, -408.000000)">
              <g id="slang-logo" transform="translate(459.000000, 408.000000)" ref={logo => logo && (this.logoSegments = logo.children)}>
                <path 
                  d="M85.1189403,2.0435881 C75.5230385,-2.7260536 63.8571183,1.13738754 59.0495955,10.6770587 C56.7460788,15.2569737 56.3677829,20.560155 57.9980844,25.4177822 C59.6283859,30.2754093 63.1334613,34.2887436 67.7407924,36.5732467 L124.885306,64.9572596 C134.479024,69.7246555 146.141401,65.8636485 150.950404,56.3280128 C153.253921,51.7480979 153.632217,46.4449165 152.001916,41.5872894 C150.371614,36.7296622 146.866539,32.7163279 142.259208,30.4318248 L85.1189403,2.04781191 L85.1189403,2.0435881 Z" id="Shape" fill="#47AAF7"></path>
                <path 
                  d="M67.8811297,2.03967816 L10.742907,30.4231835 C6.13428936,32.7076348 2.62825997,36.7216364 0.997822127,41.5801881 C-0.632615717,46.4387399 -0.253574532,51.7428697 2.05137534,56.3231322 C6.85908331,65.8626328 18.5254529,69.7260049 28.1217244,64.9564484 L85.264193,36.5729431 C91.468968,33.4930518 95.548798,27.3522911 95.9649324,20.4667131 C96.3810669,13.5811352 93.0701909,6.99838109 87.281036,3.20120554 C81.48697,-0.603641345 74.093485,-1.04791995 67.8811297,2.03545442" id="Shape" fill="#00CA96"></path>
                <path 
                  d="M85.2570422,59.4267533 L28.1145523,31.0427404 C18.5211737,26.2753445 6.85920956,30.1363515 2.05037625,39.6719872 C-0.254101299,44.2528489 -0.632488991,49.5574834 0.998649336,54.4161952 C2.62978766,59.2749071 6.13648932,63.2886583 10.7455111,65.572399 L67.8837553,93.9564119 C77.4793174,98.7260536 89.1448245,94.8626125 93.9521771,85.3229413 C96.2542684,80.743456 96.6318203,75.4413178 95.00165,70.584702 C93.3714798,65.7280862 89.8673471,61.7154908 85.2612879,59.4309771" id="Shape" fill="#92DA0D"></path>
                <path 
                  d="M142.257507,144.427601 L85.11724,116.043588 C75.5213383,111.273946 63.8554182,115.137388 59.0478954,124.677059 C56.7457226,129.256544 56.3681573,134.558682 57.9983853,139.415298 C59.6286132,144.271914 63.13287,148.284509 67.7390922,150.569023 L124.883605,178.95726 C134.477323,183.724656 146.1397,179.863649 150.948704,170.328013 C153.253565,165.747668 153.632591,160.443444 152.002216,155.584805 C150.371841,150.726166 146.865947,146.712093 142.257507,144.427601" id="Shape" fill="#FEC600"></path>
                <path 
                  d="M67.7383784,173.425552 C63.1313699,175.710987 59.6269047,179.72496 57.9972749,184.582898 C56.367645,189.440837 56.7466011,194.744028 59.0506312,199.323788 C63.8585341,208.86177 75.5223903,212.725108 85.1181189,207.957941 L142.263623,179.571683 C148.468727,176.491494 152.548774,170.350137 152.964931,163.463892 C153.381087,156.577646 150.070035,149.994254 144.280573,146.19671 C138.487481,142.396066 131.0978,141.953412 124.888129,145.03507 L67.7383784,173.421328 L67.7383784,173.425552 Z" id="Shape" fill="#FF9200"></path>
                <path 
                  d="M85.2553422,173.428289 L28.1128519,145.042843 C18.5194732,140.275207 6.85750902,144.136409 2.04867568,153.672526 C-0.254457497,158.253189 -0.632114428,163.557048 0.998950321,168.414993 C2.63001507,173.272939 6.13589778,177.286154 10.7438105,179.570021 L67.8820551,207.955466 C77.4764862,212.725954 89.1415829,208.864344 93.950477,199.325784 C96.2539123,194.745638 96.6321947,189.442189 95.0019509,184.584316 C93.3717071,179.726444 89.8667558,175.712907 85.2595879,173.428289" id="Shape" fill="#FC6E6E"></path>
              </g>
            </g>
          </svg>
          <svg width="307px" height="117px" viewBox="0 0 307 117" ref={logo => this.logoTitle = logo}>
            <g id="Desktop-HD" stroke="none" fill="none" transform="translate(-677.000000, -454.000000)">
              <g id="slang-title" transform="translate(677.000000, 454.000000)" fill="#343A40">
                <path d="M59.4425386,35.0161121 L52.5186795,43.4143237 C51.6101295,44.5147627 49.9723795,44.6820672 48.8136833,43.8502578 C42.4373141,39.2741279 37.2739181,37.7943084 30.8479916,37.7943084 C24.7736858,37.7943084 21.0262119,39.8608717 21.0262119,43.0844276 C21.0262119,46.5671876 24.9034786,47.469689 35.6267287,49.6634979 C54.7534765,53.9191573 61.8590456,58.6932248 61.8590456,71.3353138 C61.8590456,84.2342504 51.0036428,93.780029 32.2686335,93.780029 C20.2639739,93.780029 10.8740504,90.7119955 0.898879168,82.549424 C0.374922678,82.1148483 0.0521561366,81.4848956 0.00578243064,80.8063416 C-0.0405912753,80.1277875 0.19347775,79.4598915 0.653452669,78.9582696 L8.19087802,70.548276 C9.17659181,69.4893635 10.8010265,69.3372966 11.9666703,70.1948159 C15.8510166,73.0931886 19.1737138,75.1338315 21.9300422,76.2366269 C25.1630644,77.525578 28.9081783,78.1712318 32.9152379,78.1712318 C38.729958,78.1712318 42.9918836,75.9797793 42.9918836,72.3674172 C42.9918836,68.7550552 40.0231669,67.7229517 31.3648032,66.0451946 L27.3577436,65.1426931 C8.36078868,60.7574317 2.54842842,55.7265166 2.54842842,44.6302264 C2.54842842,32.3769435 13.4038312,22.1855112 31.3624433,22.1855112 C42.2815626,22.1855112 50.4136753,24.7422058 59.0696791,31.4037501 C60.2024168,32.2756183 60.3487287,33.9133167 59.4425386,35.0113993 L59.4425386,35.0161121 Z M86.5432877,91.5862201 L72.3297896,91.5862201 C70.9020682,91.5862201 69.7433719,90.4315838 69.7433719,89.0059615 L69.7433719,2.5802586 C69.7433719,1.15463627 70.8997083,0 72.3297896,0 L86.5432877,0 C87.9710092,0 89.1273456,1.15463627 89.1273456,2.5802586 L89.1273456,89.0059615 C89.1273456,90.4315838 87.9710092,91.5862201 86.5432877,91.5862201 Z M141.591979,62.9488842 C141.591979,62.2372513 140.454522,61.8720092 139.050399,62.1312132 L130.479351,63.72414 C120.530138,65.6587449 115.876474,68.2390035 115.876474,72.8834689 C115.876474,76.495831 119.236929,78.8168855 125.311235,78.8168855 C134.097032,78.8168855 141.591979,74.4316241 141.591979,64.2401917 L141.591979,62.9488842 Z M159.93997,89.0059615 C159.93997,90.4315838 158.783634,91.5862201 157.355912,91.5862201 L145.079868,91.5862201 C143.654506,91.5862201 142.49581,90.4315838 142.49581,89.0059615 L142.49581,87.4578063 C142.49581,86.0345404 141.830326,85.8295336 140.85334,86.8687062 C136.414424,91.5909329 129.853985,93.909631 121.174383,93.909631 C107.22047,93.909631 97.2688977,87.3305607 97.2688977,74.4316241 C97.2688977,60.3686256 107.734922,53.7895553 126.215065,50.822847 L139.04332,48.6714533 C140.449802,48.4358133 141.591979,48.0705712 141.591979,47.8584951 L141.591979,47.469689 C141.591979,41.4066704 137.457487,38.0535124 130.349558,38.0535124 C124.662271,38.0535124 120.140759,40.1177193 116.652871,42.6956215 C115.359662,43.7889914 113.688874,45.1839805 111.692424,47.0007653 C110.637562,47.9598203 108.945535,47.9857408 107.888313,47.0290421 L99.444698,39.3990172 C98.9321886,38.9448418 98.6254785,38.3029579 98.5943635,37.6194347 C98.5632485,36.9359114 98.8103754,36.2688901 99.2795071,35.7701603 C108.020466,26.714513 117.863485,22.1878676 130.089972,22.1878676 C149.603739,22.1878676 159.94233,31.7312898 159.94233,46.8263917 L159.94233,89.0059615 L159.93997,89.0059615 Z M232.564975,89.0059615 C232.564975,90.4315838 231.408638,91.5862201 229.980917,91.5862201 L215.762699,91.5862201 C214.334978,91.5862201 213.178641,90.4315838 213.178641,89.0059615 L213.178641,51.0820511 C213.178641,43.3436317 209.173942,38.9583703 201.93622,38.9583703 C194.700858,38.9583703 190.047194,43.7300814 190.047194,51.4708572 L190.047194,89.0083179 C190.047194,90.4315838 188.890857,91.5862201 187.463136,91.5862201 L173.249638,91.5862201 C171.821916,91.5862201 170.66558,90.4315838 170.66558,89.0059615 L170.66558,27.0891807 C170.66558,25.6635584 171.821916,24.5089221 173.249638,24.5089221 L186.040134,24.5089221 C187.470216,24.5089221 188.626552,25.6635584 188.626552,27.0891807 L188.626552,29.1533876 C188.626552,30.5766535 189.287316,30.779304 190.247783,29.7236365 C194.47195,25.0815274 200.801122,22.1878676 208.527337,22.1878676 C223.644666,22.1878676 232.562615,31.3471965 232.562615,45.6646862 L232.562615,89.0059615 L232.564975,89.0059615 Z M288.779442,55.8561186 C288.779442,45.5350842 282.577704,38.7015226 273.91934,38.7015226 C265.260976,38.7015226 259.18903,45.5350842 259.18903,55.8561186 C259.18903,66.1747966 265.260976,73.1403166 273.91934,73.1403166 C282.580063,73.1403166 288.779442,66.1747966 288.779442,55.8561186 Z M307,27.0891807 L307,87.5874084 C307,106.935813 292.26969,117 273.145302,117 C262.695797,117 252.581394,114.212378 242.802092,108.639491 C242.214592,108.303773 241.794469,107.738018 241.643407,107.079158 C241.492346,106.420298 241.624112,105.728379 242.006815,105.170869 L248.46106,95.415371 C249.280791,94.2239528 250.867484,93.8400503 252.142458,94.5246516 C260.571914,99.1267018 266.348876,100.875151 272.885717,100.875151 C282.190685,100.875151 288.005405,96.2306856 288.005405,85.7824055 L288.005405,83.8478007 C288.005405,82.7779948 287.269125,82.8109845 286.218983,83.7723959 C282.070331,87.5779828 276.449121,89.5220132 269.268036,89.5220132 C252.597913,89.5220132 239.675264,75.9774229 239.675264,55.8561186 C239.675264,35.7324579 252.597913,22.1878676 269.268036,22.1878676 C277.119324,22.1878676 283.269145,24.4877145 287.535791,29.0897648 C288.505697,30.1360066 289.168821,29.9333562 289.168821,28.5077338 L289.168821,27.0891807 C289.168821,25.6635584 290.325157,24.5089221 291.752879,24.5089221 L304.415942,24.5089221 C305.843664,24.5089221 307,25.6635584 307,27.0891807 Z" 
                  id="Shape">
                </path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
};
