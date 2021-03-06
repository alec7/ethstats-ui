import styled from "../styled-components";

interface IFillerProps {
    className?: string;
}

export const Filler = styled<IFillerProps, "div">("div")`
    flex: 1 0 auto;
`;
