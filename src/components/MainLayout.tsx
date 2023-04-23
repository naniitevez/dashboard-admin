import MainHeader from "./MainHeader";
import { MainNav } from "./MainNav";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div style={{display: 'flex'}}>
        <MainNav />
        {children}
      </div>
    </>
  );
};

export default MainLayout;