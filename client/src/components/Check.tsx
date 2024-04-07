import Button from "../components/Button.tsx";

const Check = () => {
  return (
    <div className={'check'}>
      <div className={'check__title'}>
        Ваш заказ
      </div>
      <div className="check_list">
        <div className="item">
          <div className="item__left">
            <div className="title">
              Тур Две столицы: Москва -
              Санкт-Петербург “Семейные каникулы”
            </div>
            <div className="subtitle">3 апреля - 10 ночей</div>
          </div>
          <div className="item__right">
            65 900 р
          </div>
        </div>
        <div className="item">
          <div className="item__left">
            <div className="title">
              2 x Авиабилет Санкт-Петербург - Москва
            </div>
            <div className="subtitle">Прямой - 2ч 30м</div>
          </div>
          <div className="item__right">
            28 922 р
          </div>
        </div>
        <div className="item">
          <div className="item__left">
            <div className="title">
              Номер премиусм класса 3 кровати,
              1 детская
            </div>
            <div className="subtitle">Grand City Hotel - 10 ночей</div>
          </div>
          <div className="item__right">
            25 567 р
          </div>
        </div>
      </div>
      <hr/>
      <div className="sum">
        <div className="sum__discount">
          <span className={'label'}>5% Скидка за бронирование отеля</span>
          <span className={'price'}>1238 р</span>
        </div>
        <div className="sum__discount">
          <span className={'label'}>10% Скидка за авиабилет</span>
          <span className={'price'}>657 р</span>
        </div>
        <div className={'sum__total'}>
          <span className="label">Итого</span>
          <span className="price">63 218 р</span>
        </div>
      </div>
      <Button size={'L'} title={'Перейти к оплате'} type={'Primary'} onClick={() => {
      }}/>
    </div>
  )
}

export default Check;
