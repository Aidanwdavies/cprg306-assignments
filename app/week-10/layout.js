
"use client";


import { AuthContextProvider } from "./_utils/auth-context";


function AppLayout({ children }) {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    );
}

export default AppLayout;
