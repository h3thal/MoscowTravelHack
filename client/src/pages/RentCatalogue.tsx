import Title from "../components/Title.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Filters from "../components/Filters.tsx";
import CardHotels from "../components/CardHotels.tsx";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const RentCatalogue = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    console.log(searchParams.get('test'), searchParams.get('date'));
    const newParams = new URLSearchParams();
    newParams.append("wow1", "work1");
    newParams.append("wow2", "work2");
    setSearchParams(newParams);
    console.log(location.pathname);
  }, []);
  return (
    <div className={'tour'}>
      <div className="tour__header">
        <Title title={'Жилье'}/>
      </div>
      <SearchBar/>
      <div className={'tour__body'}>
        <Filters/>
        <div className={'content'}>
          <div className={'list'}>
            {Array(20).fill('').map((item, id) => (
              <CardHotels
                title={'База отдыха по приему юных туристов'}
                star={3}
                rating={8.8}
                onOpen={() => {
                }}
                parking
                wifi
                cafe
                key={id}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentCatalogue;
