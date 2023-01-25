import axios from "axios";

interface Dados {
  id_car?: string;
  name_car?: string;
  brand?: string;
  year_of_manufacture?: number;
  description?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export const save = (data: Dados) => {
  const config = {
    method: "POST",
    url: "https://sheet.best/api/sheets/64db23b6-b6a2-4247-a602-08215d1cb738", //minha

    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  axios(config)
    .then((r) => {
      console.log(r);
    })

    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
};

export async function update(id_car: string, data: Dados) {
  const config = {
    method: "PUT",
    url: `https://sheet.best/api/sheets/64db23b6-b6a2-4247-a602-08215d1cb738/id_car/${id_car}`, //minha

    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  axios(config)
    .then((r) => {
      console.log(r);
    })

    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
  return true;
}

export async function deleteCar(containerCardId: string) {
  const config = {
    method: "DELETE",
    url: `https://sheet.best/api/sheets/64db23b6-b6a2-4247-a602-08215d1cb738/id_car/${containerCardId}`,
  };

  axios(config)
    .then((r) => {
      console.log(r);
    })

    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
}