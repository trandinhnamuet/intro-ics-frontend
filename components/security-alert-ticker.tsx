"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, AlertTriangle, AlertCircle, Info, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SecurityAlert } from "@/services/security-alerts.service"

const FALLBACK_ALERTS: SecurityAlert[] = [
  {
    id: "1",
    title: "Cảnh báo lỗ hổng bảo mật mức độ trung bình trên Microsoft Edge",
    summary:
      "Trung tâm SOC của ICS phát đi thông báo về việc trình duyệt Microsoft Edge tồn tại nhiều lỗ hổng bảo mật nghiêm trọng, gồm các mã CVE-2026-2648, CVE-2026-2649 và CVE-2026-2650. Các lỗ hổng này có thể bị tin tặc khai thác từ xa nhằm thực thi mã độc, gây tấn công từ chối dịch vụ (DoS) hoặc truy cập trái phép vào dữ liệu nhạy cảm trên hệ thống.",
    severity: "medium",
    cve_ids: "CVE-2026-2648, CVE-2026-2649, CVE-2026-2650",
    affected_systems: "Microsoft Edge < 145.0.3800.70",
    recommendation: "Cập nhật lên phiên bản mới nhất để giảm thiểu rủi ro an ninh mạng.",
    source: "Trung tâm SOC ICS",
    is_active: true,
    alert_date: "2026-02-23",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Cảnh báo tấn công Ransomware nhắm vào doanh nghiệp Việt Nam",
    summary:
      "Ghi nhận làn sóng tấn công Ransomware mới nhắm vào các doanh nghiệp trong nước. Tin tặc lợi dụng lỗ hổng trong phần mềm VPN chưa được vá để xâm nhập hệ thống. Khuyến nghị khẩn cấp: kiểm tra và cập nhật firmware thiết bị VPN, bật xác thực đa yếu tố (MFA) trên tất cả tài khoản quản trị.",
    severity: "high",
    cve_ids: "CVE-2026-1001",
    affected_systems: "Fortinet FortiGate, Palo Alto GlobalProtect",
    recommendation: "Cập nhật firmware VPN và bật MFA ngay lập tức.",
    source: "Trung tâm SOC ICS",
    is_active: true,
    alert_date: "2026-02-20",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Phát hiện chiến dịch Phishing giả mạo ngân hàng lớn tại Việt Nam",
    summary:
      "Phát hiện chiến dịch tấn công phishing quy mô lớn giả mạo giao diện các ngân hàng Vietcombank, BIDV và VietinBank. Email độc hại chứa liên kết tới trang web giả mạo để đánh cắp thông tin đăng nhập và OTP. Người dùng cần cảnh giác với các email không rõ nguồn gốc và xác minh địa chỉ website trước khi đăng nhập.",
    severity: "critical",
    cve_ids: undefined,
    affected_systems: "Email clients, Web browsers",
    recommendation: "Không nhấp vào liên kết trong email đáng ngờ, luôn kiểm tra URL trước khi đăng nhập.",
    source: "Trung tâm SOC ICS",
    is_active: true,
    alert_date: "2026-02-18",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

const SEVERITY_CONFIG = {
  critical: {
    label: "NGHIÊM TRỌNG",
    color: "from-red-600 to-red-800",
    border: "border-red-500/60",
    badge: "bg-red-600",
    glow: "shadow-red-600/30",
    icon: <AlertCircle className="w-4 h-4" />,
    pulse: "bg-red-500",
  },
  high: {
    label: "CAO",
    color: "from-orange-600 to-orange-800",
    border: "border-orange-500/60",
    badge: "bg-orange-500",
    glow: "shadow-orange-600/30",
    icon: <AlertTriangle className="w-4 h-4" />,
    pulse: "bg-orange-500",
  },
  medium: {
    label: "TRUNG BÌNH",
    color: "from-yellow-600 to-amber-700",
    border: "border-yellow-500/60",
    badge: "bg-yellow-500",
    glow: "shadow-yellow-600/30",
    icon: <Shield className="w-4 h-4" />,
    pulse: "bg-yellow-500",
  },
  low: {
    label: "THẤP",
    color: "from-blue-600 to-blue-800",
    border: "border-blue-500/60",
    badge: "bg-blue-500",
    glow: "shadow-blue-600/30",
    icon: <Info className="w-4 h-4" />,
    pulse: "bg-blue-500",
  },
  info: {
    label: "THÔNG TIN",
    color: "from-gray-600 to-gray-800",
    border: "border-gray-500/60",
    badge: "bg-gray-500",
    glow: "shadow-gray-600/30",
    icon: <Info className="w-4 h-4" />,
    pulse: "bg-gray-400",
  },
}

function formatAlertDate(dateStr: string) {
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })
  } catch {
    return dateStr
  }
}

