import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    { name: 'Fast Food', icon: '🍔', count: '120+ Places' },
    { name: 'Healthy', icon: '🥗', count: '80+ Places' },
    { name: 'Traditional', icon: '🍲', count: '45+ Places' },
    { name: 'Desserts', icon: '🍰', count: '30+ Places' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] overflow-x-hidden">
      {/* --- HERO SECTION WITH CURVE --- */}
      <header className="relative bg-[#1F2937] pt-10 pb-32 lg:pb-48">
        <nav className="container mx-auto px-6 flex justify-between items-center relative z-10">
          <div className="text-2xl font-black text-white tracking-tighter">
            DASH<span className="text-[#FF7A00]">IT</span>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-white font-bold px-6 py-2">Login</Link>
            <Link to="/register" className="bg-[#FF7A00] text-white font-bold px-6 py-3 rounded-2xl hover:bg-[#E96B00] transition-all">
              Sign Up
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-6 mt-16 flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Deliciousness <br /> 
              <span className="text-[#FF7A00]">Delivered</span> Fast.
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              The best meals from your favorite local restaurants, delivered straight to your door in minutes.
            </p>
            
            {/* Floating Search Bar */}
            <div className="bg-white p-2 rounded-[2rem] shadow-2xl flex items-center max-w-md mx-auto lg:mx-0">
              <span className="ml-4 text-xl">📍</span>
              <input 
                type="text" 
                placeholder="Enter delivery address..." 
                className="w-full p-4 outline-none text-[#1F2937] font-medium"
              />
              <button className="bg-[#1F2937] text-white px-8 py-4 rounded-[1.8rem] font-bold hover:bg-[#FF7A00] transition-all">
                Search
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
             <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF7A00] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
             <div className="relative z-10 p-4 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" 
                  alt="Food" 
                  className="rounded-[2.5rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
             </div>
          </div>
        </div>

        {/* --- THE WAVE CURVE --- */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full h-[100px]">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* --- CATEGORIES SECTION --- */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group border border-transparent hover:border-[#FFE2C6]">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{cat.icon}</div>
              <h3 className="text-xl font-black text-[#1F2937]">{cat.name}</h3>
              <p className="text-[#6B7280] text-sm font-medium mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED SECTION WITH SECONDARY CURVE --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-[#1F2937]">Popular near you</h2>
            <p className="text-[#6B7280] font-medium mt-2">The highest rated picks in your area.</p>
          </div>
          <button className="hidden md:block text-[#FF7A00] font-bold text-lg hover:underline underline-offset-8 decoration-2">
            View all 200+ restaurants →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600&h=400&sig=${item}`} 
                  alt="Restaurant" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-black text-[#FF7A00]">
                  ⭐ 4.8
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-[#1F2937]">The Burger Palace</h4>
                <p className="text-[#6B7280] font-medium mt-2">Burgers • American • $$</p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-50">
                  <span className="bg-[#FFE2C6] text-[#FF7A00] text-xs font-black px-3 py-1 rounded-full">20-30 min</span>
                  <span className="text-[#6B7280] text-xs font-bold">Free Delivery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA FOOTER WAVE --- */}
      <section className="bg-[#FF7A00] py-20 relative mt-20">
        <div className="absolute top-[-50px] left-0 w-full rotate-180">
           <svg viewBox="0 0 1440 320" className="w-full h-[50px] fill-[#FF7A00]">
              <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96V320H0Z"></path>
           </svg>
        </div>
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-black mb-6">Ready to start?</h2>
          <p className="text-white/80 text-xl font-medium mb-10 max-w-xl mx-auto">
            Order from the best restaurants in your city and get it delivered in record time.
          </p>
          <Link to="/register" className="bg-[#1F2937] text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:scale-105 transition-all inline-block shadow-2xl">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;