import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

import classes from './RootLayout.module.css';

const RootLayout = function(){

  return(<>
    <Header />
    <main className={classes.main}>
    <Outlet />
    </main>
    </>
  );
};

export default RootLayout;