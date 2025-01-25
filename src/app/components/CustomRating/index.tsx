"use client";
import { Rating as FlowbiteRating } from "flowbite-react";

interface CustomRatingProps {
  rating: boolean[];
}

export const CustomRating = ({ rating }: CustomRatingProps) => {
  return (
    <FlowbiteRating>
      {rating.map((filled, index) => (
        <FlowbiteRating.Star key={index} filled={filled} />
      ))}
    </FlowbiteRating>
  );
};
