import ProfilePic from "../assets/Image.png";
import SinglePostPic from "../assets/Image (4).png";

const SinglePost = () => {
  return (
      <div className="w-[800px] mx-auto">
        <h1 className="text-4xl mt-20 font-bold">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex mt-4 ">
          <img src={ProfilePic} />
          <p className="flex items-center ml-3">Tracey Wilson</p>
          <p className="ml-6 flex items-center font-sans">August 20, 2022</p>
        </div>
        <img src={SinglePostPic} className="mt-5" />
        <p className="mt-5">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.{" "}
        </p>
        <p className="mt-8">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connectiing respectons and show.
        </p>
        <h2 className="text-2xl mt-8 font-bold">Research Your Destination</h2>
        <p className="mt-5">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <h2 className="text-2xl mt-8 font-bold">Plan Your Itinerary</h2>
        <p className="mt-5">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
        </p>
        <p className="mt-5">
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div>
  );
};
export default SinglePost;
