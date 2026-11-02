'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { findAnswer, suggestedQuestions } from './chatbotData'

const WELCOME_MESSAGES = {
  en: "Hi! 👋 I'm Ainul's virtual assistant. Ask me anything about her skills, projects, or experience!",
  id: "Hai! 👋 Saya asisten virtual Ainul. Tanyakan apa saja tentang keahlian, proyek, atau pengalamannya!"
}

const CLEAR_MESSAGES = {
  en: "Chat cleared! Ask me anything 😊",
  id: "Chat dibersihkan! Tanyakan apa saja 😊"
}

const LANG_SWITCH_MESSAGES = {
  en: "Language switched to English 🇬🇧. Ask me anything!",
  id: "Bahasa diubah ke Indonesia 🇮🇩. Tanyakan apa saja!"
}

export default function ChatBot() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: WELCOME_MESSAGES[language], isBot: true }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const typingTimer = useRef(null)
  const isFirstRender = useRef(true)

  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isTyping])

  // Handle perubahan bahasa (skip di render pertama)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // Cancel pending typing timer
    if (typingTimer.current) {
      clearTimeout(typingTimer.current)
      typingTimer.current = null
    }
    setIsTyping(false)
    setMessages([
      { id: Date.now(), text: LANG_SWITCH_MESSAGES[language], isBot: true }
    ])
  }, [language])

  // Cleanup timer saat unmount
  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current)
    }
  }, [])

  // Auto focus input saat chat dibuka
  useEffect(() => {
    if (isOpen) {
      // delay sedikit untuk menunggu animasi selesai
      const t = setTimeout(() => inputRef.current?.focus(), 300)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  const handleSend = useCallback((messageText) => {
    const text = (messageText || input).trim()
    if (!text) return

    // Add user message
    setMessages((prev) => [...prev, { id: Date.now(), text, isBot: false }])
    setInput('')
    setIsTyping(true)

    // Cancel timer sebelumnya (hindari race condition)
    if (typingTimer.current) clearTimeout(typingTimer.current)

    // Capture bahasa saat user kirim (bukan saat timer selesai)
    const langAtSend = language

    typingTimer.current = setTimeout(() => {
      const answer = findAnswer(text, langAtSend)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: answer, isBot: true }
      ])
      setIsTyping(false)
      typingTimer.current = null
    }, 800)
  }, [input, language])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    if (typingTimer.current) {
      clearTimeout(typingTimer.current)
      typingTimer.current = null
    }
    setIsTyping(false)
    setMessages([{ id: Date.now(), text: CLEAR_MESSAGES[language], isBot: true }])
  }

  // Tampilkan suggested questions hanya jika belum ada pesan user
  const hasUserMessaged = messages.some((m) => !m.isBot)

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
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
            className="fixed bottom-24 right-6 z-[90] w-[90vw] max-w-sm h-[500px] max-h-[calc(100vh-120px)] bg-white rounded-2xl shadow-2xl border-4 border-[#FF9AA2] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#FF9AA2] p-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg shrink-0">
                  🐱
                </div>
                <div className="min-w-0">
                  <p className="text-white font-mono-pixel font-bold text-sm truncate">
                    {language === 'en' ? "Ainul's Assistant" : 'Asisten Ainul'}
                  </p>
                  <p className="text-white/80 text-[10px] font-mono-pixel flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={clearChat}
                aria-label="Clear chat"
                className="text-white text-xs font-mono-pixel hover:text-[#1A1A1D] transition-colors shrink-0"
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
                    className={`max-w-[80%] p-3 rounded-2xl text-xs font-mono-pixel whitespace-pre-line break-words ${
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
                    <span
                      className="w-2 h-2 bg-[#FF9AA2] rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-[#FF9AA2] rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-[#FF9AA2] rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    ></span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {!hasUserMessaged && (
              <div className="px-3 py-2 bg-[#FFF8E7] border-t border-[#F0E8DC] shrink-0">
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
            <div className="p-3 bg-white border-t border-[#F0E8DC] flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={language === 'en' ? 'Ask me anything...' : 'Tanyakan apa saja...'}
                className="flex-1 px-3 py-2 text-xs font-mono-pixel border-2 border-[#F0E8DC] rounded-full focus:border-[#FF9AA2] focus:outline-none transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-[#FF9AA2] text-white flex items-center justify-center hover:bg-[#d48484] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}