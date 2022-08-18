import React from 'react';
import Link from 'next/link';
import { FaCodeBranch } from '@react-icons/all-files/fa/FaCodeBranch'

function Footer() {

    return (
        <div className="Footer">
                <div className="Contact">
                    <a className='FooterLink no-underline' href="#" target="_self">Instagram</a>
                    <a className='FooterLink no-underline' href="#" target="_self">Discord</a>
                    <a className='FooterLink no-underline' href="https://dev.baby-cucumber.com/" target="_self">@Pan_Okurka</a>
                </div>
                <div className="Middle">
                    <h3 className='text-lg'>&copy; {new Date().getFullYear()} YourDomain.com</h3>
                        <p className='infos mt-4'> 
                            Made with &hearts; by Pan_Okurka
                            <span className='center'><FaCodeBranch/> prod-1.0.0</span>
                        </p>
                </div>
                <div className="Map">
                    <Link href="/"><a className="FooterLink hover:no-underline">Home</a></Link>
                    <Link href="/servers"><a className="FooterLink hover:no-underline">Servers</a></Link>
                    <Link href="/proxy"><a className='FooterLink hover:no-underline'>Proxy</a></Link>
                    <Link href="/modded"><a className="FooterLink hover:no-underline">Modded</a></Link>
                </div>
        </div>
    )
}

export default Footer
