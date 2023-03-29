import { Typography } from "@material-tailwind/react";
import ActualTime from "../atoms/ActualTime";

export default function SimpleFooter() {
  return (
    <footer className="bg-gray-100 flex w-full items-center justify-around gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bottom-0 left-0  col-span-full">
      <Typography color="blue-gray" className="font-normal">
        <ActualTime />
      </Typography>

      <Typography
        color="blue-gray"
        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
      >
        Liczba artykułów
      </Typography>
    </footer>
  );
}
