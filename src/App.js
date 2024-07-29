import Home from "./page/Home";
import Notfound from "./page/Notfound";
import { Route, Routes } from "react-router-dom";
import AllBlog from "./page/AllBlog";
import ContactUs from "./page/ContactUs";
import SinglePost from "./page/SinglePost";
import BasicLayout from "./layout/BasicLayout";

function App() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllBlog" element={<AllBlog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<Notfound />} />
        <Route path="SinglePost" element={<SinglePost />} />
        
      </Routes>
     
    </BasicLayout>
  );
}

export default App;
