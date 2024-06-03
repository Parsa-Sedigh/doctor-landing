import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from '@mui/material/styles';
import theme from "@/theme";
import localFont from 'next/font/local'
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";

const yekanFont = localFont({
    src: './yekan.ttf',
    display: 'swap',
    variable: '--font-yekan'
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa-IR" dir="rtl" className={yekanFont.variable}>
        <body className="font-yekan">
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Header/>
                {children}
                <Footer/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
