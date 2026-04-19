import { Button } from "@heroui/react";
import React from "react";

const HeroPage = () => {
  return (
    <div>
      <h2>Hero Page</h2>
      <div className="gap-9">
        {" "}
        <Button variant="secondary">Hero Button</Button>
        <Button variant="ghost">Hero Button</Button>
        <Button variant="primary">Hero Button</Button>
      </div>
    </div>
  );
};

export default HeroPage;
