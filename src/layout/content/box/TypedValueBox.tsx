import * as React from "react";
import { Box } from "./Box";
import styled, { css } from "../../../styled-components";

interface ITypedValueBox {
    value?: string;
    type?: string;
    withinForm?: boolean;
}

const StyledBox = styled(Box)`
    font-family: "Roboto Mono", monospace;
`;
const ValueSpan = styled.span`
    margin: 0 8px;
`;
const TypeSpan = styled.span`
    color: ${({theme}) => theme.colors.typedValueBoxTypeText };
    margin: 0 8px;
`;
interface ISizingWrapperProps {
    withinForm?: boolean;
}
const SizingWrapper = styled<ISizingWrapperProps, "div">("div")`
    ${props => props.withinForm ? css`
        min-width: 484px;
    ` : ``}
`;

export class TypedValueBox extends React.Component<ITypedValueBox> {
    static defaultProps = {
        withinForm: false
    };

    render() {
        const { value, type, withinForm } = this.props;
        let wrapperDivStyle: React.CSSProperties = {};
        if (withinForm) {
            wrapperDivStyle.minWidth = 500;
        }
        return (
            <StyledBox colors={(theme) => ({
                background: theme.colors.typedValueBoxBg,
                text: theme.colors.typedValueBoxText,
                border: withinForm ? theme.colors.typedValueBoxBorder : void 0
            })} metrics={{
                height: 36,
                textPaddingTop: 0,
                textPaddingX: 8,
                fontSize: 14,
                iconSize: 24,
                lineHeight: 34,
                fontWeight: 500,
                letterSpacing: "normal"
            }}>
                <SizingWrapper withinForm={withinForm}>
                    { value ? <ValueSpan>{value}</ValueSpan> : null }
                    { type ? <TypeSpan>{type}</TypeSpan> : null }
                </SizingWrapper>
            </StyledBox>
        );
    }
}
