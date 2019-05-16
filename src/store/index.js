
import React, { Coponent } from 'react';

import { createStore } from 'redux';
import reducer from './reducer';

const store=createStore(reducer);

export default store;