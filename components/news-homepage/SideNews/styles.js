import styled from "styled-components";

export const SideNewsWrapper = styled.div`
  grid-area: side;
  font-size: 30px;
  display: flex;
  // width: auto;
`;
export const SideNewsMain = styled.div`
  background-color: hsl(240, 100%, 5%);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr 1fr 1fr;
  gap: 2.4rem;
  justify-content: space-between;
  padding: 0px 20px;
`;
export const SideNewsHeading = styled.h1`
  color: hsl(35, 77%, 62%);
  font-size: 32px;
  font-family: 'Inter-Bold';
  margin-left: 10px;
`;
export const SideNewsContent = styled.div`
  // height: auto;
  margin-left: 10px;
  border-bottom: 1px solid hsl(36, 100%, 99%);
;
`;
export const SideNewsContentHeading = styled.h2`
  color: hsl(36, 100%, 99%);
  font-size: 30px;
`;
export const SideNewsContentDescription = styled.p`
  color: hsl(233, 8%, 79%);
  font-size: 30px;
`;
