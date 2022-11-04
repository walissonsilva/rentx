import React from "react";
import { FlatList, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Car, CarData } from "../../components/Car";

import * as S from "./styles";

export function Home() {
  const cars: CarData[] = [
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: { period: "Ao dia", price: 120 },
      thumbnail:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
    },
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: { period: "Ao dia", price: 120 },
      thumbnail:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <FlatList
        data={cars}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Car
            brand={item.brand}
            name={item.name}
            rent={{ period: item.rent.period, price: item.rent.price }}
            thumbnail={item.thumbnail}
          />
        )}
        contentContainerStyle={{
          padding: 24,
        }}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
    </S.Container>
  );
}
