import styled, { css } from "styled-components";

const VisibleForm = styled.form`
  ${(props) =>
    !props.visible &&
    css`
      display: none;
    `};
`;

const VisibleTable = styled.table`
  ${(props) =>
    !props.visible &&
    css`
      display: none;
    `};
`;

export { VisibleForm, VisibleTable };
