/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
  green: {
    fill: '#24AE1D',
  },
  brightGreen: {
    fill: '#89DF00',
  },
  mediumGrey: {
    fill: '#858585',
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      viewBox="0 0 350 124"
    >
      <path className={classes.green} d="M32.8,64.3c-10.2-9.9-15.7-40.7-1.7-54.5C36.1,4.7,42.7,1.3,49.8,0c-2.4,2.8-3.7,6.3-3.7,9.9c0,6.4,1.4,12.4,18.8,31.6c14.1,15.6,17.8,24.3,17.8,41c0,2.8-0.3,5.5-1,8.2c-0.3-8.4-3.7-16.4-9.6-22.4C55.8,51.8,40.5,44.5,38.4,28.2c-2.6,16.1,12.7,25,29.6,40.7l0,0c10.1,9.5,12.2,24.1,6.7,36c-1.6,3.6-3.9,6.8-6.7,9.6c-12.7,12.6-33.2,12.6-45.8,0c0,0,0,0,0,0c-0.5-0.5-1.2-1.3-1.6-1.7c-5.2-5.8-8.6-13.3-10-22.2C7.8,73,1.7,68,0,66.4c10.9,0,14.8,15.5,15.6,22.1c1.1,7.4,3.7,14.8,9,20.7l0.1,0.1l0.1,0.1c7.7,7.7,20.3,7.6,28-0.1c3.7-3.7,5.8-8.7,5.7-13.9c0.1-5.2-2-10.2-5.8-13.8C42.3,72.5,39.3,70.7,32.8,64.3z"/>
      <path className={classes.brightGreen} d="M49.9,84.4c3,2.9,4.6,6.8,4.6,11c0.1,8.7-6.9,15.8-15.7,15.9c-4.3,0-8.4-1.6-11.4-4.6c-15.9-17.7-4.9-50.8-4.9-50.8C29.4,72.1,34.7,69.2,49.9,84.4z"/>
      <path className={classes.mediumGrey} d="M112.8,32.7h8.7v77.6h-8.7V32.7z M134.4,47.6C134.4,47.7,134.4,47.7,134.4,47.6c0,3.3,2.6,5.9,5.9,5.9c3.2,0,5.9-2.6,5.9-5.9s-2.6-5.9-5.9-5.8C137.1,41.8,134.5,44.4,134.4,47.6z M136,110.3h8.7V62.8H136V110.3z M175.8,61.6c-6.3,0-12.4,1.7-17.8,4.8l3.6,7.2c0,0,7-4,14.2-4c3.8,0,12,1.3,12,11.2v2.6c-4.3-2.6-9.3-4-14.3-3.9c-10.7,0-18.9,6.6-18.9,15.8c0,10.2,9.2,16.2,17.7,16.2c6.4,0,12.4-3,16.2-8.1v6.9h7.9V79.1C196.5,70.2,189.8,61.6,175.8,61.6z M174.3,103.9c-5.4,0-10.9-2.5-10.9-8.6c0-4.9,4.6-8.6,12-8.6c4.4-0.1,8.7,1.1,12.5,3.4v6.7C187.9,96.8,182.7,103.9,174.3,103.9z M203.4,70.7h9.3v25.9c0,10.5,7.5,14.9,14.3,14.9c2.8,0,5.8-0.6,9.9-2.9l-3.2-7.1c-1.6,1.1-3.5,1.8-5.5,1.9c-4.6,0-6.9-2.7-6.9-7.3V70.6h14.8v-7.8h-14.8V48.4h-8.7v14.5h-9.3V70.7z M266.8,61.6c-9.1,0-13.3,8.5-13.3,8.5v-7.3h-8v47.4h8.7V77.6c0,0,3.4-8,10.9-8c1.9-0.1,3.7,0.2,5.5,1l3.2-7.8C271.6,62,269.2,61.6,266.8,61.6z M282.1,45.7c-0.4,1.2-0.4,2.6,0,3.8c1.1,3,4.4,4.7,7.5,3.6c3.1-1.1,4.7-4.4,3.6-7.4s-4.4-4.7-7.5-3.6C284,42.7,282.7,44,282.1,45.7z M283.3,110.3h8.7V62.8h-8.7V110.3z M324.9,61.6c-14.2,0.3-24.6,11.8-24,26.2c0.5,13.3,11.6,23.8,25,23.7c14.2-0.3,24.6-11.8,24-26.2C349.4,72,338.3,61.5,324.9,61.6z M325.5,103.5c-9.6,0-15.9-7.6-15.9-17s6.3-17,15.9-17s15.9,7.6,15.9,17C341.3,95.9,335.1,103.5,325.5,103.5z"/>
    </svg>
  );
};

export default LogoFull;
