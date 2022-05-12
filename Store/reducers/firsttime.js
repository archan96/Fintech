const firsttime = (state = true, action) => {
  switch (action.type) {
    case 'UPDATEFIRST':
      return (state = action.payload);
    default:
      return state;
  }
};

export default firsttime;
