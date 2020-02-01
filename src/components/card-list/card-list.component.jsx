import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';
import { connect } from 'react-redux';

const CardList = props => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  monsters: state.monster.monsters
});
export default connect(mapStateToProps)(CardList);
