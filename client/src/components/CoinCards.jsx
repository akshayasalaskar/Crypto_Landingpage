import { Typography } from "@material-tailwind/react";

function Card() {
  return (
    <div className="min-w-[280px]">
    <div className="flex items-center bg-white mx-1 p-2 shadow-md ">
      <img
        className="h-10 w-10 mr-4"
        src="https://www.transparentpng.com/thumb/rocket/winged-black-rocket-icon-hd-transparent-N99nFD.png"
        alt="Rocket Icon"
      />
      <div>
        <Typography className="no-wrap" variant="small" color="blue" textGradient>
          BITCOIN(BTC) 0.14%
        </Typography>
        <Typography variant="p">
          28,272.70 USD
        </Typography>
      </div>
    </div>
    </div>
  );
}

export function CarouselDefault() {
  return (
    <div className="overflow-x-auto mx-auto w-3/4 scrollbar-hide">
      {/* Set the max-width to a value that accommodates the desired number of cards */}
      <div className="flex gap-4 flex-nowrap pt-6 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  );
}
