import Cover from "./Cover";
import Slider from "./Slider";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Home() {
  return (
    <div className="Home">
      <Cover imageSrc={img1} />
      <Slider
        imageSrc={img2}
        title={"About Us."}
        subtitle={
          "Welcome to our children charity website! We are a dedicated and compassionate organization committed to making a positive difference in the lives of children. Our mission is to create a world where every child has access to the resources and opportunities they need to thrive and reach their full potential."
        }
      />
      <Slider
        imageSrc={img3}
        title={"How will my donation help?."}
        subtitle={
          "Little Hearts Foundation is striving to sponsor school and college education for as many children from underprivileged backgrounds as possible by providing them with scholarships. Our Foundation works towards the goal to make sure financial constraints never prevent any child from getting education."
        }
        flipped={true}
      />
    </div>
  );
}

export default Home;
