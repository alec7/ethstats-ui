import * as React from "react";
import styled from "../../styled-components";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { IconButton } from "../../control/IconButton";
import { IClipboard } from "../IClipboard";
import { CopyIcon } from "../../icon/CopyIcon";
import { HexDataContent } from "./internal/HexDataContent";
import { Clipboard } from "@puzzl/browser/lib/Clipboard";

const CopyButtonWrapper = styled.div`
    position: absolute;
    top: 11px;
    right: 8px;
`;

const HexDataRoot = styled.div`
    flex: 1 1 auto;
    max-width: 512px;
    padding: 8px 32px 8px 0;
    position: relative;
`;

const HexTextArea = styled.textarea`
    height: 200px;
    width: 100%;
    max-width: 500px;
    resize: none;
    box-sizing: border-box;
    padding: 7px 7px;
`;

interface IHexDataProps {
    data: string;
    /** If this limit is reached, render as a textarea to improve performance */
    dataLimit?: number;
    clipboard?: IClipboard;
}

@observer
export class HexData extends React.Component<IHexDataProps> {
    static defaultProps: Partial<IHexDataProps> = {
        dataLimit: 1024
    };

    @observable private hovered = false;

    render() {
        let dataLimit = this.props.dataLimit!;

        return (
            <HexDataRoot
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
            >
                { this.props.data.length > dataLimit ?
                    <HexTextArea readOnly value={this.props.data} /> :
                    <HexDataContent data={this.props.data} />
                }
                { this.hovered && this.props.data.length <= dataLimit && <CopyButtonWrapper>
                    <IconButton
                        Icon={CopyIcon}
                        color={theme => theme.colors.copyIcon}
                        onClick={this.copyContent}
                    />
                </CopyButtonWrapper> }
            </HexDataRoot>
        );
    }

    private copyContent = () => {
        let clipboard = this.props.clipboard || new Clipboard(document);
        clipboard.copy(this.props.data);
    }
    private mouseEnterHandler = () => {
        this.hovered = true;
    }
    private mouseLeaveHandler = () => {
        this.hovered = false;
    }
}
