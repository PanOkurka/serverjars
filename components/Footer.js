import React from 'react';
import Link from 'next/link';
import { FaCodeBranch } from '@react-icons/all-files/fa/FaCodeBranch'

function Footer() {

    return (
        <div className="Footer">
                <div className="Contact">
                    <a className='FooterLink no-underline' href="https://www.instagram.com/panokurka_official/" target="_self">Instagram</a>
                    <a className='FooterLink no-underline' href="https://discord.gg/wn5aF2w" target="_self">Discord</a>
                    <a className='FooterLink no-underline' href="https://dev.baby-cucumber.com/" target="_self">@Pan_Okurka</a>
                </div>
                <div className="Middle">
                    <h3 className='text-lg'>&copy; {new Date().getFullYear()} PanOkurka</h3>
                        <p className='infos mt-4'> 
                            Made with &hearts; by Thomas K.
                            <span className='center'><FaCodeBranch/> prod-2.0.0</span>
                        </p>
                </div>
                <div className="Map">
                    <Link href="/" className="FooterLink hover:no-underline">Home</Link>
                    <Link href="/servers" className="FooterLink hover:no-underline">Servers</Link>
                    <Link href="/proxy" className="FooterLink hover:no-underline">Proxy</Link>
                    <Link href="/modded" className="FooterLink hover:no-underline">Modded</Link>
                </div>
        </div>
    )
}

export default Footer
