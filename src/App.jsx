import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { projects, credentials, experiences } from "./data";

// Komponen Card yang Pintar Menghandle Gambar Broken
function ProjectCard({ project, onSelect }) {
  const [isError, setIsError] = useState(false);

  return (
    
    <motion.div 
      layout
      onClick={() => onSelect(project)}
      className="group cursor-pointer w-full"
    >
      <div className="w-full aspect-4/5 bg-slate-100 rounded-3xl relative border border-slate-100 overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:shadow-xl group-hover:border-pink-200">
        {/* Kalau link image ADA dan TIDAK ERROR, tampilkan gambar */}
        {project.image && !isError ? (
          <img 
            src={project.image} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            alt={project.title}
            onError={() => setIsError(true)} // <--- INI KUNCINYA: kalau error, state berubah
          />
        ) : (
          // Ini tampilan kalau gambarnya KOSONG atau BROKEN
          <div className="flex flex-col items-center justify-center text-center p-8 bg-[#FDF6F0]/50 w-full h-full">
            <motion.span 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl mb-3 block"
            >
              ✨
            </motion.span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-serif italic leading-loose">
              Documentation <br/> <span className="text-pink-300">coming soon</span>
            </p>
          </div>
        )}
      </div>
      {/* Info Project di Bawah Gambar */}
      <div className="mt-5 px-2">
      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-300 block mb-1">
    {project.year || "Year Unknown"}
  </span>
        <h3 className="text-sm font-semibold tracking-tight text-slate-800 group-hover:text-pink-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-medium">
          {project.tech}
        </p>
      </div>
    </motion.div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Logic scroll taruh di sini (Top Level)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    // Background lembut creamy
    <div className="min-h-screen bg-[#FDF6F0] text-slate-800 font-sans selection:bg-pink-200 relative">
      
      {/* Progress Bar - Fixed di atas */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-pink-300 z-200 origin-[0%]"
        style={{ scaleX }} 
      />

      {/* Navbar Minimalis */}
      <nav className="flex justify-between items-center px-10 py-8 relative z-10">
        <div className="text-2xl font-serif italic font-semibold tracking-tight text-slate-900">
          Esterlita<span className="text-pink-400">.</span>
        </div>
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
          <a href="#work" className="hover:text-pink-400 transition-colors">Work</a>
          <a href="#the-story" className="hover:text-pink-400 transition-colors">The Story</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Postscript</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 pb-32 px-6 text-center">
        
        {/* Label Kecil dengan Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 px-4 py-1 border border-pink-200 rounded-full text-[10px] uppercase tracking-[0.3em] text-pink-400 font-bold bg-white/50"
        >
          Created to Create
        </motion.div>

        {/* Judul Utama yang Elegant */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9]"
        >
          Little Pieces, <br />
          <span className="font-serif italic text-slate-400 font-light">One Big</span> 
          <motion.span
            whileHover={{ scale: 1.1, color: "#F472B6",
              textShadow: "0px 0px 8px rgba(244, 114, 182, 0.6)"}} 
            className="text-pink-400 italic font-serif cursor-pointer inline-block transition-all">Story.</motion.span>
        </motion.h1>

        {/* Deskripsi Singkat */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-slate-500 max-w-md text-sm md:text-base leading-relaxed font-light tracking-wide mx-auto"
        >
          Hi, I'm <span className="text-pink-400 font-serif italic font-medium">Esterlita.</span><br /><br />
          A <span className="text-slate-600 font-medium italic">student of life</span>, gathering little pieces of inspiration and turning them into
          <span classname="text-slate-600 font-medium">something meaningful.</span>
          <br /><br />
          I believe every project is a <span className="text-pink-300/80 font-medium">gift</span>, and I'm here to build things that reflect a 
          <span className="text-slate-600 font-medium italic underline decoration-pink-200 underline-offset-4"> much bigger design</span>.
        </motion.p>

        {/* Tombol yang Gemes & Elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <button
          onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10 text-xs tracking-widest uppercase">Explore My World</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-20%] animate-bounce text-pink-300">
            ↓
            </span>
          </button>
        </motion.div>
              {/* Scroll Indicator - Taruh di bawah tombol Explore */}
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
>
  {/* Tulisan kecil banget */}
  <span className="text-[8px] uppercase tracking-[0.4em] text-slate-300 font-bold">
    Scroll
  </span>
  
  {/* Garis yang gerak animasinya (Napas) */}
  <div className="w-px h-12 bg-linear-to-b from-pink-200 to-transparent relative overflow-hidden">
    <motion.div 
      animate={{ 
        y: [0, 48, 0], // Gerak dari atas ke bawah terus balik lagi
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-0 left-0 w-full h-1/3 bg-pink-400"
    />
  </div>
</motion.div>
      </main>

      {/* Portfolio Section */}
      <section id="work" className="px-10 py-20 bg-white">
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl font-serif italic">The Collection</h2>
      
      {/* Tab Menu Gemes */}
      <div className="flex justify-center gap-8 mt-8 border-b border-slate-100 pb-4">
        {['all', 'digital', 'art'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative ${
              activeTab === tab ? 'text-pink-400' : 'text-slate-300 hover:text-slate-500'
            }`}
          >
            {tab === 'all' ? 'All Works' : tab === 'digital' ? 'Digital Crafts' : 'Handmade Soul'}
            {activeTab === tab && (
              <motion.div layoutId="underline" className="absolute -bottom-4.25 left-0 right-0 h-0.5 bg-pink-400" />
            )}
          </button>
        ))}
      </div>
    </div>

    {/* Grid Gallery dengan Filter */}
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
 
  {projects
    .filter(p => activeTab === 'all' || p.category === activeTab)
    .map((project) => (
      <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
    ))}
</motion.div>
  </div>
</section>

{/* Experience & Credentials Section */}
<section id="the-story" className="px-10 py-24 bg-[#FDF6F0]">
  <div className="max-w-4xl mx-auto">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      
      {/* Kolom Kiri: Experience */}
      <div>
        <h2 className="text-2xl font-serif italic mb-2 text-slate-800">Chapters</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-10 ml-1">
    Tracing the growth
  </p>
        <div className="space-y-12">
          
          {/* Import data experiences dari data.js */}
          {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l border-pink-100 hover:border-pink-300 transition-colors duration-500">
              {/* Titik indikator, lebih terang kalau masih 'Present' */}
              <div className={`absolute w-3 h-3 ${exp.isCurrent ? 'bg-pink-300' : 'bg-pink-100'} rounded-full -left-[6.5px] top-1 border-2 border-white`}></div>
              
              <span className={`text-[10px] tracking-[0.2em] font-bold uppercase ${exp.isCurrent ? 'text-pink-400' : 'text-slate-300'}`}>
                {exp.period}
              </span>
              
              <h3 className="text-sm font-bold mt-1 uppercase tracking-tight text-slate-800">{exp.role}</h3>
              <p className="text-xs text-slate-500 italic mt-1 font-serif">{exp.company}</p>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

{/* Kolom Kanan: Credentials */}
<div>
  <h2 className="text-3xl font-serif italic mb-2 text-slate-800">Growth Gallery</h2>
  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-10 ml-1">
    Footnotes of Growth
  </p>
  
  <div className="grid grid-cols-1 gap-5">
  {credentials.map((item) => (
    <motion.a 
      key={item.id}

      href={item.url} // <--- URL tujuan
      target="_blank" // <--- Buka di tab baru
      rel="noopener noreferrer"
      whileHover={{ x: 8, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      className="p-5 bg-white/40 border border-white/60 rounded-3xl flex items-center justify-center gap-5 transition-all duration-300 group cursor-pointer"
    >
      <div className="w-12 h-12 bg-[#FDF6F0] rounded-2xl flex items-center justify-center text-xl filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
        {item.icon}
      </div>
      
      <div className="flex-1">
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 leading-tight group-hover:text-pink-400 transition-colors">
          {item.title}
        </h4>
        <p className="text-[10px] text-slate-400 font-serif italic mt-1 tracking-wide group-hover:text-slate-600">
          Recognized by {item.issuer}
        </p>
      </div>

      {/* Icon panah kecil penanda bisa diklik */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-pink-300 text-xs">
        ↗
      </div>
    </motion.a>
  ))}
</div>

  {/* Quote Penutup yang Lowkey Christian & Puitis */}
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="mt-12 p-8 bg-white/40 border-l-2 border-pink-200 rounded-r-3xl italic font-serif text-slate-500 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-2 text-pink-100 text-4xl select-none opacity-50">"</div>
    <p className="text-sm leading-relaxed relative z-10">
      "For I know the plans I have for you... plans to give you hope and a future."
      <br />
      <span className="text-[10px] uppercase tracking-widest font-sans font-bold mt-4 block text-pink-400 not-italic opacity-60">
        Jeremiah 29:11
      </span>
    </p>
  </motion.div>
</div>

    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="px-10 py-32 bg-white relative overflow-hidden">
  
  {/* Hiasan abstrak biar makin aesthetic */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>

  <div className="max-w-2xl mx-auto text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-serif italic text-slate-800">Postscript<span className="text-pink-400">.</span></h2>
      <p className="mt-6 text-slate-500 font-light leading-relaxed max-w-lg mx-auto italic text-sm md:text-base">
  "Every great story starts with a <span className="text-pink-400 font-semibold">single note</span>. Whether it’s a new venture or just a kind hello, I’m ready to <span className="text-slate-800 font-medium">build something beautiful</span> with you."
</p>

      {/* Form Input yang Aesthetic */}
<motion.form 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="mt-16 max-w-md mx-auto space-y-4"
  action="https://api.web3forms.com/submit" // Contoh pakai Web3Forms
  method="POST"
>
  {/* Hidden Access Key - Kamu nanti daftar di web3forms.com (Gratis) */}
  <input type="hidden" name="access_key" value="23d1a325-7ebf-4ee5-8b08-77c6d1c9a8ad" />

  <div className="group relative">
    <input 
      type="text" 
      name="name"
      placeholder="Your Name" 
      className="w-full px-6 py-4 bg-[#FDF6F0]/50 border border-pink-100 rounded-[20px] outline-none focus:border-pink-300 focus:bg-white transition-all text-sm font-light italic"
      required
    />
  </div>

  <div className="group relative">
    <input 
      type="email" 
      name="email"
      placeholder="Your Email Address" 
      className="w-full px-6 py-4 bg-[#FDF6F0]/50 border border-pink-100 rounded-[20px] outline-none focus:border-pink-300 focus:bg-white transition-all text-sm font-light italic"
      required
    />
  </div>

  <div className="group relative">
    <textarea 
      name="message"
      placeholder="Drop a little note here..." 
      rows="4"
      className="w-full px-6 py-4 bg-[#FDF6F0]/50 border border-pink-100 rounded-[25px] outline-none focus:border-pink-300 focus:bg-white transition-all text-sm font-light italic resize-none"
      required
    ></textarea>
  </div>

  <motion.button 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full py-4 bg-slate-900 text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-pink-400 transition-colors shadow-lg shadow-pink-100"
  >
    Send My Story
  </motion.button>
</motion.form>

{/* Divider Halus */}
<div className="flex items-center justify-center gap-4 my-12 opacity-20">
  <div className="h-1px w-12 bg-slate-400"></div>
  <span className="text-[10px] uppercase tracking-widest">Or find me on</span>
  <div className="h-1px w-12 bg-slate-400"></div>
</div>
     {/* Tombol Kontak ala Snail Mail - Dikecilkan & Dipolish */}
<div className="mt-8 flex flex-row justify-center items-center gap-4">
  
  {/* Email Button - More Compact */}
  <a 
    href="mailto:nugraheniesterlita@gmail.com"
    className="group flex items-center gap-3 px-5 py-2.5 bg-[#FDF6F0] border border-pink-100 rounded-full hover:bg-pink-400 hover:text-white transition-all duration-500"
  >
    <span className="text-base group-hover:scale-110 transition-transform">✉️</span>
    <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-slate-600 group-hover:text-white">Direct Mail</span>
  </a>

  {/* LinkedIn Button - More Compact */}
  <a 
    href="https://linkedin.com/in/esterlitanp"
    target="_blank"
    className="group flex items-center gap-3 px-6 py-3 border border-slate-100 rounded-full hover:border-pink-200 transition-all duration-500 bg-white/50"
  >
    <span className="text-base group-hover:scale-110 transition-transform">🔗</span>
    <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-slate-400 group-hover:text-pink-400">LinkedIn</span>
  </a>

      </div>

      <div className="mt-20">
        <p className="text-[10px] text-slate-300 uppercase tracking-[0.5em]">Based in Indonesia • Ready to weave new stories together</p>
      </div>
    </motion.div>
  </div>
</section>

{/* Footer Utama di Paling Bawah Halaman */}
<footer className="py-16 border-t border-pink-100 bg-white/80 backdrop-blur-md relative z-10 mt-20">
        <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright & Nama */}
          <div className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-medium text-center md:text-left">
            © 2026 • Esterlita Nugraheni Praharningtyas
          </div>
          
          {/* Status Lucu yang tadi, tapi sekarang di dalam Footer (Gak Melayang Lagi) */}
          <div className="flex items-center gap-3 px-5 py-2.5 bg-[#FDF6F0] rounded-full border border-pink-100 shadow-sm transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Current Mood: Drafting the next big chapter ✨
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="https://instagram.com/esterlitanp" target="_blank" className="text-slate-400 hover:text-pink-400 transition-colors">Instagram</a>
            <a href="https://behance.net/esterlitanp" target="_blank" className="text-slate-400 hover:text-pink-400 transition-colors">Behance</a>
          </div>
        </div>
        
        {/* Kalimat Penutup Kecil di Bawah Banget */}
        <div className="text-center mt-12 opacity-60 text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-slate-500 font-medium">
  Made with Love, <span className="text-pink-300">Caffeine</span>, and a Purpose 🕊️
</div>
      </footer>

{/* Modal Pop-up */}
{selectedProject && (
  <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
    {/* Overlay Hitam Transparan */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setSelectedProject(null)}
      className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
    />
    
    {/* Box Modal */}
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
    >
      {/* Foto di Kiri */}
<div className="w-full md:w-1/2 h-72 md:h-auto bg-white flex items-center justify-center overflow-hidden">
  {selectedProject.image ? (
    <img src={selectedProject.image} className="w-full h-full object-contain md:object-contain p-4 md:p-0" alt={selectedProject.title} />
  ) : (
    <div className="text-center">
      <p className="font-serif italic text-pink-200">Image under curation</p>
    </div>
  )}
</div>

      {/* Detail di Kanan */}
      <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative">
        <button 
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 md:top-6 md:right-6 text-slate-400 hover:text-slate-800 p-2"
        >
          ✕
        </button>
        <span className="text-[10px] uppercase tracking-widest text-pink-400 font-bold">Project Detail</span>
        <h2 className="text-2xl font-serif italic mt-2 text-slate-800">{selectedProject.title}</h2>
        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
          {selectedProject.desc}
        </p>
        <div className="mt-6">
          <p className="text-[10px] uppercase text-slate-300 font-bold tracking-tighter">Technologies</p>
          <p className="text-xs text-slate-600 mt-1">{selectedProject.tech}</p>
        </div>

        {/* Link Behance */}
        {/* Tombol Link yang Otomatis Pinter */}
        <a 
          href={selectedProject.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 hover:text-pink-600 transition-colors group/link"
>
  {/* Dia bakal manggil linkText dari data.js, kalau lupa diisi, default-nya "View Project" */}
        <span>{selectedProject.linkText || "View Project"}</span>
        <span className="group-hover/link:translate-x-1 transition-transform inline-block">↗</span>
</a>
        
      </div>
    </motion.div>
  </div>
)}

    </div>
    
  );
}


export default App;