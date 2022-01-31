import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className='flex justify-between h-[100px] w-[80%] mt-[57px] ml-[315px] mr-[126px] drop-shadow-xl rounded-2xl border-4 border-border border-solid bg-header'>
                <div className='w-80 h-full rounded-2xl drop-shadow-lg bg-[#003138]'>
                    <div className='px-10 py-7'>
                        <span className='text-2xl text-blue-gray-300'>VTS SEMARANG</span>
                        <button className='group absolute p-2 right-0 top-0 mt-7 mr-7 rounded-full bg-[#0D1E27]'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-primary group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col m-4 text-center'>
                    <span className='text-cool-gray-50 text-xl font-semibold'>13 January 2022</span>
                    <span className='text-cool-gray-50 text-xl font-semibold'>12:43:29</span>
                </div>
                <div className='mt-2 mr-5'>
                    <svg width="107" height="80" viewBox="0 0 207 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="51.75" y="36.7812" width="25.875" height="30.0938" rx="10" fill="white"/>
                    <rect x="12.9375" y="46.8125" width="25.875" height="13.375" rx="6.6875" fill="white"/>
                    <rect x="90.5625" y="30.0938" width="25.875" height="46.8125" rx="10" fill="white"/>
                    <rect x="129.375" y="40.125" width="25.875" height="30.0938" rx="10" fill="white"/>
                    <rect x="168.188" y="46.8125" width="25.875" height="13.375" rx="6.6875" fill="white"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Navbar
