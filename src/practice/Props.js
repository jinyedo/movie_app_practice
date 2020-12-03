import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1, // 고유 key 값
    name: "kimchi",
    image: "./logo192.png",
    // rating: 1.4
  },
  {
    id: 2, // 고유 key 값
    name: "ramen",
    image: "./logo192.png",
    rating: 2.7
  },
  {
    id: 3, // 고유 key 값
    name: "samgiopsal",
    image: "./logo192.png",
    rating: 3
  },
  {
    id: 4, // 고유 key 값
    name: "chukumi",
    image: "./logo192.png",
    rating: 4.3
  },
  {
    id: 5, // 고유 key 값
    name: "doncasu",
    image: "./logo192.png",
    rating: 5
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h1>{rating}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

// props가 올바른 값으로 넘어갔는지 확인
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  
  // isRequired를 삭제하면 값이 안들어가도 오류가 발생하지 않는다.
  // isRequired가 없으면 필수값이 아니다.
  rating: PropTypes.number
}

function renderFood(dish) {
  console.log(dish);

  // <Food 컴포넌트 사용 - props/>
  return <Food 
            key={dish.id} 
            name={dish.name} 
            picture={dish.image} 
            rating={dish.rating} 
          />
}

function Props() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

// map 함수 사용하기
// function App() {
//   return (
//     <div>
//       {foodILike.map(function(dish) {
//         return <Food name={dish.name} picture={dish.image}/>
//       })}
//     </div>
//   );
// }

export default Props;
