
import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import Container from "./Container/Container";


const Layout = () => {
    return (
        <Container>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </Container>
    )
};

export default Layout;