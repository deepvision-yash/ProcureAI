"use client";
import React, { useState } from 'react';

const roleConfig = {
  department: {
    userId: 'department',
    password: 'department123',
    label: 'Department',
    title: 'Department Officer',
    org: 'Government Department',
    icon: '🏛️',
    dashboardName: 'Department Procurement Dashboard',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-100',
    subOrg: 'Public Health & Innovation Cell'
  },
  startup: {
    userId: 'startup',
    password: 'startup123',
    label: 'Startup',
    title: 'Startup Founder',
    org: 'Registered Startup',
    icon: '🚀',
    dashboardName: 'Venture & Pilot Pipeline Hub',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-100',
    subOrg: 'DPIIT Registered Innovator'
  },
  admin: {
    userId: 'admin',
    password: 'admin123',
    label: 'Admin',
    title: 'MSInS Admin',
    org: 'Innovation Society',
    icon: '🏢',
    dashboardName: 'Central Governance & RFP Command Center',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-100',
    subOrg: 'State Innovation Nodal Agency'
  },
  evaluator: {
    userId: 'evaluator',
    password: 'evaluator123',
    label: 'Evaluator',
    title: 'Evaluator',
    org: 'Expert Panel',
    icon: '🛡️',
    dashboardName: 'Technical Bid & Pilot Evaluation Console',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    badgeBorder: 'border-purple-100',
    subOrg: 'Autonomous Technical Committee'
  }
};

