const fetchMoney = (state = 200000, action) => {
  switch (action.type) {
    case 'UPDATEMONEY':
      return (state = action.mymoney);
    default:
      return state;
  }
};
export default fetchMoney;
