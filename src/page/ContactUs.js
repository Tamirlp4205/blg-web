const ContactUs = () => {
  return (
      <div className="w-[624px] mx-auto">
        <div className="mt-48 flex flex-col gap-3">
          <div>
            <p className="text-4xl ">ContactUs</p>
            <p className="w-[624px] text-xl mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-14 mt-10">
            <div className="border-2 w-[294px] rounded-lg">
              <div className="p-3">
                <h2 className="text-2xl font-bold">Address</h2>
                <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
              </div>
            </div>
            <div className="border-2 w-[294px] rounded-lg">
              <div className="p-3">
                <h2 className="text-2xl font-bold">Contact</h2>
                <p>313-332-8662 </p>
                <p>info@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[624px] bg-slate-100 mt-10">
          <div className="mt-10  pt-8">
            <h2 className="text-xl ml-16">Leave a Message</h2>
            <div className="flex gap-2 pt-3 ml-16">
              <input
                placeholder="Your name"
                className="px-2 border rounded-lg"
              ></input>
              <input
                placeholder="Your email"
                className="px-2 border rounded-lg"
              ></input>
            </div>
            <div className="flex flex-col pt-8 ml-16 pr-40">
              <input
                placeholder="Subject"
                className="px-2 border rounded-lg"
              ></input>
              <input
                placeholder="Write a message "
                className="mt-5 px-2 border rounded-lg h-40 mb-32"
              ></input>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default ContactUs;
