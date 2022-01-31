import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Sidebar extends Component {
    render() {
        return (
            <div className='fixed flex flex-col h-full w-52 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-sidebar'>
                <div className='p-12'>
                    {/* LOGO */}
                    <div className='pt-[36px]'>
                        <svg width="128" height="126" viewBox="0 0 128 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.06 63C125.06 96.3918 97.7357 123.5 63.9817 123.5C30.2277 123.5 2.90369 96.3918 2.90369 63C2.90369 29.6082 30.2277 2.5 63.9817 2.5C97.7357 2.5 125.06 29.6082 125.06 63Z" stroke="#00929C" stroke-width="5"/>
                        <path d="M36.0516 73.2402V76H23.2548V73.2402H36.0516ZM23.9227 50.4062V76H20.5302V50.4062H23.9227ZM58.4813 62.3945V64.0117C58.4813 65.9336 58.2411 67.6562 57.7606 69.1797C57.2802 70.7031 56.5887 71.998 55.6864 73.0645C54.7841 74.1309 53.7001 74.9453 52.4344 75.5078C51.1805 76.0703 49.7743 76.3516 48.2157 76.3516C46.704 76.3516 45.3153 76.0703 44.0497 75.5078C42.7958 74.9453 41.7059 74.1309 40.7802 73.0645C39.8661 71.998 39.1571 70.7031 38.6532 69.1797C38.1493 67.6562 37.8973 65.9336 37.8973 64.0117V62.3945C37.8973 60.4727 38.1434 58.7559 38.6356 57.2441C39.1395 55.7207 39.8485 54.4258 40.7626 53.3594C41.6766 52.2812 42.7606 51.4609 44.0145 50.8984C45.2802 50.3359 46.6688 50.0547 48.1805 50.0547C49.7391 50.0547 51.1454 50.3359 52.3993 50.8984C53.6649 51.4609 54.7489 52.2812 55.6512 53.3594C56.5653 54.4258 57.2626 55.7207 57.743 57.2441C58.2352 58.7559 58.4813 60.4727 58.4813 62.3945ZM55.1239 64.0117V62.3594C55.1239 60.8359 54.9657 59.4883 54.6493 58.3164C54.3446 57.1445 53.8934 56.1602 53.2958 55.3633C52.6981 54.5664 51.9657 53.9629 51.0985 53.5527C50.243 53.1426 49.2704 52.9375 48.1805 52.9375C47.1259 52.9375 46.1708 53.1426 45.3153 53.5527C44.4716 53.9629 43.745 54.5664 43.1356 55.3633C42.538 56.1602 42.0751 57.1445 41.7469 58.3164C41.4188 59.4883 41.2548 60.8359 41.2548 62.3594V64.0117C41.2548 65.5469 41.4188 66.9062 41.7469 68.0898C42.0751 69.2617 42.5438 70.252 43.1532 71.0605C43.7743 71.8574 44.5067 72.4609 45.3505 72.8711C46.2059 73.2812 47.161 73.4863 48.2157 73.4863C49.3173 73.4863 50.2958 73.2812 51.1512 72.8711C52.0067 72.4609 52.7274 71.8574 53.3134 71.0605C53.911 70.252 54.3622 69.2617 54.6669 68.0898C54.9716 66.9062 55.1239 65.5469 55.1239 64.0117ZM82.4755 63.2559V72.625C82.1591 73.0938 81.6552 73.6211 80.9637 74.207C80.2723 74.7812 79.3173 75.2852 78.0985 75.7188C76.8915 76.1406 75.3329 76.3516 73.4227 76.3516C71.8641 76.3516 70.4286 76.082 69.1161 75.543C67.8153 74.9922 66.6844 74.1953 65.7235 73.1523C64.7743 72.0977 64.036 70.8203 63.5087 69.3203C62.993 67.8086 62.7352 66.0977 62.7352 64.1875V62.2012C62.7352 60.291 62.9579 58.5859 63.4032 57.0859C63.8602 55.5859 64.5282 54.3145 65.4071 53.2715C66.286 52.2168 67.3641 51.4199 68.6415 50.8809C69.9188 50.3301 71.3837 50.0547 73.036 50.0547C74.993 50.0547 76.6278 50.3945 77.9403 51.0742C79.2645 51.7422 80.2958 52.668 81.0341 53.8516C81.7841 55.0352 82.2645 56.3828 82.4755 57.8945H79.0829C78.9305 56.9688 78.6259 56.125 78.1688 55.3633C77.7235 54.6016 77.0848 53.9922 76.2528 53.5352C75.4208 53.0664 74.3485 52.832 73.036 52.832C71.8524 52.832 70.827 53.0488 69.9598 53.4824C69.0927 53.916 68.3778 54.5371 67.8153 55.3457C67.2528 56.1543 66.8309 57.1328 66.5497 58.2812C66.2802 59.4297 66.1454 60.7246 66.1454 62.166V64.1875C66.1454 65.6641 66.3153 66.9824 66.6552 68.1426C67.0067 69.3027 67.5048 70.293 68.1493 71.1133C68.7938 71.9219 69.5614 72.5371 70.452 72.959C71.3544 73.3809 72.3505 73.5918 73.4403 73.5918C74.6473 73.5918 75.6259 73.4922 76.3759 73.293C77.1259 73.082 77.7118 72.8359 78.1337 72.5547C78.5555 72.2617 78.8778 71.9863 79.1005 71.7285V65.998H73.1766V63.2559H82.4755ZM107.806 62.3945V64.0117C107.806 65.9336 107.565 67.6562 107.085 69.1797C106.604 70.7031 105.913 71.998 105.011 73.0645C104.108 74.1309 103.024 74.9453 101.759 75.5078C100.505 76.0703 99.0985 76.3516 97.5399 76.3516C96.0282 76.3516 94.6395 76.0703 93.3739 75.5078C92.12 74.9453 91.0302 74.1309 90.1044 73.0645C89.1903 71.998 88.4813 70.7031 87.9774 69.1797C87.4735 67.6562 87.2216 65.9336 87.2216 64.0117V62.3945C87.2216 60.4727 87.4677 58.7559 87.9598 57.2441C88.4637 55.7207 89.1727 54.4258 90.0868 53.3594C91.0009 52.2812 92.0848 51.4609 93.3387 50.8984C94.6044 50.3359 95.993 50.0547 97.5048 50.0547C99.0634 50.0547 100.47 50.3359 101.724 50.8984C102.989 51.4609 104.073 52.2812 104.975 53.3594C105.89 54.4258 106.587 55.7207 107.067 57.2441C107.559 58.7559 107.806 60.4727 107.806 62.3945ZM104.448 64.0117V62.3594C104.448 60.8359 104.29 59.4883 103.974 58.3164C103.669 57.1445 103.218 56.1602 102.62 55.3633C102.022 54.5664 101.29 53.9629 100.423 53.5527C99.5673 53.1426 98.5946 52.9375 97.5048 52.9375C96.4501 52.9375 95.495 53.1426 94.6395 53.5527C93.7958 53.9629 93.0692 54.5664 92.4598 55.3633C91.8622 56.1602 91.3993 57.1445 91.0712 58.3164C90.743 59.4883 90.579 60.8359 90.579 62.3594V64.0117C90.579 65.5469 90.743 66.9062 91.0712 68.0898C91.3993 69.2617 91.868 70.252 92.4774 71.0605C93.0985 71.8574 93.8309 72.4609 94.6747 72.8711C95.5302 73.2812 96.4852 73.4863 97.5399 73.4863C98.6415 73.4863 99.62 73.2812 100.475 72.8711C101.331 72.4609 102.052 71.8574 102.638 71.0605C103.235 70.252 103.686 69.2617 103.991 68.0898C104.296 66.9062 104.448 65.5469 104.448 64.0117Z" fill="#00929C"/>
                        </svg>
                    </div>
                </div>

                {/* MENU LIST */}
                <div className='flex flex-col justify-between flex-grow pt-10'>
                    <ul className='flex flex-col py-4 space-y-7'>
                        <li>
                            <NavLink to="/VHF-Control" className='relative group flex flex-row items-center'>
                                <span className='absolute left-5 float-left p-2 bg-sidebar rounded-full group-hover:bg-primary'></span>
                                <span className='inline-flex justify-center items-center ml-[80px] fill'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-secondary group-hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Record-Control' className='relative group flex flex-row items-center'>
                                <span className='absolute left-5 float-left p-2 bg-sidebar rounded-full group-hover:bg-primary'></span>
                                <span className='inline-flex justify-center items-center ml-[80px] fill'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 stroke-secondary group-hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Playback-Control' className='relative group flex flex-row items-center'>
                                <span className='absolute left-5 float-left p-2 bg-sidebar rounded-full group-hover:bg-primary'></span>
                                <span className='inline-flex justify-center items-center ml-[80px] fill'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 stroke-secondary group-hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Settings-Control' className='relative group flex flex-row items-center'>
                                <span className='absolute left-5 float-left p-2 bg-sidebar rounded-full group-hover:bg-primary'></span>
                                <span className='inline-flex justify-center items-center ml-[80px] fill'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 stroke-secondary group-hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='py-10'>
                    <NavLink to='/exit' className='relative group flex flex-row items-center'>
                        <span className='absolute left-5 float-left p-2 bg-sidebar rounded-full group-hover:bg-primary'></span>
                        <span className='inline-flex justify-center items-center ml-[80px] fill'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 stroke-secondary drop-shadow-xl group-hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        </span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Sidebar
