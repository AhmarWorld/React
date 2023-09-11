import TitleCard from "../../TitleCard/TitleCard";
import TransformLifeCard from "../../TransformLifeCard/TransformLifeCard";
import "./TransformSection.css";

export default function TransformSection() {
  return (
    <section className="transform">
      <TitleCard
        textOnevTwo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
        }
        textTwovTwo={
          "Don’t miss out on my ‘Live life at the full potential’ free guide"
        }
        textThree={
          " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
        value={"Get your free guide now"}
      />
      <TransformLifeCard circleValue={"Free guide"} />
    </section>
  );
}
