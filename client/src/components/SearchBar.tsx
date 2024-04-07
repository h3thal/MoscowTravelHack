import React, {memo, useState} from "react";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import {Calendar} from "primereact/calendar";

const SearchBar = memo(({title}) => {
  const [searchBar, setSearchBar] = useState({searchQury: '' as string, date: '' as string});
  return (
    <div className={'search-bar'}>
      {title && <h2 className={'search-bar__title'}>{title}</h2>}
      <div className={'search-bar__container'}>
        <Input
          value={searchBar.searchQury}
          placeholder={'Найти место или событие'}
          type={'text'}
          onChange={text => console.log(text)}
        />
        <Calendar
          value={searchBar.date}
          onChange={e => console.log(e)}
          selectionMode="range"
          readOnlyInput
          hideOnRangeSelection/>
        <Button
          type={'Primary'}
          size={'L'}
          title={"Найти"}
          onClick={() => {
          }}
        />
      </div>
    </div>
  )
});

export default SearchBar;
