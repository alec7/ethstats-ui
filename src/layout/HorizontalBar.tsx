import * as React from "react";
import styled, { css } from "../styled-components";
import { Bar, IBarProps } from "./Bar";

interface IPlaceholderProps {
    height: number;
}

const Placeholder = styled<IPlaceholderProps, "div">("div")`
    height: ${props => props.height}px;
    width: 100%;
    display: none;
    @media ${props => props.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        display: block;
    }
`;

const HorizontalBarRoot = styled<IHorizontalBarProps, IBarProps>(Bar)`
    height: ${props => props.height}px;

    width: 100%;
    ${props => props.sticky ? css`
    position: fixed;
    top: 0;
    ` : ""}
    border-bottom: 1px solid ${props => props.theme.colors.sidebarBorder};

    display: none;
    @media ${props => props.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        display: flex;
    }
`;

interface IHorizontalBarProps {
    height: number;
    sticky?: boolean;
    zIndex?: number;
    contentRef?(instance: HTMLDivElement): void;
}

/**
 * Displays a horizontal bar such as a sidebar or a horizontal toolbar
 */
export class HorizontalBar extends React.Component<IHorizontalBarProps> {
    render() {
        let { contentRef, ...props } = this.props;
        return (
            <>
            { this.props.sticky ? <Placeholder height={this.props.height} /> : null }
            <HorizontalBarRoot innerRef={contentRef} {...props} />
            </>
        );
    }
}
