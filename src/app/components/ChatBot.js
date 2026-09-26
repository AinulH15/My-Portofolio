'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { findAnswer, suggestedQuestions } from './chatbotData'

export default function ChatBot() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: language === 'en' 
        ? "Hi! 👋 I'm Ainul's virtual assistant. Ask me anything about her skills, projects, or experience!"
        : "Hai! 👋 Saya asisten virtual Ainul. Tanyakan apa saja tentang keahlian, proyek, atau pengalamannya!",
      isBot: true
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto scroll ke bawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Update welcome message saat bahasa berubah
  useEffect(() => {
    setMessages([
      {
        id: Date.now(),
        text: language === 'en' 
          ? "Hi! 👋 I'm Ainul's virtual assistant. Ask me anything about her skills, projects, or experience!"
          : "Hai! 👋 Saya asisten virtual Ainul. Tanyakan apa saja tentang keahlian, proyek, atau pengalamannya!",
        isBot: true
      }
    ])
  }, [language])

  const handleSend = (messageText) => {
    const text = messageText || input.trim()
    if (!text) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: text,
      isBot: false
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(text, language)
      const botMessage = {
        id: Date.now() + 1,
        text: answer,
        isBot: true
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        text: language === 'en' 
          ? "Chat cleared! Ask me anything 😊"
          : "Chat dibersihkan! Tanyakan apa saja 😊",
        isBot: true
      }
    ])
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-[#FF9AA2] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl border-2 border-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? '✕' : '💬'}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[90] w-[90vw] max-w-sm h-[500px] bg-white rounded-2xl shadow-2xl border-4 border-[#FF9AA2] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#FF9AA2] p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg">
                  🐱
                </div>
                <div>
                  <p className="text-white font-mono-pixel font-bold text-sm">
                    {language === 'en' ? "Ainul's Assistant" : "Asisten Ainul"}
                  </p>
                  <p className="text-white/80 text-[10px] font-mono-pixel flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full"></span>
                    {language === 'en' ? 'Online' : 'Online'}
                  </p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-white text-xs font-mono-pixel hover:text-[#1A1A1D] transition-colors"
                title="Clear chat"
              >
                🔄
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#FFF8E7]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-xs font-mono-pixel whitespace-pre-line ${
                      msg.isBot
                        ? 'bg-white text-[#1A1A1D] rounded-bl-sm shadow-sm border border-[#F0E8DC]'
                        : 'bg-[#FF9AA2] text-white rounded-br-sm shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border border-[#F0E8DC] flex gap-1">
                    <span className="w-2 h-2 bg-[#FF9AA2] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-[#FF9AA2] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-[#FF9AA2] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 1 && (
              <div className="px-3 py-2 bg-[#FFF8E7] border-t border-[#F0E8DC]">
                <p className="text-[9px] text-[#8B7355] font-mono-pixel mb-2">
                  {language === 'en' ? 'Try asking:' : 'Coba tanyakan:'}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions[language].slice(0, 3).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-[9px] font-mono-pixel px-2 py-1 bg-white border border-[#FF9AA2]/50 rounded-full text-[#1A1A1D] hover:bg-[#FF9AA2] hover:text-white transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 bg-white border-t border-[#F0E8DC] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'en' ? 'Ask me anything...' : 'Tanyakan apa saja...'}
                className="flex-1 px-3 py-2 text-xs font-mono-pixel border-2 border-[#F0E8DC] rounded-full focus:border-[#FF9AA2] focus:outline-none transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full bg-[#FF9AA2] text-white flex items-center justify-center hover:bg-[#d48484] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}