export function SecurityAlertTicker() {
  const [alerts, setAlerts] = useState<SecurityAlert[]>([])
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3007"}/api/security-alerts/latest?count=3`
        )
        if (res.ok) {
          const data: SecurityAlert[] = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            setAlerts(data)
            return
          }
        }
      } catch {
        // fall through to fallback
      }
      setAlerts(FALLBACK_ALERTS)
    }
    load()
  }, [])

  const goTo = (idx: number, dir: "next" | "prev") => {
    if (isAnimating || alerts.length < 2) return
    setDirection(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setIsAnimating(false)
    }, 300)
  }

  const next = () => goTo((current + 1) % alerts.length, "next")
  const prev = () => goTo((current - 1 + alerts.length) % alerts.length, "prev")

  useEffect(() => {
    if (isPaused || alerts.length < 2) return
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [current, isPaused, alerts.length, isAnimating])

  if (alerts.length === 0) return null

  const alert = alerts[current]
  const sev = SEVERITY_CONFIG[alert.severity as keyof typeof SEVERITY_CONFIG] ?? SEVERITY_CONFIG.info

  return (
    <div
      className="absolute right-6 lg:right-12 xl:right-20 top-1/2 -translate-y-1/2 z-30 w-[340px] lg:w-[380px] xl:w-[420px] hidden lg:block"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer glow container */}
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden",
          `shadow-2xl ${sev.glow}`,
          "transition-all duration-500"
        )}
        style={{ boxShadow: "0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.3)" }}
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", sev.color)} />

        {/* Animated border */}
        <div className={cn("absolute inset-0 rounded-2xl border", sev.border)} />

        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent sec-alert-scan" />
        </div>

        {/* Content */}
        <div className="relative p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className={cn("w-2.5 h-2.5 rounded-full animate-ping absolute", sev.pulse, "opacity-75")} />
                <div className={cn("w-2.5 h-2.5 rounded-full", sev.pulse)} />
              </div>
              <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Cảnh báo bảo mật</span>
            </div>
            <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-xs font-bold", sev.badge)}>
              {sev.icon}
              {sev.label}
            </div>
          </div>

          {/* Date + Source */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white/50 text-xs font-mono">{formatAlertDate(alert.alert_date)}</span>
            {alert.source && (
              <>
                <span className="text-white/20">|</span>
                <span className="text-white/50 text-xs truncate">{alert.source}</span>
              </>
            )}
          </div>

          {/* Alert content with slide animation */}
          <div
            className={cn(
              "transition-all duration-300",
              isAnimating
                ? direction === "next"
                  ? "-translate-x-4 opacity-0"
                  : "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            )}
          >
            {/* Title */}
            <h3 className="text-white font-bold text-sm leading-snug mb-3 line-clamp-2">
              {alert.title}
            </h3>

            {/* Summary */}
            <p className="text-white/75 text-xs leading-relaxed line-clamp-4 mb-3">
              {alert.summary}
            </p>

            {/* CVE chips */}
            {alert.cve_ids && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {alert.cve_ids.split(",").map((cve) => (
                  <span
                    key={cve.trim()}
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/10 text-white/80 border border-white/15"
                  >
                    {cve.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Affected systems */}
            {alert.affected_systems && (
              <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/10 mb-3">
                <span className="text-white/40 text-[10px] font-medium shrink-0 mt-0.5">Ảnh hưởng:</span>
                <span className="text-white/65 text-[10px] leading-relaxed">{alert.affected_systems}</span>
              </div>
            )}

            {/* Recommendation pill */}
            {alert.recommendation && (
              <div className={cn("px-3 py-2 rounded-lg text-[10px] text-white/90 font-medium bg-gradient-to-r opacity-90", sev.color)}>
                ⚡ {alert.recommendation}
              </div>
            )}
          </div>

          {/* Controls */}
          {alerts.length > 1 && (
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
              {/* Dots */}
              <div className="flex gap-1.5">
                {alerts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                    className={cn(
                      "transition-all duration-300 rounded-full",
                      i === current ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/60"
                    )}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-1">
                <button
                  onClick={prev}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-3 h-3 text-white" />
                </button>
                <button
                  onClick={next}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-white" />
                </button>
              </div>

              {/* Counter */}
              <span className="text-white/40 text-xs font-mono">{current + 1}/{alerts.length}</span>
            </div>
          )}
        </div>

        {/* Countdown progress bar */}
        {!isPaused && alerts.length > 1 && (
          <div className="h-0.5 bg-white/10">
            <div
              key={`${current}-progress`}
              className={cn("h-full bg-gradient-to-r sec-alert-countdown", sev.color)}
            />
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-white/30 rounded-tl-2xl pointer-events-none" />
      <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr-2xl pointer-events-none" />
      <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl-2xl pointer-events-none" />
      <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br-2xl pointer-events-none" />
    </div>
  )
}
