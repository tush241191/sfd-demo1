import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';


const Navbar = () => {
    
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#" aria-label="Home">
                                <img className="h-8 w-auto sm:h-20" src="/logo.svg" alt="So.Fa.Dog" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}
export default Navbar