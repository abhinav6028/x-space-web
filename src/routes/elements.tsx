import path from "path";
import AboutUs from "../pages/AboutUs/AboutUs";
import BookSpace from "../pages/BookSpace/BookSpace";
import { Contact } from "../pages/Contact/Contact";
import { Gallery } from "../pages/Gallery/Gallery";
import Home from "../pages/HomePage/Home";


export const elements = [

    {
        element: <Home />,
        path: "/"
    },
    {
        element: <BookSpace/>,
        path: "/bookspace"
    },
    // {
    //     element: <Contact />,
    //     path: "/contactus",
    // },
    {
        element: <Gallery />,
        path: "/gallery",
    },
    {
        element: <AboutUs />,
        path: "/aboutus",
    }
]

