import React, { useState } from 'react'
import { Route, Routes, } from 'react-router-dom'
import { NotFound } from './NotFound/NotFound';
import { elements } from './elements';

export const AllRoutes = (props: any) => {

    return (

        <Routes>

            {elements.map(data => (

                <Route path={data.path} element={data.element} />

            ))}

            <Route path="*" element={<NotFound />} />

        </Routes>

    )
}




