import {memo, useEffect, useMemo, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {getFilters} from "../api/tour.ts";
import Checkbox from "./Checkbox.tsx";
import classNames from "classNames";


const Filters = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const containerHeight = useMemo(() => {
    if (container.current) {
      return !isOpen ? '0px' : `${container.current.scrollHeight}px`
    } else {
      return '0px'
    }
  }, [isOpen, container])

  const filterState = useAppSelector(state => state.filterState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(containerHeight, isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!filterState.all.length) {
      getFilters().then(result => {
        dispatch({type: 'filter-new', payload: {filter: result}})
      });
    }
  }, [filterState]);
  return (
    <div className={'filters ' + classNames({'filters--hidden': !isOpen})}>
      <div className="filters__header" onClick={() => setIsOpen(prev => !prev)}>Фильтры</div>
      <div className="filters__container" ref={container} style={{maxHeight: containerHeight}}>
        {filterState.all.map((item, id) => (
          <div className={'filter'} key={item.name}>
            <div className="filter__title">{item.title}</div>
            <div
              className="filter__body">{item.elementType === "TAGS" && item.displayRules === 'CHECKBOX' && item.options.map((option, index) => (
              <Checkbox
                title={option.title}
                onInput={e => console.log(e.nativeEvent.target?.checked, e)}
                key={option.id}
              />
            ))}</div>
          </div>
        ))}
      </div>
    </div>
  )
});

export default Filters;
