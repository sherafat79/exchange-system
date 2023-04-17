interface IProps {
  children: React.ReactNode;
}
const HomeLayout: React.FC<IProps> = ({ children }) => {
  return <main >{children}</main>;
};
export default HomeLayout;
