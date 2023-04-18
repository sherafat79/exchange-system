import Header from "../ui/header";
import Footer from '../ui/footer';


interface IProps {
  children: React.ReactNode;
}
const HomeLayout: React.FC<IProps> = ({ children }) => {

  return (
   <>
    <Header  />
    <main >{children}</main>
    <Footer/>
   </>
  );
};
export default HomeLayout;
