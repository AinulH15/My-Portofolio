'use client'

import { motion } from 'framer-motion'

export default function ResearchSection() {
  return (
    <motion.section 
      id="research" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-16 md:mt-24"
    >
      <div className="text-center mb-8 md:mb-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
          <span className="text-[#E99B9B] text-[10px] md:text-xs font-mono-pixel tracking-wide">✦ RESEARCH ✦</span>
          <div className="w-8 md:w-10 h-px bg-[#E99B9B]"></div>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-[#2C2C2C] tracking-tight font-mono-pixel">
          Research <span className="text-[#E99B9B]">Experience</span>
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#F0E8DC] relative overflow-hidden">
          {/* Decorative cat */}
          <div className="absolute -top-2 -right-2 text-4xl opacity-20 rotate-12">🐱</div>
          
          {/* Timeline style */}
          <div className="relative pl-6 md:pl-8 border-l-2 border-[#E99B9B]">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-[#E99B9B] rounded-full"></div>
            
            <div className="mb-2">
              <span className="inline-block bg-[#E99B9B]/20 text-[#E99B9B] text-[10px] font-mono-pixel px-2 py-0.5 rounded-full">
                2024 - 2025
              </span>
            </div>
            
            <h3 className="text-lg md:text-xl font-black text-[#2C2C2C] mb-3 font-mono-pixel">
              Implementation of Clean Architecture for Digital Archive Management
            </h3>
            
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed mb-4">
              This research focused on applying Clean Architecture principles to develop a 
              digital archive management system for land documents. The study demonstrated 
              how separating concerns through layers (Entities, Use Cases, Interface Adapters, 
              Frameworks) improves maintainability, testability, and scalability of the application.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[10px] bg-[#F5F0E8] px-2 py-1 rounded text-[#8B7355] font-mono-pixel">Clean Architecture</span>
              <span className="text-[10px] bg-[#F5F0E8] px-2 py-1 rounded text-[#8B7355] font-mono-pixel">Java Spring Boot</span>
              <span className="text-[10px] bg-[#F5F0E8] px-2 py-1 rounded text-[#8B7355] font-mono-pixel">Digital Archive</span>
              <span className="text-[10px] bg-[#F5F0E8] px-2 py-1 rounded text-[#8B7355] font-mono-pixel">Software Engineering</span>
            </div>
            
            <div className="bg-[#F5F0E8] p-4 rounded-lg mt-4">
              <p className="text-[#8B7355] text-xs md:text-sm font-mono-pixel italic">
                "This research contributed to understanding how Clean Architecture can be 
                effectively implemented in academic information systems, resulting in a 
                more maintainable and scalable application structure."
              </p>
            </div>
          </div>
          
          {/* Additional research highlight */}
          <div className="mt-6 pt-4 border-t border-[#F0E8DC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#E99B9B] text-sm">📄</span>
              <span className="text-[10px] text-[#8B7355] font-mono-pixel">Research Paper Available</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-[#E99B9B] font-mono-pixel">✦ Under Review ✦</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}