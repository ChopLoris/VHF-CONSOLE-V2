import React, { Component } from 'react'
import ProgressBar from 'react-customizable-progressbar';
import 'particles.js/particles';

const particlesJS = window.particlesJS;

export class VHFControl extends Component {

    componentDidMount(){
        //particles.js github page says to load package like so:
        particlesJS.load('particles-js', 'assets/particles.json');
        particlesJS.load('particles-js1', 'assets/particles.json');
        particlesJS.load('particles-js2', 'assets/particles.json');
        particlesJS.load('particles-js3', 'assets/particles.json');
        particlesJS.load('particles-js4', 'assets/particles.json');
        particlesJS.load('particles-js5', 'assets/particles.json');
      }

    _handleActive = id => {
        this.setState({
            name: id
        })
    }

    render() {
        return (
            <div className='flex mt-5 h-screen'>
                <div className='w-6/12'>
                    <div className='grid grid-cols-3 h-[70%]'>
                        <div onClick={() => this._handleActive(16)} className={"my-10 w-[213px] h-[315px] rounded-xl cursor-pointer " + (this.state && this.state.name === 16 ? 'bg-buttonChannel' : 'bg-header')}>
                            <div className='flex relative justify-between w-[213px]'>
                                <div className='m-5'>
                                    <span className='text-cyan-50 text-4xl'>16</span>
                                </div>
                                <div className='p-5 m-3 bg-[#003138] rounded-full'>
                                <svg viewBox="0 0 30 24" className='w-6 h-6 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4936 11.1833C17.4936 9.72302 16.3097 8.53915 14.8494 8.53915C13.3891 8.53915 12.2052 9.72302 12.2052 11.1833C12.2052 12.1668 12.7433 13.0232 13.54 13.4787L13.5612 22.3593C13.5629 23.077 14.1453 23.6577 14.8627 23.6577C14.8638 23.6577 14.8648 23.6577 14.8659 23.6577C15.5848 23.6559 16.166 23.0718 16.1643 22.353L16.1431 13.4883C16.9485 13.035 17.4936 12.1734 17.4936 11.1833Z"/>
                                <path d="M5.27916 2.29218L3.48409 0.342499C-1.42544 6.77395 -1.09016 15.7751 4.13521 21.8373L5.90962 19.91C1.764 14.893 1.46621 7.63104 5.27916 2.29218Z"/>
                                <path d="M7.84386 5.07797L6.02363 3.10086C2.66205 7.98384 2.94891 14.5317 6.64576 19.1103L8.43146 17.1707C5.79804 13.6578 5.55196 8.83938 7.84386 5.07797Z"/>
                                <path d="M7.28854 10.7391C7.28854 12.7625 7.99675 14.7176 9.26148 16.2692L11.0493 14.3273C10.3039 13.2899 9.89159 12.0342 9.89159 10.7391C9.89159 9.77943 10.1151 8.84425 10.5351 8.00103L8.68846 5.99512C7.78 7.40059 7.28854 9.04277 7.28854 10.7391Z"/>
                                <path d="M24.0906 19.91L25.865 21.8373C31.0903 15.7751 31.4256 6.77395 26.5161 0.342499L24.721 2.29236C28.5338 7.63104 28.2362 14.893 24.0906 19.91Z"/>
                                <path d="M23.9764 3.10086L22.1561 5.07797C24.448 8.83955 24.202 13.6578 21.5685 17.1709L23.3542 19.1105C27.0511 14.5317 27.3381 7.98384 23.9764 3.10086Z"/>
                                <path d="M22.7116 10.7391C22.7116 9.04277 22.22 7.40059 21.3117 5.99512L19.4649 8.00103C19.8849 8.84425 20.1084 9.77943 20.1084 10.7391C20.1084 12.0342 19.6961 13.2899 18.9507 14.3273L20.7385 16.2692C22.0034 14.7176 22.7116 12.7625 22.7116 10.7391Z"/>
                                </svg>
                                </div>
                            </div>
                            <div id="particles-js" className='relative w-full mt-1 h-4/6'></div>
                        </div>
                        <div onClick={() => this._handleActive(18)} className={"my-10 w-[213px] h-[315px] rounded-xl cursor-pointer " + (this.state && this.state.name === 18 ? 'bg-buttonChannel' : 'bg-header')}>
                            <div className='flex relative justify-between w-[213px]'>
                                <div className='m-5'>
                                    <span className='text-cyan-50 text-4xl'>18</span>
                                </div>
                                <div className='p-5 m-3 bg-[#003138] rounded-full'>
                                    <svg viewBox="0 0 30 24" className='w-6 h-6 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4936 11.1833C17.4936 9.72302 16.3097 8.53915 14.8494 8.53915C13.3891 8.53915 12.2052 9.72302 12.2052 11.1833C12.2052 12.1668 12.7433 13.0232 13.54 13.4787L13.5612 22.3593C13.5629 23.077 14.1453 23.6577 14.8627 23.6577C14.8638 23.6577 14.8648 23.6577 14.8659 23.6577C15.5848 23.6559 16.166 23.0718 16.1643 22.353L16.1431 13.4883C16.9485 13.035 17.4936 12.1734 17.4936 11.1833Z"/>
                                    <path d="M5.27916 2.29218L3.48409 0.342499C-1.42544 6.77395 -1.09016 15.7751 4.13521 21.8373L5.90962 19.91C1.764 14.893 1.46621 7.63104 5.27916 2.29218Z"/>
                                    <path d="M7.84386 5.07797L6.02363 3.10086C2.66205 7.98384 2.94891 14.5317 6.64576 19.1103L8.43146 17.1707C5.79804 13.6578 5.55196 8.83938 7.84386 5.07797Z"/>
                                    <path d="M7.28854 10.7391C7.28854 12.7625 7.99675 14.7176 9.26148 16.2692L11.0493 14.3273C10.3039 13.2899 9.89159 12.0342 9.89159 10.7391C9.89159 9.77943 10.1151 8.84425 10.5351 8.00103L8.68846 5.99512C7.78 7.40059 7.28854 9.04277 7.28854 10.7391Z"/>
                                    <path d="M24.0906 19.91L25.865 21.8373C31.0903 15.7751 31.4256 6.77395 26.5161 0.342499L24.721 2.29236C28.5338 7.63104 28.2362 14.893 24.0906 19.91Z"/>
                                    <path d="M23.9764 3.10086L22.1561 5.07797C24.448 8.83955 24.202 13.6578 21.5685 17.1709L23.3542 19.1105C27.0511 14.5317 27.3381 7.98384 23.9764 3.10086Z"/>
                                    <path d="M22.7116 10.7391C22.7116 9.04277 22.22 7.40059 21.3117 5.99512L19.4649 8.00103C19.8849 8.84425 20.1084 9.77943 20.1084 10.7391C20.1084 12.0342 19.6961 13.2899 18.9507 14.3273L20.7385 16.2692C22.0034 14.7176 22.7116 12.7625 22.7116 10.7391Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="particles-js1" className='w-full mt-1 h-4/6'></div>
                        </div>
                        <div onClick={() => this._handleActive(20)} className={"my-10 w-[213px] h-[315px] rounded-xl cursor-pointer " + (this.state && this.state.name === 20 ? 'bg-buttonChannel' : 'bg-header')}>
                        <div className='flex relative justify-between w-[213px]'>
                            <div className='m-5'>
                                <span className='text-cyan-50 text-4xl'>20</span>
                            </div>
                            <div className='p-5 m-3 bg-[#003138] rounded-full'>
                                <svg viewBox="0 0 30 24" className='w-6 h-6 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4936 11.1833C17.4936 9.72302 16.3097 8.53915 14.8494 8.53915C13.3891 8.53915 12.2052 9.72302 12.2052 11.1833C12.2052 12.1668 12.7433 13.0232 13.54 13.4787L13.5612 22.3593C13.5629 23.077 14.1453 23.6577 14.8627 23.6577C14.8638 23.6577 14.8648 23.6577 14.8659 23.6577C15.5848 23.6559 16.166 23.0718 16.1643 22.353L16.1431 13.4883C16.9485 13.035 17.4936 12.1734 17.4936 11.1833Z"/>
                                <path d="M5.27916 2.29218L3.48409 0.342499C-1.42544 6.77395 -1.09016 15.7751 4.13521 21.8373L5.90962 19.91C1.764 14.893 1.46621 7.63104 5.27916 2.29218Z"/>
                                <path d="M7.84386 5.07797L6.02363 3.10086C2.66205 7.98384 2.94891 14.5317 6.64576 19.1103L8.43146 17.1707C5.79804 13.6578 5.55196 8.83938 7.84386 5.07797Z"/>
                                <path d="M7.28854 10.7391C7.28854 12.7625 7.99675 14.7176 9.26148 16.2692L11.0493 14.3273C10.3039 13.2899 9.89159 12.0342 9.89159 10.7391C9.89159 9.77943 10.1151 8.84425 10.5351 8.00103L8.68846 5.99512C7.78 7.40059 7.28854 9.04277 7.28854 10.7391Z"/>
                                <path d="M24.0906 19.91L25.865 21.8373C31.0903 15.7751 31.4256 6.77395 26.5161 0.342499L24.721 2.29236C28.5338 7.63104 28.2362 14.893 24.0906 19.91Z"/>
                                <path d="M23.9764 3.10086L22.1561 5.07797C24.448 8.83955 24.202 13.6578 21.5685 17.1709L23.3542 19.1105C27.0511 14.5317 27.3381 7.98384 23.9764 3.10086Z"/>
                                <path d="M22.7116 10.7391C22.7116 9.04277 22.22 7.40059 21.3117 5.99512L19.4649 8.00103C19.8849 8.84425 20.1084 9.77943 20.1084 10.7391C20.1084 12.0342 19.6961 13.2899 18.9507 14.3273L20.7385 16.2692C22.0034 14.7176 22.7116 12.7625 22.7116 10.7391Z"/>
                                </svg>
                            </div>
                            </div>
                            <div id="particles-js2" className='w-full mt-1 h-4/6'></div>
                        </div>
                        <div onClick={() => this._handleActive(22)} className={"w-[213px] h-[315px] rounded-xl cursor-pointer " + (this.state && this.state.name === 22 ? 'bg-buttonChannel' : 'bg-header')}>
                        <div className='flex relative justify-between w-[213px]'>
                                <div className='m-5'>
                                    <span className='text-cyan-50 text-4xl'>22</span>
                                </div>
                                <div className='p-5 m-3 bg-[#003138] rounded-full'>
                                    <svg viewBox="0 0 30 24" className='w-6 h-6 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4936 11.1833C17.4936 9.72302 16.3097 8.53915 14.8494 8.53915C13.3891 8.53915 12.2052 9.72302 12.2052 11.1833C12.2052 12.1668 12.7433 13.0232 13.54 13.4787L13.5612 22.3593C13.5629 23.077 14.1453 23.6577 14.8627 23.6577C14.8638 23.6577 14.8648 23.6577 14.8659 23.6577C15.5848 23.6559 16.166 23.0718 16.1643 22.353L16.1431 13.4883C16.9485 13.035 17.4936 12.1734 17.4936 11.1833Z"/>
                                    <path d="M5.27916 2.29218L3.48409 0.342499C-1.42544 6.77395 -1.09016 15.7751 4.13521 21.8373L5.90962 19.91C1.764 14.893 1.46621 7.63104 5.27916 2.29218Z"/>
                                    <path d="M7.84386 5.07797L6.02363 3.10086C2.66205 7.98384 2.94891 14.5317 6.64576 19.1103L8.43146 17.1707C5.79804 13.6578 5.55196 8.83938 7.84386 5.07797Z"/>
                                    <path d="M7.28854 10.7391C7.28854 12.7625 7.99675 14.7176 9.26148 16.2692L11.0493 14.3273C10.3039 13.2899 9.89159 12.0342 9.89159 10.7391C9.89159 9.77943 10.1151 8.84425 10.5351 8.00103L8.68846 5.99512C7.78 7.40059 7.28854 9.04277 7.28854 10.7391Z"/>
                                    <path d="M24.0906 19.91L25.865 21.8373C31.0903 15.7751 31.4256 6.77395 26.5161 0.342499L24.721 2.29236C28.5338 7.63104 28.2362 14.893 24.0906 19.91Z"/>
                                    <path d="M23.9764 3.10086L22.1561 5.07797C24.448 8.83955 24.202 13.6578 21.5685 17.1709L23.3542 19.1105C27.0511 14.5317 27.3381 7.98384 23.9764 3.10086Z"/>
                                    <path d="M22.7116 10.7391C22.7116 9.04277 22.22 7.40059 21.3117 5.99512L19.4649 8.00103C19.8849 8.84425 20.1084 9.77943 20.1084 10.7391C20.1084 12.0342 19.6961 13.2899 18.9507 14.3273L20.7385 16.2692C22.0034 14.7176 22.7116 12.7625 22.7116 10.7391Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="particles-js3" className='w-full mt-1 h-4/6'></div>
                        </div>
                        <div onClick={() => this._handleActive(24)} className={"w-[213px] h-[315px] rounded-xl cursor-pointer " + (this.state && this.state.name === 24 ? 'bg-buttonChannel' : 'bg-header')}>
                        <div className='flex relative justify-between w-[213px]'>
                                <div className='m-5'>
                                    <span className='text-cyan-50 text-4xl'>24</span>
                                </div>
                                <div className='p-5 m-3 bg-[#003138] rounded-full'>
                                    <svg viewBox="0 0 30 24" className='w-6 h-6 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4936 11.1833C17.4936 9.72302 16.3097 8.53915 14.8494 8.53915C13.3891 8.53915 12.2052 9.72302 12.2052 11.1833C12.2052 12.1668 12.7433 13.0232 13.54 13.4787L13.5612 22.3593C13.5629 23.077 14.1453 23.6577 14.8627 23.6577C14.8638 23.6577 14.8648 23.6577 14.8659 23.6577C15.5848 23.6559 16.166 23.0718 16.1643 22.353L16.1431 13.4883C16.9485 13.035 17.4936 12.1734 17.4936 11.1833Z"/>
                                    <path d="M5.27916 2.29218L3.48409 0.342499C-1.42544 6.77395 -1.09016 15.7751 4.13521 21.8373L5.90962 19.91C1.764 14.893 1.46621 7.63104 5.27916 2.29218Z"/>
                                    <path d="M7.84386 5.07797L6.02363 3.10086C2.66205 7.98384 2.94891 14.5317 6.64576 19.1103L8.43146 17.1707C5.79804 13.6578 5.55196 8.83938 7.84386 5.07797Z"/>
                                    <path d="M7.28854 10.7391C7.28854 12.7625 7.99675 14.7176 9.26148 16.2692L11.0493 14.3273C10.3039 13.2899 9.89159 12.0342 9.89159 10.7391C9.89159 9.77943 10.1151 8.84425 10.5351 8.00103L8.68846 5.99512C7.78 7.40059 7.28854 9.04277 7.28854 10.7391Z"/>
                                    <path d="M24.0906 19.91L25.865 21.8373C31.0903 15.7751 31.4256 6.77395 26.5161 0.342499L24.721 2.29236C28.5338 7.63104 28.2362 14.893 24.0906 19.91Z"/>
                                    <path d="M23.9764 3.10086L22.1561 5.07797C24.448 8.83955 24.202 13.6578 21.5685 17.1709L23.3542 19.1105C27.0511 14.5317 27.3381 7.98384 23.9764 3.10086Z"/>
                                    <path d="M22.7116 10.7391C22.7116 9.04277 22.22 7.40059 21.3117 5.99512L19.4649 8.00103C19.8849 8.84425 20.1084 9.77943 20.1084 10.7391C20.1084 12.0342 19.6961 13.2899 18.9507 14.3273L20.7385 16.2692C22.0034 14.7176 22.7116 12.7625 22.7116 10.7391Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="particles-js4" className='w-full mt-1 h-4/6'></div>
                        </div>
                        <div onClick={() => this._handleActive(26)} className={"w-[213px] h-[315px] rounded-xl cursor-pointer " + (this.state && this.state.name === 26 ? 'bg-buttonChannel' : 'bg-header')}>
                        <div className='flex relative justify-between w-[213px]'>
                                <div className='m-5'>
                                    <span className='text-cyan-50 text-4xl'>26</span>
                                </div>
                                <div className='p-5 m-3 bg-[#003138] rounded-full'>
                                    <svg viewBox="0 0 30 24" className='w-6 h-6 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4936 11.1833C17.4936 9.72302 16.3097 8.53915 14.8494 8.53915C13.3891 8.53915 12.2052 9.72302 12.2052 11.1833C12.2052 12.1668 12.7433 13.0232 13.54 13.4787L13.5612 22.3593C13.5629 23.077 14.1453 23.6577 14.8627 23.6577C14.8638 23.6577 14.8648 23.6577 14.8659 23.6577C15.5848 23.6559 16.166 23.0718 16.1643 22.353L16.1431 13.4883C16.9485 13.035 17.4936 12.1734 17.4936 11.1833Z"/>
                                    <path d="M5.27916 2.29218L3.48409 0.342499C-1.42544 6.77395 -1.09016 15.7751 4.13521 21.8373L5.90962 19.91C1.764 14.893 1.46621 7.63104 5.27916 2.29218Z"/>
                                    <path d="M7.84386 5.07797L6.02363 3.10086C2.66205 7.98384 2.94891 14.5317 6.64576 19.1103L8.43146 17.1707C5.79804 13.6578 5.55196 8.83938 7.84386 5.07797Z"/>
                                    <path d="M7.28854 10.7391C7.28854 12.7625 7.99675 14.7176 9.26148 16.2692L11.0493 14.3273C10.3039 13.2899 9.89159 12.0342 9.89159 10.7391C9.89159 9.77943 10.1151 8.84425 10.5351 8.00103L8.68846 5.99512C7.78 7.40059 7.28854 9.04277 7.28854 10.7391Z"/>
                                    <path d="M24.0906 19.91L25.865 21.8373C31.0903 15.7751 31.4256 6.77395 26.5161 0.342499L24.721 2.29236C28.5338 7.63104 28.2362 14.893 24.0906 19.91Z"/>
                                    <path d="M23.9764 3.10086L22.1561 5.07797C24.448 8.83955 24.202 13.6578 21.5685 17.1709L23.3542 19.1105C27.0511 14.5317 27.3381 7.98384 23.9764 3.10086Z"/>
                                    <path d="M22.7116 10.7391C22.7116 9.04277 22.22 7.40059 21.3117 5.99512L19.4649 8.00103C19.8849 8.84425 20.1084 9.77943 20.1084 10.7391C20.1084 12.0342 19.6961 13.2899 18.9507 14.3273L20.7385 16.2692C22.0034 14.7176 22.7116 12.7625 22.7116 10.7391Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="particles-js5" className='w-full mt-1 h-4/6'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-[329px] h-[315px] mt-10 bg-header rounded-3xl shadow-md'>
                        <div className="h-[315px] w-[329px] absolute flex justify-center items-center">
                            <ProgressBar
                                radius={100}
                                progress={60}
                                strokeWidth={18}
                                strokeColor="#a0d468"
                                strokeLinecap="round"
                                trackStrokeWidth={18}
                                counterClockwise
                            >
                                <div className="indicator">
                                    <div>60%</div>
                                </div>
                            </ProgressBar>
                        </div>
                        <div className='h-1/2 w-full flex justify-between px-3 py-5 '>
                            <h1 className='text-cyan-50 text-xl items-center content-center pt-2'>Information</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                        </div>
                        <div className='bg-primary h-1/2 w-full rounded-3xl'>
                            <div class="w-full h-1/2 flex justify-between items-baseline px-3 pt-2">
                                <div class="flex flex-col justify-center items-center">
                                    <h1 class="text-cyan-50 font-bold text-clip">Status</h1>
                                    <h1 class="text-lime-500 drop-shadow-xl text-xs">Connected</h1>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <h1 class="text-cyan-50 font-bold text-clip">RX / TX</h1>
                                    <div className='flex justify-between space-x-2'>
                                        <div className='p-3 bg-lime-400 rounded-full'></div>
                                        <div className='p-3 bg-rose-600 rounded-full'></div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full h-1/2 flex flex-col justify-center items-center">
                                <h1 class="text-cyan-50 font-bold">Condition Device</h1>
                                <h1 class="text-lime-400 drop-shadow-xl text-sm">Normal</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[329px] h-[315px] mt-10 bg-header rounded-3xl shadow-md overflow-auto'>
                        <table className='text-light-blue-50 border-none space-y-6 text-center text-sm w-full'>
                            <thead className='bg-primary text-gray-500'>
                                <tr>
                                    <th className='p-3'>Date / Time</th>
                                    <th className='p-3'>Channel</th>
                                    <th className='p-3'>Status</th>
                                </tr>
                            </thead>
                            <tbody className='py-4'>
                                <tr>
                                    <td className='p-3'>01-02-03 12:00:00</td>
                                    <td className='p-3'>16</td>
                                    <td className='p-3'>TX</td>
                                </tr>
                                <tr>
                                    <td className='p-3'>01-02-03 12:00:00</td>
                                    <td className='p-3'>16</td>
                                    <td className='p-3'>TX</td>
                                </tr>
                                <tr>
                                    <td className='p-3'>01-02-03 12:00:00</td>
                                    <td className='p-3'>16</td>
                                    <td className='p-3'>TX</td>
                                </tr>
                                <tr>
                                    <td className='p-3'>01-02-03 12:00:00</td>
                                    <td className='p-3'>16</td>
                                    <td className='p-3'>TX</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-[329px] h-[68%] ml-16 mt-10 bg-header rounded-3xl shadow-md overflow-auto'>
                    <table className='text-light-blue-50 border-none space-y-6 text-center text-sm w-full'>
                        <thead className='bg-primary text-gray-500'>
                            <tr>
                                <th className='p-3'>Date / Time</th>
                                <th className='p-3'>Channel</th>
                                <th className='p-3'>Status</th>
                                <th className='p-3'>Duration</th>
                            </tr>
                        </thead>
                        <tbody className='py-4'>
                            <tr>
                                <td className='p-3'>01-02-03 12:00:00</td>
                                <td className='p-3'>16</td>
                                <td className='p-3'>TX</td>
                                <td className='p-3'>02:00</td>
                            </tr>
                            <tr>
                                <td className='p-3'>01-02-03 12:00:00</td>
                                <td className='p-3'>16</td>
                                <td className='p-3'>TX</td>
                                <td className='p-3'>02:00</td>
                            </tr>
                            <tr>
                                <td className='p-3'>01-02-03 12:00:00</td>
                                <td className='p-3'>16</td>
                                <td className='p-3'>TX</td>
                                <td className='p-3'>02:00</td>
                            </tr>
                            <tr>
                                <td className='p-3'>01-02-03 12:00:00</td>
                                <td className='p-3'>16</td>
                                <td className='p-3'>TX</td>
                                <td className='p-3'>02:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default VHFControl