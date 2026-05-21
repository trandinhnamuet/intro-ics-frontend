'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { webinarService, WebinarRegistrationRecord } from '@/services/webinar.service'

const SEED_COUNT = 47

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
}

function exportCSV(rows: WebinarRegistrationRecord[]) {
  const headers = ['STT', 'Họ và tên', 'Đơn vị công tác', 'Chức vụ', 'Email', 'Số điện thoại', 'Lĩnh vực', 'Thời gian đăng ký']
  const data = rows.map((r, i) => [
    i + 1, r.fullName, r.company, r.position, r.email, r.phone, r.field, formatDate(r.registeredAt),
  ])
  const csv = [headers, ...data]
    .map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
    .join('\n')
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `AISOC_WebinarDangKy_${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

// ─────────────────────────────────────────────
// Login
// ─────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (key: string) => Promise<void> }) {
  const [key, setKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!key.trim()) return
    setLoading(true)
    setError('')
    try {
      await onLogin(key.trim())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đăng nhập thất bại.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050c1a] flex items-center justify-center px-6">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-10 w-full max-w-sm text-center relative">
        <div className="text-5xl mb-4">🛡️</div>
        <h1 className="text-2xl font-black text-white mb-1">Quản trị viên</h1>
        <p className="text-slate-400 text-sm mb-7">Nhập Admin Key để truy cập dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={key}
            onChange={(e) => { setKey(e.target.value); setError('') }}
            placeholder="••••••••••••"
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white text-center text-lg tracking-widest outline-none focus:border-cyan-400 transition"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? '⏳ Đang xác thực...' : '🔐 Đăng nhập'}
          </button>
        </form>

        <Link href="/webinar" className="block mt-5 text-slate-500 hover:text-cyan-400 text-sm transition">
          ← Về trang đăng ký
        </Link>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Stat Card
// ─────────────────────────────────────────────
function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-5 hover:border-cyan-500/20 transition">
      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className="text-3xl font-black text-cyan-400">{value}</p>
      {sub && <p className="text-slate-500 text-xs mt-1">{sub}</p>}
    </div>
  )
}

// ─────────────────────────────────────────────
// Dashboard
// ─────────────────────────────────────────────
function Dashboard({ rows, adminKey, onLogout }: { rows: WebinarRegistrationRecord[]; adminKey: string; onLogout: () => void }) {
  const [search, setSearch] = useState('')
  const [fieldFilter, setFieldFilter] = useState('')

  const uniqueFields = useMemo(() => Array.from(new Set(rows.map((r) => r.field))).sort(), [rows])

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return rows.filter((r) => {
      const matchSearch = !q ||
        r.fullName.toLowerCase().includes(q) ||
        r.company.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.position.toLowerCase().includes(q)
      const matchField = !fieldFilter || r.field === fieldFilter
      return matchSearch && matchField
    })
  }, [rows, search, fieldFilter])

  const topField = useMemo(() => {
    const counts: Record<string, number> = {}
    rows.forEach((r) => { counts[r.field] = (counts[r.field] || 0) + 1 })
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]
    return top ? { name: top[0], count: top[1] } : null
  }, [rows])

  const todayCount = useMemo(() => {
    const today = new Date().toDateString()
    return rows.filter((r) => new Date(r.registeredAt).toDateString() === today).length
  }, [rows])

  const uniqueCompanies = useMemo(() => new Set(rows.map((r) => r.company)).size, [rows])

  return (
    <div className="min-h-screen bg-[#050c1a] text-slate-100">
      {/* Topbar */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-white/5 h-14 flex items-center px-6 gap-4">
        <span className="text-base">🛡️</span>
        <span className="font-bold text-sm">AI SOC Webinar 2026</span>
        <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold px-2.5 py-0.5 rounded-full">Admin</span>
        <div className="ml-auto flex items-center gap-4">
          <span className="text-slate-400 text-sm hidden sm:block">{rows.length} người đăng ký</span>
          <Link href="/webinar" className="text-slate-400 hover:text-white text-sm transition border border-white/10 px-3 py-1.5 rounded-lg">← Trang chính</Link>
          <button onClick={onLogout} className="text-slate-400 hover:text-white text-sm transition border border-white/10 px-3 py-1.5 rounded-lg">Đăng xuất</button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="📋 Tổng đăng ký" value={rows.length} sub="Người đã đăng ký" />
          <StatCard label="🏢 Số đơn vị" value={uniqueCompanies} sub="Tổ chức khác nhau" />
          <StatCard label="🏆 Lĩnh vực phổ biến" value={topField?.name ?? '—'} sub={topField ? `${topField.count} người` : undefined} />
          <StatCard label="📅 Đăng ký hôm nay" value={todayCount} sub={new Date().toLocaleDateString('vi-VN')} />
        </div>

        {/* Table */}
        <div className="bg-slate-800/40 border border-white/5 rounded-2xl overflow-hidden">
          {/* Table header controls */}
          <div className="px-5 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-bold text-lg">Danh sách người đăng ký</h2>
            <div className="flex items-center gap-2.5 flex-wrap">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="🔍 Tìm kiếm..."
                className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400 transition w-52 text-slate-100 placeholder:text-slate-500"
              />
              <select
                value={fieldFilter}
                onChange={(e) => setFieldFilter(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400 transition text-slate-100"
              >
                <option value="">Tất cả lĩnh vực</option>
                {uniqueFields.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
              <button
                onClick={() => exportCSV(filtered)}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition"
              >
                📥 Xuất CSV
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <p className="text-4xl mb-3">{search || fieldFilter ? '🔍' : '📭'}</p>
                <p>{search || fieldFilter ? 'Không tìm thấy kết quả phù hợp' : 'Chưa có ai đăng ký'}</p>
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    {['#', 'Họ và tên', 'Đơn vị công tác', 'Chức vụ', 'Email', 'Điện thoại', 'Lĩnh vực', 'Thời gian'].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <tr key={r.id} className="border-b border-white/5 hover:bg-white/[0.02] transition">
                      <td className="px-4 py-3.5 text-slate-500">{i + 1}</td>
                      <td className="px-4 py-3.5 font-semibold whitespace-nowrap">{r.fullName}</td>
                      <td className="px-4 py-3.5 text-slate-400">{r.company}</td>
                      <td className="px-4 py-3.5">{r.position}</td>
                      <td className="px-4 py-3.5">
                        <a href={`mailto:${r.email}`} className="text-cyan-400 hover:underline">{r.email}</a>
                      </td>
                      <td className="px-4 py-3.5 text-slate-400 whitespace-nowrap">{r.phone}</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                          {r.field}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap text-xs">{formatDate(r.registeredAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {filtered.length > 0 && (
            <div className="px-5 py-3 border-t border-white/5 text-xs text-slate-500">
              Hiển thị {filtered.length} / {rows.length} người đăng ký
              {(search || fieldFilter) && ' (đang lọc)'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────
export default function WebinarAdminPage() {
  const [adminKey, setAdminKey] = useState<string | null>(null)
  const [rows, setRows] = useState<WebinarRegistrationRecord[]>([])

  useEffect(() => {
    const saved = sessionStorage.getItem('webinar_admin_key')
    if (saved) attemptLogin(saved)
  }, [])

  async function attemptLogin(key: string) {
    const data = await webinarService.getRegistrations(key)
    setRows(data)
    setAdminKey(key)
    sessionStorage.setItem('webinar_admin_key', key)
  }

  function logout() {
    setAdminKey(null)
    setRows([])
    sessionStorage.removeItem('webinar_admin_key')
  }

  if (!adminKey) {
    return <LoginScreen onLogin={attemptLogin} />
  }

  return <Dashboard rows={rows} adminKey={adminKey} onLogout={logout} />
}
