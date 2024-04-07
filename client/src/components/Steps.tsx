import {Fragment, memo, useEffect} from "react";
import {useAppSelector} from "../hooks.ts";
import classNames from "classNames";


const Steps = memo(() => {
  const stepsStore = useAppSelector(state => state.stepsState);
  useEffect(() => {
    console.log(stepsStore.list);
  }, [stepsStore]);
  return (
    <div className={'steps'}>
      <div className="steps__list">
        {stepsStore.list.map((item, index) =>
          (
            <Fragment key={'step-' + index}>
              <div className={'item ' + classNames({'item--active': stepsStore.activeStep === index})}>
                <span className={'item__step'}>{index + 1}</span>
                <span className={'item__title'}>{item.title}</span>
              </div>
              {index !== stepsStore.list.length - 1 && <div className={'dash'}/>}
            </Fragment>
          )
        )

        }
      </div>
    </div>
  )
});

export default Steps;
