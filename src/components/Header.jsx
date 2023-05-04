import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';


export default function Header() {


    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setOpen(true);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <header>
            <nav
                className="relative flex w-full items-center justify-between  py-2  shadow-lg md:flex-wrap md:justify-start"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="flex items-center">
                        {/* <!-- Hamburger menu button --> */}
                        <button
                            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out  lg:hidden"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={showDrawer}>
                            {/* <!-- Hamburger menu icon --> */}
                            <span className="[&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-7 w-7">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </span>
                        </button>

                        <Drawer
                            // title="MENU"
                            placement={'bottom'}
                            width={500}
                            onClose={onClose}
                            open={open}
                        // extra={
                        //     <Space>
                        //         <Button onClick={onClose}>Cancel</Button>
                        //     </Space>
                        // }
                        >
                            <div className=' w-full p-5 flex flex-col justify-center items-center text-lg h-full gap-4'>
                                <p className='w-full text-center p-2 cursor-pointer hover:bg-slate-400'>allCars</p>
                                <p className='w-full text-center p-2 cursor-pointer hover:bg-slate-400'>addCar</p>
                                <p className='w-full text-center p-2 cursor-pointer hover:bg-slate-400'>editCar</p>
                                <p className='w-full text-center p-2 cursor-pointer hover:bg-slate-400'>deleteCar</p>
                            </div>
                        </Drawer>
                    </div>

                    {/* <!-- Navigation links --> */}
                    <div
                        className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentY"
                        data-te-collapse-item>
                        <ul
                            className="mr-auto flex flex-col lg:flex-row"
                            data-te-navbar-nav-ref>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <a
                                    className="block transition duration-150 ease-in-out  lg:p-2 [&.active]:text-black/90"
                                    href="#!"
                                    data-te-nav-link-ref
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >allCars</a>
                            </li>

                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <a
                                    className="block transition duration-150 ease-in-out  lg:p-2 [&.active]:text-black/90"
                                    href="#!"
                                    data-te-nav-link-ref
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >addCar</a>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <a
                                    className="block transition duration-150 ease-in-out  lg:p-2 [&.active]:text-black/90"
                                    href="#!"
                                    data-te-nav-link-ref
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >editCar</a>
                            </li>
                            <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <a
                                    className="block transition duration-150 ease-in-out  lg:p-2 [&.active]:text-black/90"
                                    href="#!"
                                    data-te-nav-link-ref
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >deleteCar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </header>
    )
}