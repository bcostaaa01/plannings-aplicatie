import React from "react";

type NieuwAfspraakProps = {
  title: string;
};

const NieuwAfspraak: React.FC<NieuwAfspraakProps> = (props) => {

  return <button>{props.title}</button>;
};

export const Afspraken: React.FC = () => {

    const planAfspraak = () => {

    }

    const geefEeersteVrijeSlotVanaf = () => {

    }

  return (
    <>
      <NieuwAfspraak title={"Maak een nieuw afspraak"} />
    </>
  );
};
