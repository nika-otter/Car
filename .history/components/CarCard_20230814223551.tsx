import { useState } from "react"
import Image from "next/image"
import { CarProps } from "@/types";
import { CustomButton } from ".";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({car}:CarCardProps) => {
    const{city_mpg, year, make, model, transmission, drive}= car;
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2>
                {make} {model}
            </h2>

        </div>
    </div>
  )
}

export default CarCard