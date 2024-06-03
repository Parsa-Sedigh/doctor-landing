'use client';

import {createTheme} from '@mui/material/styles';
import localFont from "next/font/local";

const yekanFont = localFont({
    src: 'app/yekan.ttf',
    display: 'swap',
    variable: '--font-yekan'
})

const theme = createTheme({
    typography: {
        fontFamily: yekanFont.style.fontFamily,
    },
});

export default theme;
