import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFCFB] dark:bg-slate-950 navy:bg-[#020D1A] transition-colors duration-500 overflow-x-hidden relative">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
