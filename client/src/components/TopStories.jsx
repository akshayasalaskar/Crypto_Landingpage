import { Typography } from "@material-tailwind/react";

function Card() {
  return (
    <div className="min-w-[280px] mb-2">
      <div className="flex items-center bg-white mx-1 p-2 ">
        <img
          className="h-10 w-10 mr-4"
          src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/TSC-thumbnail-example-1024x576.png"
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

export function TopStories() {
  return (

    
    <div className="h-[350px] mt-10 overflow-y-auto w-1/4 scrollbar-hide">
    <Typography className='' variant="h3">Top Stories</Typography>
      {/* Set the max-width to a value that accommodates the desired number of cards */}
      <div className="gap-4 flex-nowrap pt-6">
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
