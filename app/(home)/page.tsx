import Image from "next/image";

export default function Home() {
    return (
        <main className="w-full flex-auto">
            <nav className="flex max-w-6xl mx-auto  items-center h-28 w-auto px-6 lg:px-8 ">
                <div className="mx-auto w-full flex justify-between px-10 sm:px-24 lg:px-0">
                    <h4 className="font-semibold text-2xl ">Studio.</h4>
                    <button className="bg-black text-white rounded-3xl px-3 py-2 text-sm font-medium">
                        Contact Us
                    </button>
                </div>
            </nav>

            <section className="min-h-[80dvh] w-full flex items-center justify-start max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h2 className="sm:text-7xl max-w-3xl mb-7 font-medium text-5xl">
                        Award-winning development studio based in Denmark.
                    </h2>
                    <p className="text-xl max-w-[720px] font-light">
                        We are a development studio working at the intersection
                        of design and technology. It’s a really busy
                        intersection though — a lot of our staff have been
                        involved in hit and runs.
                    </p>
                </div>
            </section>

            <section className="bg-neutral-950 w-auto text-white rounded-[40px]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mx-auto py-36 max-w-2xl md:max-w-full ">
                        <div className="max-w-2xl lg:max-w-7xl mx-auto">
                            <div className="flex items-center gap-x-8 ">
                                <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                                    We’ve worked with hundreds of amazing people
                                </h2>
                                <div className="bg-neutral-800 flex-auto h-px"></div>
                            </div>
                            <ul className="mt-14 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9 text-xl ">
                                <li>Phobia</li>
                                <li>
                                    Family <span>Fund</span>
                                </li>
                                <li>Unseal</li>
                                <li>MailSmirk</li>
                                <li>Home Work</li>
                                <li>Green Life</li>
                                <li>
                                    Bright<span>Path</span>
                                </li>
                                <li>North Adventures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl bg-white mx-auto">
                <div className="mx-auto max-w-2xl lg:max-w-none px-5">
                    <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl sm:text-5xl font-medium max-w-[600px] mt-40 mb-11">
                        Harnessing technology for a brighter future
                    </h2>
                    <p className="text-xl font-light max-w-[690px] mb-14 text-neutral-500">
                        We believe technology is the answer to the world’s
                        greatest challenges. It’s also the cause, so we find
                        ourselves in bit of a catch 22 situation.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl border-[#808080] border border-opacity-10 rounded-3xl flex flex-col  gap-5 p-10 hover:bg-neutral-50">
                        <img
                            className="w-16"
                            src="https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg"
                            alt=""
                        />
                        <div className="text-sm">
                            <span className="font-semibold">2023</span> / Case
                            study
                        </div>
                        <h3 className="font-semibold text-2xl">
                            Skip the bank, borrow from those you trust
                        </h3>
                        <p className="font-light text-neutral-600">
                            FamilyFund is a crowdfunding platform for friends
                            and family. Allowing users to take presonal loans
                            from their network without a traditional financial
                            institution
                        </p>
                    </div>
                    <div className=" mx-auto max-w-2xl border-[#808080] border border-opacity-10 rounded-3xl flex flex-col justify-center gap-5 p-10 hover:bg-neutral-50">
                        <img
                            className="w-16"
                            src="https://studio.tailwindui.com/_next/static/media/logomark-dark.73187f97.svg"
                            alt=""
                        />
                        <div className="text-sm">
                            <span className="font-semibold">2022</span> / Case
                            study
                        </div>
                        <h3 className="font-semibold text-2xl">
                            Get a hold of your health
                        </h3>
                        <p className="font-light text-neutral-600">
                            Unseal is tthe first NFT platform  where users can 
                            mint and trade NFTs of theirown presonal health records, 
                            allowing them to take control of their data.
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl border-[#808080] border border-opacity-10 rounded-3xl flex flex-col justify-center gap-5 p-10 hover:bg-neutral-50">
                        <img
                            className="w-16"
                            src="https://studio.tailwindui.com/_next/static/media/logomark-dark.00d7d7b3.svg"
                            alt=""
                        />
                        <div className="text-sm">
                            <span className="font-semibold">2022</span> / Case
                            study
                        </div>
                        <h3 className="font-semibold text-2xl">
                            Overcome your fears, find your match
                        </h3>
                        <p className="font-light text-neutral-600">
                            Find love in the face of fear - Phobia is dating app that 
                            matches users based on their mutual phobias so they can be 
                            scared together.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-100 mt-36 w-full p-11 lg:p-32">
                <div className="mx-auto flex flex-col items-center max-w-2xl lg:max-w-4xl gap-y-9">
                    <h1 className=" leading-tight before:content-['❝']  after:content-['❞'] lg:max-w-4xl text-4xl font-normal tracking-tight text-neutral-950 ">
                        The team at Studio went above and beyond with our
                        onboarding, even finding a way to access the user’s
                        microphone without triggering one of those annoying
                        permission dialogs.
                    </h1>
                    <img className="place-self-start" width={184} height={36} decoding="async" src="https://studio.tailwindui.com/_next/static/media/logo-dark.353d4760.svg" alt="" />
                </div>
            </section>
            
            
            <section className="max-w-7xl mx-auto mt-40">
                <div className="flex flex-col gap-y-8 max-w-3xl mx-auto px-6">
                    <h5 className="font-semibold">Services</h5>
                    <h1 className="text-4xl lg:text-4xl font-medium max-w-2xl">We help you identify, explore and respond to new opportunities.</h1>
                    <p className="text-neutral-950 font-light text-xl max-w-3xl ">
                        As long as those opportunities involve giving us money to re-purpose 
                        old projects - we can come up with an endless of those.
                    </p>
                </div>
                <div className="flex lg:flex-row flex-col items-center lg:justify-end  mt-16 gap-y-10">
                    <div className="flex justify-end w-1/2">
                        <img className="w-full bg-neutral-100 object-cover" src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&w=3840&q=75" alt="" width={2600} height={3000} /> 
                    </div>
                    <div className="flex flex-col gap-y-12  md:max-w-[680px] lg:max-w-[550pxs] px-6 md:px-12">
                        <div>
                            <p className="font-light text-neutral-600"><strong className="font-semibold text-black">Web development.</strong>We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-black h-px w-7"></span><div className="bg-neutral-300 w-full h-px"></div>
                        </div>
                        
                        <div>
                            <p className="font-light text-neutral-700"><strong className="font-semibold text-black">Application development.</strong>We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit.</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="bg-black h-px w-7"></span><div className="bg-neutral-300 w-full h-px"></div>
                        </div>

                        <div>
                            <p className="font-light text-neutral-600"><strong className="font-semibold text-black">E-commerce.</strong>We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years.</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="bg-black h-px w-7"></span><div className="bg-neutral-300 w-full h-px"></div>
                        </div>

                        <div>
                            <p className="font-light text-neutral-600"><strong className="font-semibold text-black">Custom content management.</strong>At Studio we understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto mt-40 lg:px-8 px-7 ">
                <div className="mx-auto max-w-2xl lg:max-w-none bg-neutral-950 text-white px-9  py-32  rounded-[40px]">
                    <div className="mx-auto max-w-4xl">
                        <div className="max-w-xl flex flex-col gap-8">
                            <h1 className="text-3xl font-medium text-white">Tell us about your project</h1>
                            <div className=" flex -mt-1">
                                <button className=" inline-flex text-sm font-semibold rounded-full px-4 py-2 transition bg-white text-neutral-950 hover:bg-neutral-200">Say Hey</button>
                            </div>
                            <div className="bg-white/10 h-px w-full"></div>
                            <h3 className="font-semibold">Our Offices</h3>
                            <ul className="grid grid-cols-2 gap-8 text-sm">
                                <li>
                                    <address className="not-italic text-neutral-300">
                                        <strong className="text-white text-base">Copenhagen</strong>
                                        <br />
                                        1 Carisberg Gate
                                        <br />
                                        1260, København, Denmark
                                    </address>
                                </li>
                                <li>
                                    <address className="not-italic text-neutral-300">
                                        <strong className="text-white text-base">Billund</strong>
                                        <br />
                                        24 Lego Allé
                                        <br />
                                        7190, Billund, Denmark
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer className="max-w-2xl lg:max-w-7xl mx-auto px-10 mt-32 w-full">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <nav>
                        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-8 sm:mx-auto">
                            <ul className="mt-5 text-sm text-neutral-700">
                            <div className="font-semibold text-base tracking-wide text-neutral-950">Work</div>
                                <li className="mt-5">FamilyFund</li>
                                <li className="mt-5">Unseal</li>
                                <li className="mt-5">Phobia</li>
                                <li className="mt-5">See all<span>→</span></li>
                            </ul>
                            <ul className="mt-5 text-sm text-neutral-700">
                                <div className="font-semibold text-base tracking-wider text-neutral-950">Company</div>
                                <li className="mt-5">About</li>
                                <li className="mt-5">Process</li>
                                <li className="mt-5">Blog</li>
                                <li className="mt-5">Contact us</li>
                            </ul>
                            <ul className="text-neutral-700 mt-5 text-sm">
                                <div className="font-semibold text-base tracking-wider text-neutral-950">Connect</div>
                                <li className="mt-5">Facebook</li>
                                <li className="mt-5">Instagram</li>
                                <li className="mt-5">GitHub</li>
                                <li className="mt-5">Dribble</li>
                            </ul>
                        </ul>
                    </nav>
                    <div className="place-self-start lg:place-self-end">
                        <form className="max-w-sm flex flex-col gap-y-5">
                            <h3>Sign up for our newsletter</h3>
                            <p className="font-light text-neutral-800 text-sm">Subscribe to get the latest design news, articles, resources and inspiration</p>
                            <div className="border border-[#d4d4d4] rounded-xl p-0.5 flex justify-between pl-4">
                                <input className="outline-none" type="email" placeholder="Email address" />
                                <button className="flex aspect-square items-center justify-center bg-slate-950 text-white px-4 py-3 rounded-xl hover:bg-neutral-800" type="submit">→</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className=" border-t flex justify-center mt-24 py-16">
                    {/* <h2 className="text-2xl font-semibold">Studio.</h2> */}
                    <p className="font-light text-sm text-neutral-800">© Studio Agency Inc. 2024</p>
                </div>
            </footer>
        </main>
    );
}