import React, { useState } from "react";
import restaurante_1 from "../img/restautante_1.jpg";
import restaurante_2 from "../img/restautante_2.jpg";

//import { Box, Flex, Badge, Icon, Image } from "@chakra-ui/react";

// Sample card from Airbnb
/*
export const Home = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };                                      

  return (
    <Box  maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon
              displayName="CalendarIcon"
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
*/

export const Home = (props) => {
  const initialStateValues = {
    name: "",
    numberPeople: "",
    dateTimeEntry: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    props.addOrEditReserva();
    setValues({...initialStateValues})
  };

  return (
    <>
      <section className="container-main-restaurant">
        <img
          className="container-restaurant-left"
          src={restaurante_2}
          alt="Icutter Store"
          heigth="150px"
          width="150px"
        />
        <div className="container-restaurant-right">
          <form onSubmit={handleSubmit}>
            <label for="nombre" className="formulario">
              <span id="titleRestaurant">Gabriel</span>
              <hr width="50%"></hr>
              <span>¿Nombre de la persona para la reservación? </span>
              <hr />
              <input
                type="text"
                id="nombre"
                name="name"
                autoComplete="name"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={values.name}
              ></input>
              <hr />
            </label>
            <label for="people" className="formulario">
              <span>Cantidad de personas</span>
              <hr />
              <input
                list="people"
                name="numberPeople"
                onChange={handleInputChange}
                value={values.numberPeople}
              ></input>
              <datalist id="people">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value="7"></option>
                <option value="8"></option>
                <option value="9"></option>
                <option value="10"></option>
              </datalist>
            </label>
            <hr />
            <label for="dateTimeEntrada" className="formulario">
              <input
                type="datetime-local"
                name="dateTimeEntry"
                placeholder="Fecha entrada"
                onChange={handleInputChange}
                value={values.dateTimeEntry}
              ></input>{" "}
            </label>
            <hr />
            <button className="reserva" type="submit">
              Reservar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
