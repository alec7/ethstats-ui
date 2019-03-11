import * as React from "react";
import { SvgIconEncoded } from "../util/react/SvgIconEncoded";

// tslint:disable:max-line-length
let getIconSvg = (color: string) => `
    <polygon points="0 0 24 0 24 24 0 24"></polygon>
    <mask id="mask-2" fill="white">
        <path d="M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 Z M6,14 L4,14 L4,7 L6,7 L6,14 Z M10,14 L8,14 L8,4 L10,4 L10,14 Z M14,14 L12,14 L12,10 L14,10 L14,14 Z"></path>
    </mask>
    <g mask="url(#mask-2)" fill="${color}" transform="translate(3.000000, 4.000000)">
        <path d="M1.2819426,-5.17920154e-17 L22.7180574,5.17920154e-17 C23.1638168,-3.00926524e-17 23.3254599,0.0464128056 23.4884229,0.133566352 C23.6513858,0.220719898 23.7792801,0.348614185 23.8664336,0.511577148 C23.9535872,0.674540111 24,0.83618323 24,1.2819426 L24,22.7180574 C24,23.1638168 23.9535872,23.3254599 23.8664336,23.4884229 C23.7792801,23.6513858 23.6513858,23.7792801 23.4884229,23.8664336 C23.3254599,23.9535872 23.1638168,24 22.7180574,24 L1.2819426,24 C0.83618323,24 0.674540111,23.9535872 0.511577148,23.8664336 C0.348614185,23.7792801 0.220719898,23.6513858 0.133566352,23.4884229 C0.0464128056,23.3254599 2.00617683e-17,23.1638168 -3.45280103e-17,22.7180574 L3.45280103e-17,1.2819426 C-2.00617683e-17,0.83618323 0.0464128056,0.674540111 0.133566352,0.511577148 C0.220719898,0.348614185 0.348614185,0.220719898 0.511577148,0.133566352 C0.674540111,0.0464128056 0.83618323,3.00926524e-17 1.2819426,-5.17920154e-17 Z"></path>
    </g>
`;
// tslint:enable:max-line-length

export interface INetStatsIconProps {
    color: string;
    size: number;
}

export class NetStatsIcon extends React.PureComponent<INetStatsIconProps> {
    render() {
        return <SvgIconEncoded size={this.props.size}>{getIconSvg(this.props.color)}</SvgIconEncoded>;
    }
}