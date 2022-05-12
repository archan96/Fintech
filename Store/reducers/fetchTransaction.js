const Transactions = [
  {
    id: 1,
    user: 'Adebeye Usman',
    url: "https://images.generated.photos/hDF2vJAa3vF6KRHSdeEoD2ODywQ5OJSP0AoWXZBo6pU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg4NjU4LmpwZw.jpg",
    type: 'Recieved',
    ammount: 10000,
  },
  {
    id: 2,
    user: 'Random Name',
    url: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg',
    type: 'Sent',
    ammount: 10000,
  },
  {
    id: 3,
    user: 'Ayush Shaw',
    url: 'https://i.pinimg.com/736x/46/46/3f/46463f00c0db960a677c04f072238b82.jpg',
    type: 'Failed',
    ammount: 3000,
  },
  {
    id: 4,
    user: 'Adebeye Usman',
    url: 'https://static.generated.photos/vue-static/face-generator/landing/demo-previews/makeup.jpg',
    type: 'Sent',
    ammount: 5000,
  },
  {
    id: 5,
    user: 'What Ever',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69d0ip5CZ1j39M3yNlYkvUbR-0svEqESarA&usqp=CAU',
    type: 'Recieved',
    ammount: 2000,
  },
  {
    id: 6,
    user: 'Adele',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ88nDFCxmzQeXgsq22U8pFzGP6_WoytyCg&usqp=CAU',
    type: 'Recieved',
    ammount: 20000,
  },
];

const fetchTransactions = (state = Transactions, action) => {
  switch (action.type) {
    case 'UPDATETRAN':
      return (state = action.transacnow);
    default:
      return state;
  }
};

export default fetchTransactions;