export default function LoginPage() {
  const [currentRole, setCurrentRole] = useState('department');
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState(roleConfig.department.userId);
  const [password, setPassword] = useState(roleConfig.department.password);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: '', classes: '', visible: false });

  const handleRoleSwitch = (roleKey) => {
    if (!roleConfig[roleKey]) return;
    setCurrentRole(roleKey);
    const config = roleConfig[roleKey];
    setUserId(config.userId);
    setPassword(config.password);
    setNotification({ ...notification, visible: false });
  };

  const selectRolePreset = (roleKey) => {
    handleRoleSwitch(roleKey);
    const targetInput = document.getElementById('userIdInput');
    if (targetInput) {
      targetInput.focus();
      targetInput.select();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showNotification = (message, classes) => {
    setNotification({ message, classes, visible: true });
  };

  const showDemoNotice = (msg) => {
    showNotification(msg, 'bg-blue-50 text-blue-800 border-blue-200');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const config = roleConfig[currentRole];
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showNotification(
        `✓ Authentication Authorized: Opening ${config.dashboardName} for ${config.title} (${config.org})...`,
        'bg-emerald-50 text-emerald-800 border-emerald-200'
      );
    }, 700);
  };

  const config = roleConfig[currentRole];

  return (
    <main className="w-full min-h-screen bg-surface">
      <div className="flex flex-col w-full">
        {/* Full Screen Two-Column Procurement Authority Gateway */}
        <div className="w-full min-h-screen flex flex-col lg:flex-row bg-surface">
          {/* LEFT PANEL: Institutional GovTech Showcase & Demo Matrix (~57% width) */}
          <section className="w-full lg:w-[57%] bg-[#101b3b] text-white p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Faint Ambient Structural Vectors */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 bottom-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Top Branding Container */}
            <div className="relative z-10">
              {/* Logo Housing Container */}
              <div className="w-full max-w-[340px] h-[110px] rounded-xl p-4 bg-surface-container-lowest shadow-md flex items-center justify-center border border-slate-100/10">
                <img alt="ProcureAI Institutional Emblem" className="max-w-full max-h-full object-contain [transform:translateZ(0)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6fa21GjmSwNgqGEZUEj0T9VvLR_JLv3jZGENjed2ZJR-irxx5l-nKWvVic4LhmOrC5xfOyg1tfsqeq3nNsTN91-qvQ4eHw3IUTyBwpeGiVwIBfrXtJFq4CHQ1K67gztrE-p-t0p7mgugpZqjy4D_rAHdveG_KcnKdNH-pAj1Th_3789OHEMUzeLB3r9EkmxdOHBWAkThGhDzUem5CNeXJBd0_CXG2FKNnRDj0vyB40QYgAFcpAdlGd3dZaZmE_ZCRpw" />
              </div>
              
              {/* System Narrative */}
              <div className="mt-8 max-w-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-400/20 text-blue-300 font-label-sm uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
                  GovTech Innovation Exchange
                </div>
                <h1 className="text-white font-headline-lg text-2xl sm:text-3xl tracking-tight mt-3">
                  AI-Powered Innovation Procurement
                </h1>
                <p className="text-blue-100/80 font-body-md text-sm mt-1.5 leading-relaxed">
                  Connecting Government Challenges with Startup Innovation under high-assurance governance protocols.
                </p>
              </div>
            </div>
            
            {/* Middle: Demo Access & Test Credentials Card */}
            <div className="relative z-10 my-8 lg:my-6">
              <div className="bg-slate-900/70 backdrop-blur-md border border-blue-400/20 rounded-xl p-5 sm:p-6 shadow-2xl max-w-xl">
                {/* Card Header & Hackathon Badge */}
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                      <span className="material-symbols-outlined text-[20px]">info</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] uppercase tracking-wider text-blue-300 font-semibold block">
                        DEMO ACCESS MATRIX
                      </span>
                      <p className="text-white font-title-md text-sm sm:text-base font-semibold">
                        Smart India Hackathon 2026 • UI Demonstration
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-400/25 text-emerald-300 text-xs font-code font-medium">
                    V2.4 Active
                  </span>
                </div>
                
                {/* Credential Rows Grid */}
                <div className="space-y-3 pt-4">
                  {/* Row 1: Department Officer */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer border border-transparent hover:border-blue-400/30" onClick={() => selectRolePreset('department')} title="Click to load Department Officer credentials">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base">account_balance</span>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                          Department Officer
                          <span className="text-[10px] text-blue-300 font-normal opacity-0 group-hover:opacity-100 transition-opacity">Load →</span>
                        </div>
                        <div className="text-slate-400 text-[11px]">Government Department</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-code text-xs self-start sm:self-auto">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-blue-200 border border-slate-700/60">department</span>
                      <span className="text-slate-500 text-[10px]">/</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">department123</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px bg-white/5"></div>
                  
                  {/* Row 2: Startup Founder */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer border border-transparent hover:border-emerald-400/30" onClick={() => selectRolePreset('startup')} title="Click to load Startup Founder credentials">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base">rocket_launch</span>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                          Startup Founder
                          <span className="text-[10px] text-emerald-300 font-normal opacity-0 group-hover:opacity-100 transition-opacity">Load →</span>
                        </div>
                        <div className="text-slate-400 text-[11px]">Registered Startup</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-code text-xs self-start sm:self-auto">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-200 border border-slate-700/60">startup</span>
                      <span className="text-slate-500 text-[10px]">/</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">startup123</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px bg-white/5"></div>
                  
                  {/* Row 3: MSInS Admin */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer border border-transparent hover:border-amber-400/30" onClick={() => selectRolePreset('admin')} title="Click to load Admin credentials">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base">corporate_fare</span>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                          MSInS Admin
                          <span className="text-[10px] text-amber-300 font-normal opacity-0 group-hover:opacity-100 transition-opacity">Load →</span>
                        </div>
                        <div className="text-slate-400 text-[11px]">Innovation Society</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-code text-xs self-start sm:self-auto">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-200 border border-slate-700/60">admin</span>
                      <span className="text-slate-500 text-[10px]">/</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">admin123</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px bg-white/5"></div>
                  
                  {/* Row 4: Evaluator */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer border border-transparent hover:border-purple-400/30" onClick={() => selectRolePreset('evaluator')} title="Click to load Evaluator credentials">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base">verified_user</span>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                          Evaluator
                          <span className="text-[10px] text-purple-300 font-normal opacity-0 group-hover:opacity-100 transition-opacity">Load →</span>
                        </div>
                        <div className="text-slate-400 text-[11px]">Expert Panel</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-code text-xs self-start sm:self-auto">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-200 border border-slate-700/60">evaluator</span>
                      <span className="text-slate-500 text-[10px]">/</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">evaluator123</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Footer Note on Credentials Card */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-blue-300 shrink-0">touch_app</span>
                  <p className="font-body-sm text-[11px] text-slate-400 italic">
                    Click any profile row above to auto-populate credentials for SIH evaluation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Left Panel Bottom Trust & Certification Badges */}
            <div className="relative z-10 pt-4 flex flex-wrap items-center justify-between gap-4 text-slate-400 text-xs border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-label-md text-slate-300">Sandbox Environment • Active Cluster</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] tracking-wide uppercase text-slate-400">
                <span>SOC2 Type II</span>
                <span>•</span>
                <span>ISO 27001</span>
                <span>•</span>
                <span>CVC Compliant</span>
              </div>
            </div>
          </section>
          
          {/* RIGHT PANEL: Crisp Light Direct Login Card (~43% width) */}
          <section className="w-full lg:w-[43%] bg-[#F8FAFC] flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 relative">
            {/* Top Mobile Brand Strip (visible on mobile only) */}
            <div className="lg:hidden w-full max-w-[500px] mb-6 flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-container text-white flex items-center justify-center font-bold text-sm">
                  PA
                </div>
                <span className="font-title-md text-sm text-slate-800 font-bold">ProcureAI</span>
              </div>
              <span className="text-[11px] font-label-sm text-primary font-semibold">SIH 2026 Portal</span>
            </div>
            
            {/* Centered Authentication Card */}
            <div className="w-full max-w-[500px] sm:max-w-[520px] bg-white rounded-xl shadow-lg border border-slate-200 p-7 sm:p-9 md:p-10">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline-md text-2xl font-bold text-slate-900 tracking-tight">
                    Welcome Back
                  </h2>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-primary border border-blue-100 text-[11px] font-semibold">
                    v3.2 Secure
                  </span>
                </div>
                <p className="font-body-sm text-sm text-slate-500 mt-1">
                  Sign in to your ProcureAI account
                </p>
              </div>
              
              {/* Embedded Role Switcher Segmented Control */}
              <div className="mb-6">
                <label className="font-label-sm text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
                  Sign in as
                </label>
                <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200" role="tablist">
                  {['department', 'startup', 'admin', 'evaluator'].map((role) => (
                    <button
                      key={role}
                      aria-selected={currentRole === role}
                      className={`role-tab transition-all duration-150 font-label-md text-xs py-2 px-1 rounded-lg text-center font-medium ${currentRole === role ? 'bg-[#2D5BE3] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}`}
                      id={`tab-${role}`}
                      onClick={() => handleRoleSwitch(role)}
                      role="tab"
                      type="button"
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                  ))}
                </div>
                
                {/* Dynamic Contextual Role Banner */}
                <div className={`transition-all text-xs ${config.badgeBg} ${config.badgeText} border ${config.badgeBorder} rounded-md px-3 py-2 mt-2.5 font-medium flex items-center justify-between gap-2`} id="role-context-badge">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-sm" id="role-badge-icon">{config.icon}</span>
                    <span className="truncate font-body-sm text-xs font-semibold" id="role-badge-text">
                      {config.title} • {config.org}
                    </span>
                  </div>
                  <span className="text-[10px] text-blue-500 shrink-0 font-code font-bold uppercase tracking-wider">PRE-CONFIGURED</span>
                </div>
              </div>
              
              {/* Form Fields */}
              <form className="space-y-4" id="login-form" onSubmit={handleFormSubmit}>
                {/* Field 1: User ID */}
                <div>
                  <label className="font-label-sm text-xs font-semibold text-slate-700 mb-1.5 block" htmlFor="userIdInput">
                    User ID
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg pointer-events-none select-none">
                      person
                    </span>
                    <input
                      className="h-[50px] w-full pl-10 pr-4 bg-[#F8FAFC] border border-slate-300 rounded-lg text-sm text-slate-900 font-body-md focus:border-[#2D5BE3] focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                      id="userIdInput"
                      name="userId"
                      placeholder="Enter your user identification"
                      required
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Field 2: Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="font-label-sm text-xs font-semibold text-slate-700 block" htmlFor="passwordInput">
                      Password
                    </label>
                    <button
                      className="text-[11px] font-label-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
                      id="toggle-visibility-label"
                      onClick={togglePasswordVisibility}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm" id="toggle-icon">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                      <span id="toggle-text">{showPassword ? 'Hide' : 'Show'}</span>
                    </button>
                  </div>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg pointer-events-none select-none">
                      lock
                    </span>
                    <input
                      className="h-[50px] w-full pl-10 pr-10 bg-[#F8FAFC] border border-slate-300 rounded-lg text-sm text-slate-900 font-body-md focus:border-[#2D5BE3] focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                      id="passwordInput"
                      name="password"
                      placeholder="Enter password"
                      required
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                      onClick={togglePasswordVisibility}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg" id="password-eye-icon">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>
                
                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input defaultChecked className="w-4 h-4 rounded text-[#2D5BE3] border-slate-300 focus:ring-[#2D5BE3]" type="checkbox" />
                    <span className="font-body-sm text-xs text-slate-600">Remember this session</span>
                  </label>
                  <a
                    className="font-label-md text-xs font-semibold text-[#2D5BE3] hover:underline cursor-pointer"
                    onClick={() => showDemoNotice('Credential reset requested. In this hackathon demo, credentials remain pre-configured on the left panel.')}
                  >
                    Forgot Password?
                  </a>
                </div>
                
                {/* Primary Action Button */}
                <div className="pt-2">
                  <button
                    className="w-full h-[52px] bg-[#2D5BE3] hover:bg-[#1E40AF] active:bg-[#1A3894] text-white font-label-md font-semibold text-sm rounded-lg shadow hover:shadow-md flex items-center justify-center gap-2 transition-all group disabled:opacity-75"
                    id="submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span id="btn-text">{isSubmitting ? 'Authenticating...' : 'Sign In'}</span>
                    <span className={`transition-transform ${isSubmitting ? 'hidden' : 'group-hover:translate-x-1'}`} id="btn-arrow">→</span>
                    <span className={`animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full ${isSubmitting ? 'inline-block' : 'hidden'}`} id="btn-spinner"></span>
                  </button>
                </div>
                
                {/* Demo Helper Callout */}
                <div className="mt-3 py-2 px-3 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-500 flex items-center justify-center gap-2 text-center">
                  <span className="material-symbols-outlined text-sm text-primary">info</span>
                  <span className="font-body-sm text-xs">
                    Demo environment • Use credentials shown on the left panel
                  </span>
                </div>
                
                {/* Live Dynamic Notification Banner */}
                {notification.visible && (
                  <div className={`text-xs rounded-lg p-3 text-center font-medium border block transition-all ${notification.classes}`} id="status-notification">
                    {notification.message}
                  </div>
                )}
                
                {/* Support Note */}
                <p className="font-body-sm text-xs text-slate-400 text-center mt-4">
                  Need institutional access? Contact the ProcureAI demonstration administrator.
                </p>
              </form>
            </div>
            
            {/* Page Footer Under Card */}
            <footer className="text-center mt-6 space-y-1">
              <p className="font-label-md text-xs text-slate-500 font-semibold">
                ProcureAI • Smart India Hackathon 2026
              </p>
              <p className="font-label-sm text-[11px] text-slate-400 tracking-wide">
                Government Innovation Procurement Demonstration Portal
              </p>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
