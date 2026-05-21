'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { webinarService, WebinarRegistrationPayload } from '@/services/webinar.service'

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface CountdownState {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const EVENT_DATE = new Date('2026-06-20T09:00:00+07:00')
const SEED_COUNT = 47 // base registration count for social proof

const SPEAKERS = [
  {
    initials: 'NVH',
    name: 'TS. Nguyễn Văn Hùng',
    title: 'Giám đốc An ninh mạng',
    org: 'Tập đoàn Công nghệ Quốc gia',
    tag: '15+ năm kinh nghiệm',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    initials: 'TMK',
    name: 'ThS. Trần Minh Khoa',
    title: 'AI Security Researcher',
    org: 'Viện Nghiên cứu ATTT',
    tag: 'AI/ML Security Expert',
    gradient: 'from-purple-500 to-violet-700',
  },
  {
    initials: 'LPT',
    name: 'Bà Lê Phương Thảo',
    title: 'SOC Manager',
    org: 'Ngân hàng Thương mại Hàng đầu',
    tag: 'Chuyên gia SOC Operations',
    gradient: 'from-orange-400 to-rose-500',
  },
]

const AGENDA = [
  { time: '09:00 – 09:10', title: 'Khai mạc & Giới thiệu sự kiện', desc: 'Chào mừng và tổng quan chương trình', speaker: null },
  { time: '09:10 – 09:45', title: 'Tổng quan AI trong An ninh mạng 2026', desc: 'Landscape mối đe dọa hiện tại và vai trò của AI trong phòng thủ chủ động', speaker: 'TS. Nguyễn Văn Hùng' },
  { time: '09:45 – 10:20', title: 'Kiến trúc AI SOC: Từ lý thuyết đến thực tiễn', desc: 'Deep dive vào AI-powered SIEM, Automated Threat Hunting, LLM-based Alert Triage', speaker: 'ThS. Trần Minh Khoa' },
  { time: '10:20 – 10:30', title: '☕ Giải lao & Networking', desc: 'Kết nối với cộng đồng chuyên gia', speaker: null },
  { time: '10:30 – 11:05', title: 'Case Study: AI SOC tại Ngân hàng Việt Nam', desc: 'Hành trình triển khai thực tế: thách thức, giải pháp và kết quả đạt được', speaker: 'Bà Lê Phương Thảo' },
  { time: '11:05 – 11:25', title: 'Q&A với các chuyên gia', desc: 'Đặt câu hỏi trực tiếp và nhận tư vấn từ panel diễn giả', speaker: null },
  { time: '11:25 – 11:30', title: 'Tổng kết & Bế mạc', desc: 'Key takeaways và các bước tiếp theo', speaker: null },
]

const BENEFITS = [
  { icon: '🧠', title: 'Nền tảng AI trong An ninh mạng', desc: 'Hiểu cách ML/DL phát hiện anomaly, phân loại mối đe dọa và dự đoán tấn công' },
  { icon: '⚡', title: 'Kiến trúc AI SOC hiện đại', desc: 'Khám phá mô hình từ SIEM thông minh đến SOAR tự động hóa hoàn toàn' },
  { icon: '🔍', title: 'Threat Detection tự động', desc: 'Pipeline phát hiện mối đe dọa độ chính xác cao, giảm false positive xuống <5%' },
  { icon: '🚀', title: 'Incident Response thông minh', desc: 'Tự động hóa phản ứng sự cố với Playbook AI và LLM-powered analysis' },
  { icon: '📊', title: 'Case Studies thực tế', desc: 'Học từ triển khai AI SOC tại các tổ chức tài chính và chính phủ Việt Nam' },
  { icon: '🗺️', title: 'Roadmap triển khai', desc: 'Lộ trình chuyển đổi từ SOC truyền thống sang AI SOC trong 6–18 tháng' },
]

const AUDIENCE = [
  'CISO & Security Directors',
  'SOC Managers & Analysts',
  'IT Security Engineers',
  'Threat Intelligence Analysts',
  'Network Security Engineers',
  'IT Managers & CTO',
  'Pentesters & Red Teamers',
  'Sinh viên CNTT & ATTT',
]

const FIELDS = [
  'Ngân hàng & Tài chính',
  'Công nghệ thông tin',
  'Viễn thông',
  'Chính phủ & Hành chính công',
  'Y tế',
  'Giáo dục',
  'Năng lượng & Tiện ích',
  'Sản xuất & Công nghiệp',
  'Thương mại điện tử & Bán lẻ',
  'Khác',
]

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
function pad(n: number) {
  return String(n).padStart(2, '0')
}

function useCountdown(target: Date): CountdownState {
  const [state, setState] = useState<CountdownState>({ days: '00', hours: '00', minutes: '00', seconds: '00' })

  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setState({ days: '00', hours: '00', minutes: '00', seconds: '00' })
        return
      }
      setState({
        days: pad(Math.floor(diff / 86400000)),
        hours: pad(Math.floor((diff % 86400000) / 3600000)),
        minutes: pad(Math.floor((diff % 3600000) / 60000)),
        seconds: pad(Math.floor((diff % 60000) / 1000)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return state
}

function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 min-w-[68px]">
      <span className="text-2xl font-black tabular-nums text-cyan-400 leading-none">{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">{label}</span>
    </div>
  )
}

// ─────────────────────────────────────────────
// Registration Form
// ─────────────────────────────────────────────
interface FormData {
  fullName: string
  company: string
  position: string
  email: string
  phone: string
  field: string
}

interface FormErrors {
  fullName?: string
  company?: string
  position?: string
  email?: string
  phone?: string
  field?: string
}

function RegistrationForm({ regCount }: { regCount: number }) {
  const [form, setForm] = useState<FormData>({ fullName: '', company: '', position: '', email: '', phone: '', field: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [apiError, setApiError] = useState('')

  function validate(): boolean {
    const errs: FormErrors = {}
    if (!form.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên'
    if (!form.company.trim()) errs.company = 'Vui lòng nhập đơn vị công tác'
    if (!form.position.trim()) errs.position = 'Vui lòng nhập chức vụ'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email không hợp lệ'
    if (!form.phone.trim() || !/^[0-9+\s\-()]{8,15}$/.test(form.phone.trim())) errs.phone = 'Số điện thoại không hợp lệ'
    if (!form.field) errs.field = 'Vui lòng chọn lĩnh vực'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setApiError('')
    try {
      await webinarService.register(form as WebinarRegistrationPayload)
      setSuccess(true)
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Đã xảy ra lỗi. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  function field(
    id: keyof FormData,
    label: string,
    type: string = 'text',
    placeholder: string = '',
  ) {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={form[id]}
          onChange={(e) => {
            setForm((p) => ({ ...p, [id]: e.target.value }))
            if (errors[id]) setErrors((p) => ({ ...p, [id]: undefined }))
          }}
          className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-800 bg-slate-50 outline-none transition focus:bg-white focus:ring-2 focus:ring-cyan-400/40 ${
            errors[id] ? 'border-red-400' : 'border-slate-200 focus:border-cyan-400'
          }`}
        />
        {errors[id] && <p className="text-xs text-red-500">{errors[id]}</p>}
      </div>
    )
  }

  if (success) {
    return (
      <div className="text-center py-8 px-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Đăng ký thành công!</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Cảm ơn bạn đã đăng ký tham dự <strong>Webinar AI SOC 2026</strong>.<br />
          Link tham dự sẽ được gửi qua email trước ngày sự kiện.
        </p>
        <p className="mt-4 text-2xl font-black text-cyan-600">🎉 Hẹn gặp bạn 20/06/2026!</p>
      </div>
    )
  }

  return (
    <>
      <div className="text-center mb-5 pb-4 border-b border-slate-100">
        <h3 className="text-lg font-extrabold text-slate-800">🎯 Đăng ký tham dự miễn phí</h3>
        <div className="flex items-center justify-center gap-1.5 mt-1.5 text-sm text-slate-500">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {regCount + SEED_COUNT} người đã đăng ký
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        {field('fullName', 'Họ và tên', 'text', 'Nguyễn Văn A')}
        {field('company', 'Đơn vị công tác', 'text', 'Tên công ty / tổ chức')}
        {field('position', 'Chức vụ', 'text', 'CISO, Security Manager, ...')}
        {field('email', 'Email', 'email', 'email@congty.com')}
        {field('phone', 'Số điện thoại', 'tel', '0901 234 567')}

        <div className="space-y-1">
          <label htmlFor="field" className="block text-sm font-semibold text-slate-700">
            Lĩnh vực <span className="text-red-500">*</span>
          </label>
          <select
            id="field"
            value={form.field}
            onChange={(e) => {
              setForm((p) => ({ ...p, field: e.target.value }))
              if (errors.field) setErrors((p) => ({ ...p, field: undefined }))
            }}
            className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-800 bg-slate-50 outline-none transition focus:bg-white focus:ring-2 focus:ring-cyan-400/40 ${
              errors.field ? 'border-red-400' : 'border-slate-200 focus:border-cyan-400'
            }`}
          >
            <option value="">-- Chọn lĩnh vực --</option>
            {FIELDS.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          {errors.field && <p className="text-xs text-red-500">{errors.field}</p>}
        </div>

        {apiError && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
            {apiError}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl font-bold text-white text-base mt-1 transition-all
            bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500
            shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5
            disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? '⏳ Đang xử lý...' : '🚀 Đăng ký tham dự ngay'}
        </button>

        <p className="text-center text-xs text-slate-400 pt-1">
          🔒 Thông tin được bảo mật tuyệt đối • Miễn phí 100%
        </p>
      </form>
    </>
  )
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function WebinarPage() {
  const countdown = useCountdown(EVENT_DATE)
  const [regCount, setRegCount] = useState(0)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    webinarService.getCount().then(setRegCount).catch(() => {})
  }, [])

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#050c1a] text-slate-100 font-sans">
      {/* Background grid pattern */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#050c1a]/90 backdrop-blur-xl border-b border-white/5 h-16 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-base">🛡️</div>
            <span className="font-bold text-base bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              ICS • AI SOC 2026
            </span>
          </Link>
          <button
            onClick={scrollToForm}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90 transition"
          >
            Đăng ký ngay
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-16 relative overflow-hidden">
        {/* Radial glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-start">

            {/* Left: Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Live Webinar • Miễn phí 100%
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-5">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  AI SOC:
                </span>{' '}
                Tương lai của<br />
                Trung tâm Điều hành<br />
                An ninh mạng Thông minh
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
                Khám phá cách Trí tuệ nhân tạo đang cách mạng hóa Security Operations Center —
                từ phát hiện mối đe dọa tự động đến phản ứng sự cố thông minh trong thời gian thực.
              </p>

              {/* Event meta */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: '📅', label: 'Thời gian', value: 'Thứ Sáu, 20/06/2026', color: 'bg-cyan-500/10 border-cyan-500/20' },
                  { icon: '⏰', label: 'Giờ tổ chức', value: '09:00 – 11:30 SA', color: 'bg-violet-500/10 border-violet-500/20' },
                  { icon: '💻', label: 'Hình thức', value: 'Online • Zoom', color: 'bg-orange-500/10 border-orange-500/20' },
                ].map((m) => (
                  <div key={m.label} className={`flex items-center gap-3 ${m.color} border rounded-xl px-4 py-2.5`}>
                    <span className="text-xl">{m.icon}</span>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">{m.label}</div>
                      <div className="text-sm font-semibold">{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Countdown */}
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Sự kiện diễn ra sau</p>
                <div className="flex gap-3">
                  <CountdownBox value={countdown.days} label="Ngày" />
                  <CountdownBox value={countdown.hours} label="Giờ" />
                  <CountdownBox value={countdown.minutes} label="Phút" />
                  <CountdownBox value={countdown.seconds} label="Giây" />
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white
                  bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500
                  shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 lg:hidden"
              >
                🚀 Đăng ký tham dự ngay
              </button>
            </div>

            {/* Right: Registration Form */}
            <div ref={formRef} className="lg:sticky lg:top-20">
              <div className="bg-white rounded-2xl p-7 shadow-2xl ring-1 ring-cyan-500/20">
                <RegistrationForm regCount={regCount} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-white/5" />

      {/* ── About ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Về sự kiện
            </span>
            <h2 className="text-3xl lg:text-4xl font-black mb-5">Tại sao AI SOC là tương lai của an ninh mạng?</h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                Trong bối cảnh các mối đe dọa an ninh mạng ngày càng tinh vi, các Security Operations Center
                truyền thống đang phải xử lý hàng triệu cảnh báo mỗi ngày. Tỷ lệ dương tính giả cao, thiếu hụt
                nhân lực chuyên môn và phản ứng chậm đang tạo ra những khoảng trống nguy hiểm.
              </p>
              <p>
                <strong className="text-white">AI SOC</strong> là câu trả lời. Bằng cách ứng dụng Machine Learning,
                Deep Learning và Large Language Models, AI SOC có thể tự động phát hiện, phân loại và phản ứng với
                mối đe dọa trong thời gian thực — nhanh hơn gấp 100 lần so với phân tích thủ công.
              </p>
              <p>
                Webinar này mang đến cái nhìn toàn diện về kiến trúc AI SOC hiện đại, các use case thực tế và
                roadmap triển khai phù hợp với đặc thù của tổ chức Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* ── Benefits ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Bạn sẽ học được gì
          </span>
          <h2 className="text-3xl lg:text-4xl font-black mb-8">Kiến thức và kỹ năng thực chiến</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-slate-800/50 border border-white/5 rounded-2xl p-5 hover:border-cyan-500/30 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-base mb-2">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* ── Speakers ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Diễn giả
          </span>
          <h2 className="text-3xl lg:text-4xl font-black mb-8">Gặp gỡ các chuyên gia hàng đầu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SPEAKERS.map((s) => (
              <div
                key={s.name}
                className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 text-center hover:border-cyan-500/30 hover:-translate-y-1 transition-all"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white font-black text-lg mx-auto mb-4`}>
                  {s.initials}
                </div>
                <h3 className="font-bold text-base mb-1">{s.name}</h3>
                <p className="text-slate-400 text-sm">{s.title}</p>
                <p className="text-slate-500 text-sm">{s.org}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-0.5">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* ── Agenda ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Chương trình
          </span>
          <h2 className="text-3xl lg:text-4xl font-black mb-8">Lịch trình chi tiết</h2>
          <div className="max-w-2xl space-y-0 divide-y divide-white/5">
            {AGENDA.map((a) => (
              <div key={a.time} className="flex gap-5 py-5">
                <div className="min-w-[120px] text-sm font-semibold text-cyan-400 pt-0.5 shrink-0">{a.time}</div>
                <div className="flex items-start gap-3">
                  <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${a.speaker ? 'bg-cyan-400' : 'border-2 border-slate-600'}`} />
                  <div>
                    <p className="font-semibold text-sm">{a.title}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{a.desc}</p>
                    {a.speaker && (
                      <p className="text-violet-400 text-xs mt-1 font-medium">🎤 {a.speaker}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* ── Target Audience ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Đối tượng tham dự
          </span>
          <h2 className="text-3xl lg:text-4xl font-black mb-8">Webinar dành cho ai?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl">
            {AUDIENCE.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2.5 bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm font-medium"
              >
                <span className="text-cyan-400 font-bold text-base">✓</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-r from-cyan-900/50 to-violet-900/50 border border-cyan-500/20 p-10 text-center">
            <h2 className="text-2xl lg:text-3xl font-black mb-3">
              Đừng bỏ lỡ sự kiện quan trọng này!
            </h2>
            <p className="text-slate-400 mb-6">
              Chỉ còn <span className="text-cyan-400 font-bold">{countdown.days} ngày</span> nữa — Đăng ký ngay để giữ chỗ miễn phí của bạn.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base
                bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500
                shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 transition-all"
            >
              🚀 Đăng ký tham dự miễn phí
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-base font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
          🛡️ AI SOC Webinar 2026 • ICS
        </p>
        <p className="text-slate-500 text-sm mb-4">
          Công ty Cổ phần An ninh mạng Quốc tế — ICS • Miễn phí tham dự
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <Link href="/" className="text-slate-500 hover:text-cyan-400 transition">Trang chủ ICS</Link>
          <button onClick={scrollToForm} className="text-slate-500 hover:text-cyan-400 transition">Đăng ký tham dự</button>
          <Link href="/webinar/admin" className="text-slate-500 hover:text-cyan-400 transition">Quản trị</Link>
        </div>
        <p className="text-slate-600 text-xs mt-6">© 2026 ICS. Mọi thông tin được bảo mật và không chia sẻ cho bên thứ ba.</p>
      </footer>
    </div>
  )
}
