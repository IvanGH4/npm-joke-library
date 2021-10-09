import React from 'react';
import { storiesOf } from '@storybook/react';
import { Prng } from '../components/Prng';

const stories = storiesOf('APP test', module);

stories.add('App', () => {
  return <Prng />;
});
