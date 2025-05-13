import BlogCatelogue from "../components/BlogCaterlogue";
import HeroCard from "../components/HeroCard";
import blogbg from "../assets/career.png";

function BLogpage() {
  return (
    <>
      <HeroCard
        imagebg={blogbg}
        heading1={"Latest Blogs"}
        paragraph={
          "Stay updated with the latest news, insights, and innovations from Dangote Group."
        }
      />

      <BlogCatelogue />
    </>
  );
}

export default BLogpage;
