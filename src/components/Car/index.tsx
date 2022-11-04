import React from "react";
import GasolineSVG from "../../assets/gasoline.svg";

import * as S from "./styles";

export interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface CarProps extends CarData {}

export function Car({ brand, name, rent, thumbnail }: CarProps) {
  return (
    <S.Container>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{`R$ ${rent.price.toFixed(2)}`}</S.Price>
          </S.Rent>

          <S.Type>
            <GasolineSVG />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage
        source={{
          uri: thumbnail,
        }}
        resizeMode="contain"
      />
    </S.Container>
  );
}
