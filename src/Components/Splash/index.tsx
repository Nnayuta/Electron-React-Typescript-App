import 'animate.css';
import React, { useState } from 'react';

import * as S from './styles';

export const Splash: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  return (
    <S.Container className="animate__animated animate__fadeIn">
      <div />
      <div>
        <S.Title className="animate__animated animate__backInDown">
          CSPDV
        </S.Title>
      </div>
      <S.ContainerProgress className="animate__animated animate__zoomIn animate__delay-1s">
        <S.ProgressBar value={progress} max={100}></S.ProgressBar>
      </S.ContainerProgress>
    </S.Container>
  );
};
