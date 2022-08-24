// id: 유니크한 값이면 되고, 굳이 1234 형식이 아니여도 된다.
// key : 그냥 백엔드가 편한이름으로 정하는 것임.
const apiMockData = [
  {
    id: 1,
    genderType: 'Man',
    category: [
      { id: 1, name: 'Clog' },
      { id: 2, name: 'Sandle' },
      { id: 3, name: 'Wedge' },
      { id: 4, name: 'Flip' },
      { id: 5, name: 'Slide' },
      { id: 6, name: 'Flat' },
      { id: 7, name: 'Ropper' },
      { id: 8, name: 'Boots' },
      { id: 9, name: 'Winterclog' },
      { id: 10, name: 'Socks' },
      { id: 11, name: 'Slipon' },
      { id: 12, name: 'Rainbows' },
    ],
    collection: [
      { id: 1, name: 'Classic' },
      { id: 2, name: 'Came' },
      { id: 3, name: 'Outdoor' },
      { id: 4, name: 'Literide' },
      { id: 5, name: 'Bayaband' },
      { id: 6, name: 'Crocband' },
      { id: 7, name: 'Tiedye' },
      { id: 8, name: 'Disney' },
      { id: 9, name: 'Character' },
      { id: 10, name: 'Led' },
      { id: 11, name: 'Wintershoes' },
    ],
  },
  {
    id: 2,
    genderType: 'Woman',
    category: [
      { id: 1, name: 'Clog' },
      { id: 2, name: 'Sandle' },
      { id: 3, name: 'Wedge' },
      { id: 5, name: 'Slide' },
      { id: 7, name: 'Ropper' },
      { id: 10, name: 'Socks' },
      { id: 11, name: 'Slipon' },
      { id: 12, name: 'Rainbows' },
    ],
    collection: [
      { id: 1, name: 'Classic' },
      { id: 2, name: 'Came' },
      { id: 3, name: 'Outdoor' },
      { id: 4, name: 'Literide' },
      { id: 6, name: 'Crocband' },
      { id: 8, name: 'Disney' },
      { id: 10, name: 'Led' },
      { id: 11, name: 'Wintershoes' },
    ],
  },
  {
    id: 3,
    name: 'Kids',
    category: [],
    collection: [],
  },
];

// 받은 데이터를 useState에 저장한다.
const [data, setData] = useState(null);

fetch('주소')
  .then((res) => res.json())
  .then((data) => {
    data = data.map((obj) => {
      setData({
        ...obj,
        shoes: [{}, {}, {}],
      });
    });
  });

//
<ul>
  {data.map((obj) => {
    return (
      <li key={obj.id}>
        <h2>{obj.name}</h2>
        <ul className="category">
          {obj.category.map((cat) => {
            return (
              <li key={cat.id}>
                <h3>{cat.name}</h3>
              </li>
            );
          })}
        </ul>
      </li>
    );
  })}
</ul>;
