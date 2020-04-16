import React from 'react';
import portraits from '__MOCKS__/portraits';

import s from "./style.module.scss";

const PageImages = () => (
  <div className={s.container}>
    <div 
      className={s.container__backgroundImg} 
      style={{backgroundImage: `url('${portraits.backgroundImg}')`}}
    />
  </div>
)

export default PageImages;