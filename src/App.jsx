import "./App.css";
import "./index.css";
import { Button } from "./button";
import { Card } from "./Card";

function App() {
  return (
    <>
      <Button className="btn" text="text" />
      <Button className="btn" text="text" />
      <Button className="btn btn--outlined" text="Create Event" />
      <Button className="btn btn--outlined" text="text" disabled />
      <Button className="btn btn--secondary" text="text" />
      <Button className="btn btn--secondary" text="text" disabled />
      <Button className="btn btn--secondary__outlined" text="text" />
      <Button className="btn btn--secondary__outlined" text="text" disabled />
      <Card />
    </>
  );
}

export default App;
