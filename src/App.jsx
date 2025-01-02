import './App.css'
import Logo from './assets/images/Logo.svg'
import Hero from './assets/images/Hero.png'
import third from './assets/images/third.png'
import four from './assets/images/four.png'
import item1 from './assets/images/item1.png'
import item2 from './assets/images/item2.png'
import item3 from './assets/images/item3.png'
import item4 from './assets/images/item4.png'
import item5 from './assets/images/item5.png'
import item6 from './assets/images/item6.png'

function App() {
  return (
    <>
      <div className='px-[170px] py-[28px] flex items-center justify-between'>
        <a href='#'>
          <img src={Logo} alt="logo" width={120} height={15}/>
        </a>
        <ul className='flex items-center gap-[22px]'>
          <li>
            <a className='text-[16px] text-[#666666D9] font-medium hover:text-red-600 duration-300' href="#">Academy</a>
          </li>
          <li>
            <a className='text-[16px] text-[#666666D9] font-medium hover:text-red-600 duration-300' href="#">Blog</a>
          </li>
          <li>
            <a className='text-[16px] text-[#666666D9] font-medium hover:text-red-600 duration-300' href="#">Work</a>
          </li>
          <li>
            <a className='text-[16px] text-[#666666D9] font-medium hover:text-red-600 duration-300' href="#">Contact</a>
          </li>
          <li>
            <a className='text-[16px] text-[#666666D9] font-medium hover:text-red-600 duration-300' href="#">About</a>
          </li>
        </ul>
      </div>
      <div className='px-[170px] flex items-center justify-between'>
        <div className='py-[50px]'>
          <h2 className='w-[522px] text-[48px] font-bold text-[#4A4A4A] mb-[20px]'>Exploring cities through data analysis and visualization</h2>
          <p className='w-[512px] text-[18px] text-[#434A54]'>Morphocode is a design and development firm that uses data to visualize urban dynamics and provide location insights. Our team brings together expertise across architecture, urban planning, and software engineering.</p>
        </div>
        <img src={Hero} alt="hero" width={600} height={600}/>
      </div>
      <div className='px-[170px] flex items-center gap-[15px] justify-between'>
        <img src={third} alt="third" width={590} height={590}/>
        <div>
          <h2 className='w-[437px] text-[36px] font-bold text-[#4A4A4A] mb-[15px]'>We research, design, and develop</h2>
          <p className='w-[458px] text-[18px] mb-[21px] text-[#434A54]'>Our portfolio ranges from interactive web maps and information graphics to custom software tools for data analysis and visualization.</p>
          <a className='text-[16px] text-[#1D6FF3] font-medium hover:text-green-600 duration-300' href="#">View Projects</a>
        </div>
      </div>
      <div className='px-[170px] flex items-center justify-between gap-[30px]'>
        <div className='py-[50px]'>
          <h2 className='text-[36px] font-bold text-[#4A4A4A] mb-[20px]'>Learn with Morphocode</h2>
          <p className='w-[500px] text-[18px] text-[#434A54] mb-[52px]'>Morphocode Academy is an online school that covers topics in data visualization, creative coding, and urban informatics.</p>
          <a href="#" className='text-[16px] font-medium text-[#1D6FF3] hover:text-green-600 duration-300'>Start Learning</a>
        </div>
        <img src={four} alt="four" width={600} height={600}/>
      </div>
      <div className='px-[170px]'>
        <h2 className='text-[24px] font-bold mb-[11px] text-[#4A4A4A]'>From the blog</h2>
        <ul className='flex flex-wrap justify-between gap-[30px]'>
          <li className='w-[300px]'>
            <img src={item1} alt="item" width={330} height={186}/>
            <div className='p-4 '>
              <strong className='text-[24px] block mb-[15px] text-[#4A4A4A] w-[205px]'>The power of interactive tools</strong>
              <p className='w-[237px] text-[#434A54] text-[15px]'>Tools augment our problem-solving capacity. We rely on them to expand our minds and provide ease, accuracy, and [...]</p>
            </div>
          </li>
          <li className='w-[300px]'>
            <img src={item2} alt="item" width={330} height={186}/>
            <div className='p-4 '>
              <strong className='text-[24px] block mb-[15px] text-[#4A4A4A] w-[205px]'>The making of Morphocode Explorer</strong>
              <p className='w-[237px] text-[#434A54] text-[15px]'>Over the last year, we’ve been working on a new web tool for interactive data exploration [...]</p>
            </div>
          </li>
          <li className='w-[300px]'>
            <img src={item3} alt="item" width={330} height={186}/>
            <div className='p-4 '>
              <strong className='text-[24px] block mb-[15px] text-[#4A4A4A] w-[205px]'>Urban performance measures</strong>
              <p className='w-[237px] text-[#434A54] text-[15px]'>Urban performance measures help communities make informed decisions and measure results against goals. [...]</p>
            </div>
          </li>
          <li className='w-[300px]'>
            <img src={item4} alt="item" width={330} height={186}/>
            <div className='p-4 '>
              <strong className='text-[24px] block mb-[15px] text-[#4A4A4A] w-[205px]'>The 5-minute walk</strong>
              <p className='w-[237px] text-[#434A54] text-[15px]'>The five-minute walk, also known as the “pedestrian shed” is considered to be the distance people are willing [...]</p>
            </div>
          </li>
          <li className='w-[300px]'>
            <img src={item5} alt="item" width={330} height={186}/>
            <div className='p-4 '>
              <strong className='text-[24px] block mb-[15px] text-[#4A4A4A] w-[205px]'>Location + time: urban data visualization</strong>
              <p className='w-[237px] text-[#434A54] text-[15px]'>The most common ways to visually organize information are based on location and time. In this interactive story, [...]</p>
            </div>
          </li>
          <li className='w-[300px]'>
            <img src={item6} alt="item" width={330} height={186}/>
            <div className='p-4 '>
              <strong className='text-[24px] block mb-[15px] text-[#4A4A4A] w-[205px]'>Morphocode in the Best American Infographics</strong>
              <p className='w-[237px] text-[#434A54] text-[15px]'>We are extremely happy to be included in The Best American Infographics. The third volume in the series [...]</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='px-[170px] bg-[#EEEEEE] py-[30px] flex items-center justify-center gap-[175px]'>
        <div>
        <h2 className='text-[36px] font-bold text-[#4A4A4A] mb-[18px]'>Start Learning</h2>
        <p className='w-[463px] text-[#434A54] text-[18px]'>Get the latest articles, tutorials, and free resources from Morphocode</p>
        </div>
        <div className='relative'>
          <input className='bg-white w-full text-[#979797] outline-none hover:shadow-2xl font-medium text-[18px] py-[8px] px-[7px] pr-[130px]' type="text" placeholder='Enter your email'/>
          <button className='absolute right-0 top-0 w-[121px] py-[6px] bg-[#1D6FF3] border-[2px] border-[#1D6FF3] text-[18px] font-bold text-white hover:bg-transparent hover:border-[2px] duration-300 hover:text-[#1D6FF3]'>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default App
