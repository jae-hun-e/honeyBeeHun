"use client";
import styled from "styled-components";

const RichText = ({
  tagInfo,
}: {
  tagInfo: Array<{ id: string; name: string; color: string }>;
}) => {
  return (
    <div className="flex  justify-items-start items-start gap-1">
      {tagInfo.map((tag) => {
        const { id, name, color } = tag;
        return (
          <STag color={color} key={id}>
            {name}
          </STag>
        );
      })}
    </div>
  );
};

const STag = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  color: black;
`;

export default RichText;
