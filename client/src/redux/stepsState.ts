const initState = {
  activeStep: 0,
  list: [
    {
      title: 'Выбор туров',
    },
    {
      title: 'Выбор отеля и размещения',
    },
    {
      title: 'Выбор перелета',
    },
    {
      title: 'Бронирование'
    },
    {
      title: 'Подтверждение и оплата'
    }
  ]
};

export default (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
