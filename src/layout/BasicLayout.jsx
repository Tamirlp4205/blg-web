import Navbar from "../components/navbar";
import Footer from "../components/Footer";


const BasicLayout = ({children}) =>{
    return(
        <div className="flex flex-col gap-24 h-full">
            <div>
                <Navbar/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
export default BasicLayout;