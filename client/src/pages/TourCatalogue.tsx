import {useEffect} from "react";
import Title from "../components/Title.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Steps from "../components/Steps.tsx";
import Card from "../components/Card";
import Filters from "../components/Filters.tsx";

const TourCatalogue = () => {
  useEffect(() => {

  }, []);
  return (
    <div className={'tour'}>
      <div className="tour__header">
        <Title title={'Туры'}/>
      </div>
      <Steps/>
      <SearchBar/>
      <div className={'tour__body'}>
        <Filters/>
        <div className={'content'}>
          <div className={'list'}>
            {Array(20).fill('').map((item, id) => (
              <Card
                title={'123'}
                onOpen={() => {
                }}
                key={id}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default TourCatalogue;
