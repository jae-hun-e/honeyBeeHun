"use client";
import SearchBar from "@molecules/SearchBar";
import { InputType } from "@atoms/Input";
import { ChangeEvent, useState } from "react";

const Compound = () => {
  const [state, setState] = useState<any>(null);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const onClickBtn = () => console.log(state);

  return (
    <div>
      {/*  1*/}
      <div>공유 state : {state}</div>
      <SearchBar
        className={"flex justify-center"}
        shareState={{ state, setState }}
      >
        <SearchBar.label type="search1">
          검색창
          <SearchBar.input
            type={InputType.text}
            id="search1"
            className={"w-20 h-10 border-2"}
            onChange={onChangeValue}
          />
        </SearchBar.label>
        <SearchBar.button text="검색" onClick={onClickBtn}>
          <p>자식1</p>
        </SearchBar.button>
      </SearchBar>

      {/*  2*/}
      <SearchBar className={"flex justify-center"}>
        <SearchBar.label type="search2">검색창</SearchBar.label>
        <SearchBar.input
          type={InputType.text}
          id="search2"
          className={"border-2"}
          onChange={onChangeValue}
        />
        <SearchBar.button text="검색" onClick={onClickBtn}>
          <p>자식2</p>
        </SearchBar.button>
      </SearchBar>

      {/*  3*/}
      <SearchBar className={"flex justify-center"}>
        <SearchBar.button text="검색" onClick={onClickBtn}>
          <p>자식3</p>
        </SearchBar.button>
        <SearchBar.label type="search3">검색창 </SearchBar.label>
        <SearchBar.input
          type={InputType.text}
          id="search3"
          className={"border-2"}
          onChange={onChangeValue}
        />
      </SearchBar>
    </div>
  );
};

export default Compound;
