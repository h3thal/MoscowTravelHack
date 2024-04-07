import Title from "../components/Title.tsx";
import Steps from "../components/Steps.tsx";
import ContactClient from "../components/ContactClient.tsx";
import NotIncluded from "../components/NotIncluded.tsx";
import Check from "../components/Check.tsx";

const Reservation = () => {
  return (
    <div className={'reservation'}>
      <div className="reservation__header">
        <Steps/>
        <Title title={'Данные пассажиров'}/>
      </div>
      <div className="reservation__content">
        <div className="body">
          <ContactClient/>
          <NotIncluded residence transfer/>
        </div>
        <div className="sidebar">
          <Check/>
        </div>
      </div>
    </div>
  )
}

export default Reservation;
