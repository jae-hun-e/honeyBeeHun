"use client";
import styled from "styled-components";

const RichText = ({ tagInfo }) => {
  const { id, name, color } = tagInfo;

  return <STag color={color}> {name}</STag>;
};

const STag = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

export default RichText;
