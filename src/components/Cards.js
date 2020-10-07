import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              Path='/services'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle fsdf fsdfasf  fdsaf  fsdafa'
              label='Adventure'
              Path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle fdsaf fsdaf sadf saffsfdasdfsa fsd sdf  fsd  fds sdfa fsd sda'
              label='Adventure'
              Path='/services'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              Path='/services'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              Path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
