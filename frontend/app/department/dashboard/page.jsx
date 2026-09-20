"use client";
import React from 'react';

export default function DepartmentDashboardPage() {
  return (
    <div className="h-full min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* BEGIN: LeftSidebar */}
      <aside
        className="fixed top-0 left-0 h-screen w-[260px] bg-white border-r border-[#E2E8F0] z-30 flex flex-col justify-between select-none"
        data-purpose="navigation-sidebar"
      >
        {/* Top Area: Logo, User Identity & Navigation */}
        <div className="flex flex-col">
          {/* Logo Container */}
          <div className="h-20 flex items-center px-6 border-b border-[#E2E8F0]/60">
            <a aria-label="ProcureAI Home" className="block focus:outline-none" href="/department/dashboard">
              <img
                alt="ProcureAI Logo"
                className="w-[155px] h-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQNo7qE4CnTDmf37DsCqDrjQ2I8HKju3skQgdvRyhwccnVWkRbsts-tyUvdv6bmgNmah2GiydW23DKilnft2e9rvYN2n5uEh5vP1DIlu7n2hmSX4laafgH8S6TEVROf9Q31OW7FEJt1-q9IuRNiIcv15IAG8rDl-tqdHj70ghlybSwVy4ostxlkFsldZS9Z7ttuAjlSv9ISGsYZLv17xWPAFsnKxF-8OKp0z-0DgLJBu0Y1ylOZZmCEr7gl-GGcw8C5g"
              />
            </a>
          </div>
          {/* User Identity Section */}
          <div className="px-5 py-4 border-b border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="w-9 h-9 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center font-bold text-xs tracking-wider flex-shrink-0 shadow-sm"
              >
                PS
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[14px] font-semibold text-[#0F172A] leading-tight truncate">
                    Priya Sharma
                  </span>
                </div>
                <div className="mt-1">
                  <span className="inline-block bg-[#EEF2FF] text-[#2D5BE3] text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Department Officer
                  </span>
                </div>
                <span className="text-[11.5px] text-[#64748B] mt-1 leading-tight truncate">
                  Health Department, Pune
                </span>
              </div>
            </div>
          </div>
          {/* Navigation Menu */}
          <nav aria-label="Primary Navigation" className="px-3 py-4 space-y-1">
            {/* 1. Dashboard (Active) */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-semibold bg-[#2D5BE3] text-white shadow-sm transition-colors duration-150"
              href="/department/dashboard"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect height="9" width="7" x="3" y="3"></rect>
                <rect height="5" width="7" x="14" y="3"></rect>
                <rect height="9" width="7" x="14" y="12"></rect>
                <rect height="5" width="7" x="3" y="16"></rect>
              </svg>
              <span>Dashboard</span>
            </a>
            {/* 2. My Challenges */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors duration-150"
              href="#"
            >
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
              </svg>
              <span>My Challenges</span>
            </a>
            {/* 3. Post Challenge */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors duration-150"
              href="#"
            >
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
              <span>Post Challenge</span>
            </a>
            {/* 4. Applications */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors duration-150"
              href="#"
            >
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Applications</span>
            </a>
            {/* 5. Pilots */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors duration-150"
              href="#"
            >
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M10 2v7.31"></path>
                <path d="M14 9.3V2"></path>
                <path d="M8.5 2h7"></path>
                <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                <path d="M5.52 16h12.96"></path>
              </svg>
              <span>Pilots</span>
            </a>
            {/* 6. Audit Trail */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors duration-150"
              href="#"
            >
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
              <span>Audit Trail</span>
            </a>
            {/* Divider */}
            <div className="pt-2 pb-1">
              <hr className="border-[#E2E8F0]" />
            </div>
            {/* 7. AI Assistant */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors duration-150"
              href="#"
            >
              <svg
                className="w-4 h-4 text-[#7C3AED]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              </svg>
              <span>AI Assistant</span>
            </a>
            {/* 8. Settings */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors duration-150"
              href="#"
            >
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </nav>
        </div>
        {/* Sidebar Bottom / Institutional Verification Pill */}
        <div className="p-4 border-t border-[#E2E8F0] bg-slate-50/50">
          <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block"></span>
            <span>Secure Officer Portal</span>
          </div>
          <p className="text-[10px] text-[#94A3B8] mt-0.5 leading-normal">Gov-Stack Verified v2.4</p>
        </div>
      </aside>
      {/* END: LeftSidebar */}
      {/* Content Wrapper */}
      <div className="ml-[260px] flex flex-col min-h-screen">
        {/* BEGIN: TopBar */}
        <header
          className="h-16 sticky top-0 bg-white border-b border-[#E2E8F0] px-8 flex items-center justify-between z-20 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          data-purpose="top-navigation-bar"
        >
          {/* Title */}
          <div>
            <h1 className="text-[24px] font-bold text-[#0F172A] tracking-tight leading-tight">Dashboard</h1>
          </div>
          {/* Controls & Actions */}
          <div className="flex items-center gap-4">
            {/* AI Assistant Action Button */}
            <button
              aria-label="Open AI Assistant"
              className="border border-[#7C3AED] text-[#7C3AED] bg-white rounded-lg px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 hover:bg-[#F5F3FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20"
              type="button"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              </svg>
              <span>AI Assistant</span>
            </button>

            {/* User Profile Pill / Dropdown */}
            <button
              aria-expanded="false"
              aria-haspopup="true"
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg hover:bg-[#F8FAFC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2D5BE3]/20"
              type="button"
            >
              <div className="w-8 h-8 rounded-full bg-[#2D5BE3] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                PS
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">Priya S.</span>
              <svg
                className="w-4 h-4 text-[#64748B]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </header>
        {/* END: TopBar */}
        {/* BEGIN: MainContent */}
        <main className="flex-1 p-8 max-w-[1320px] w-full" data-purpose="dashboard-main">
          {/* Greeting Header */}
          <section className="mb-6" data-purpose="greeting">
            <h2 className="text-[28px] font-bold text-[#0F172A] tracking-tight">Welcome back, Priya Sharma</h2>
            <p className="text-[16px] text-[#64748B] mt-1 font-normal">
              Department of Public Health, Pune Division
            </p>
          </section>
          {/* KPI Cards Row */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6" data-purpose="kpi-metrics">
            {/* KPI 1: Active Challenges */}
            <article className="bg-white rounded-[10px] p-5 border border-[#E2E8F0] border-l-[3px] border-l-[#2D5BE3] shadow-card flex items-center justify-between">
              <div>
                <span className="text-[13px] font-medium text-[#64748B] block mb-1">Active Challenges</span>
                <span className="text-[36px] font-bold text-[#0F172A] leading-tight tracking-tight">3</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#2D5BE3]"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
                </svg>
              </div>
            </article>
            {/* KPI 2: Total Applicants */}
            <article className="bg-white rounded-[10px] p-5 border border-[#E2E8F0] border-l-[3px] border-l-[#10B981] shadow-card flex items-center justify-between">
              <div>
                <span className="text-[13px] font-medium text-[#64748B] block mb-1">Total Applicants</span>
                <span className="text-[36px] font-bold text-[#0F172A] leading-tight tracking-tight">47</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#ECFDF5] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#10B981]"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </article>
            {/* KPI 3: Active Pilots */}
            <article className="bg-white rounded-[10px] p-5 border border-[#E2E8F0] border-l-[3px] border-l-[#7C3AED] shadow-card flex items-center justify-between">
              <div>
                <span className="text-[13px] font-medium text-[#64748B] block mb-1">Active Pilots</span>
                <span className="text-[36px] font-bold text-[#0F172A] leading-tight tracking-tight">2</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#F5F3FF] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#7C3AED]"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 2v7.31"></path>
                  <path d="M14 9.3V2"></path>
                  <path d="M8.5 2h7"></path>
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                  <path d="M5.52 16h12.96"></path>
                </svg>
              </div>
            </article>
            {/* KPI 4: Pending Actions */}
            <article className="bg-white rounded-[10px] p-5 border border-[#E2E8F0] border-l-[3px] border-l-[#F59E0B] shadow-card flex items-center justify-between">
              <div>
                <span className="text-[13px] font-medium text-[#64748B] block mb-1">Pending Actions</span>
                <span className="text-[36px] font-bold text-[#0F172A] leading-tight tracking-tight">4</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#FFFBEB] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#F59E0B]"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" x2="12" y1="9" y2="13"></line>
                  <line x1="12" x2="12.01" y1="17" y2="17"></line>
                </svg>
              </div>
            </article>
          </section>
          {/* Two-Column Main Content Section */}
          <div className="grid grid-cols-12 gap-6 mt-6">
            {/* Left Column: Active Procurement Pipeline (7 cols / ~60%) */}
            <section
              className="col-span-12 lg:col-span-7 bg-white rounded-[10px] border border-[#E2E8F0] p-6 shadow-card flex flex-col justify-between"
              data-purpose="procurement-pipeline"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2D5BE3] inline-block ring-4 ring-blue-50"></span>
                      <h3 className="text-[18px] font-semibold text-[#0F172A]">Active Procurement Pipeline</h3>
                    </div>
                    <p className="text-[13px] text-[#64748B] mt-1">Current status of active government innovation challenges</p>
                  </div>
                </div>
                {/* Pipeline Rows Container */}
                <div className="divide-y divide-[#E2E8F0] mt-1">
                  {/* ROW 1: TB Screening AI */}
                  <div className="py-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-semibold text-[#0F172A]">TB Screening AI</span>
                        <span className="text-xs text-[#94A3B8] font-medium">#HLT-2024-03</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 bg-[#EEF2FF] text-[#2D5BE3] font-semibold text-xs px-2.5 py-1 rounded-full border border-blue-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D5BE3] animate-pulse"></span>
                        Pilot Running
                      </span>
                    </div>
                    {/* Stepper Progress Tracker */}
                    <div className="relative pt-2 pb-1">
                      {/* Stepper Items */}
                      <div className="grid grid-cols-7 gap-1 text-center relative z-10">
                        {/* 1. Post (Completed) */}
                        <div className="flex flex-col items-center group">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Post</span>
                        </div>
                        {/* 2. Match (Completed) */}
                        <div className="flex flex-col items-center group">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Match</span>
                        </div>
                        {/* 3. Screen (Completed) */}
                        <div className="flex flex-col items-center group">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Screen</span>
                        </div>
                        {/* 4. Evaluate (Completed) */}
                        <div className="flex flex-col items-center group">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Evaluate</span>
                        </div>
                        {/* 5. Pilot (Active) */}
                        <div className="flex flex-col items-center group">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white ring-4 ring-blue-100 flex items-center justify-center text-[10px] font-bold shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                          </div>
                          <span className="text-[11px] font-bold text-[#2D5BE3] mt-1.5">Pilot</span>
                        </div>
                        {/* 6. Validate (Future) */}
                        <div className="flex flex-col items-center group">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Validate</span>
                        </div>
                        {/* 7. Scale-Up (Future) */}
                        <div className="flex flex-col items-center group">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Scale-Up</span>
                        </div>
                      </div>
                      {/* Connecting Bar Behind Steps */}
                      <div aria-hidden="true" className="absolute top-[19px] left-[7%] right-[7%] h-[2px] z-0 flex">
                        {/* Completed + Active: 4 intervals (66.6%) */}
                        <div className="w-[66.6%] bg-[#2D5BE3] h-full"></div>
                        {/* Future: remaining 2 intervals (33.4%) */}
                        <div className="w-[33.4%] border-t-2 border-dashed border-[#CBD5E1] h-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* ROW 2: Smart Waste Management */}
                  <div className="py-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-semibold text-[#0F172A]">Smart Waste Management</span>
                        <span className="text-xs text-[#94A3B8] font-medium">#ENV-2024-11</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 bg-[#EEF2FF] text-[#2D5BE3] font-semibold text-xs px-2.5 py-1 rounded-full border border-blue-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D5BE3]"></span>
                        Evaluating
                      </span>
                    </div>
                    {/* Stepper Progress Tracker */}
                    <div className="relative pt-2 pb-1">
                      {/* Stepper Items */}
                      <div className="grid grid-cols-7 gap-1 text-center relative z-10">
                        {/* 1. Post (Completed) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Post</span>
                        </div>
                        {/* 2. Match (Completed) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Match</span>
                        </div>
                        {/* 3. Screen (Completed) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Screen</span>
                        </div>
                        {/* 4. Evaluate (Active) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white ring-4 ring-blue-100 flex items-center justify-center text-[10px] font-bold shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                          </div>
                          <span className="text-[11px] font-bold text-[#2D5BE3] mt-1.5">Evaluate</span>
                        </div>
                        {/* 5. Pilot (Future) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Pilot</span>
                        </div>
                        {/* 6. Validate (Future) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Validate</span>
                        </div>
                        {/* 7. Scale-Up (Future) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Scale-Up</span>
                        </div>
                      </div>
                      {/* Connecting Bar Behind Steps */}
                      <div aria-hidden="true" className="absolute top-[19px] left-[7%] right-[7%] h-[2px] z-0 flex">
                        {/* Completed + Active: 3 intervals (50%) */}
                        <div className="w-[50%] bg-[#2D5BE3] h-full"></div>
                        {/* Future: remaining 3 intervals (50%) */}
                        <div className="w-[50%] border-t-2 border-dashed border-[#CBD5E1] h-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* ROW 3: Crop Disease Detection */}
                  <div className="py-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-semibold text-[#0F172A]">Crop Disease Detection</span>
                        <span className="text-xs text-[#94A3B8] font-medium">#AGR-2024-08</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 bg-[#EEF2FF] text-[#2D5BE3] font-semibold text-xs px-2.5 py-1 rounded-full border border-blue-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D5BE3]"></span>
                        Applications Open
                      </span>
                    </div>
                    {/* Stepper Progress Tracker */}
                    <div className="relative pt-2 pb-1">
                      {/* Stepper Items */}
                      <div className="grid grid-cols-7 gap-1 text-center relative z-10">
                        {/* 1. Post (Completed) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Post</span>
                        </div>
                        {/* 2. Match (Completed) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-[#0F172A] mt-1.5">Match</span>
                        </div>
                        {/* 3. Screen (Active) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#2D5BE3] text-white ring-4 ring-blue-100 flex items-center justify-center text-[10px] font-bold shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                          </div>
                          <span className="text-[11px] font-bold text-[#2D5BE3] mt-1.5">Screen</span>
                        </div>
                        {/* 4. Evaluate (Future) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Evaluate</span>
                        </div>
                        {/* 5. Pilot (Future) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Pilot</span>
                        </div>
                        {/* 6. Validate (Future) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Validate</span>
                        </div>
                        {/* 7. Scale-Up (Future) */}
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[#94A3B8] flex items-center justify-center text-[11px]">
                          </div>
                          <span className="text-[11px] font-normal text-[#94A3B8] mt-1.5">Scale-Up</span>
                        </div>
                      </div>
                      {/* Connecting Bar Behind Steps */}
                      <div aria-hidden="true" className="absolute top-[19px] left-[7%] right-[7%] h-[2px] z-0 flex">
                        {/* Completed + Active: 2 intervals (33.3%) */}
                        <div className="w-[33.3%] bg-[#2D5BE3] h-full"></div>
                        {/* Future: remaining 4 intervals (66.7%) */}
                        <div className="w-[66.7%] border-t-2 border-dashed border-[#CBD5E1] h-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom micro-link for full pipeline list */}
              <div className="pt-4 border-t border-[#E2E8F0] mt-2 flex justify-end">
                <a className="text-xs font-semibold text-[#2D5BE3] hover:text-[#2449B8] flex items-center gap-1 transition-colors" href="#">
                  <span>View full challenge workflow</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </section>
            {/* Right Column: AI Insight & Actions Required (5 cols / ~40%) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
              {/* Card A: System Recommendation */}
              <article
                className="relative bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 overflow-hidden group"
                data-purpose="recommendation-card"
              >
                {/* Decorative Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-800 tracking-wide uppercase">Vendor Match</h3>
                      <p className="text-[11px] font-semibold text-indigo-500">SYSTEM CURATED</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                  The system has identified 5 potential vendors for the TB Screening challenge that precisely match your technical specifications.
                </p>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-slate-500">Review required</span>
                  <a className="text-[12px] font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                    <span>View Matches</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
              {/* Card B: Pending Tasks */}
              <article
                className="relative bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 overflow-hidden group"
                data-purpose="pending-tasks-card"
              >
                {/* Decorative Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-800 tracking-wide uppercase">Pending Approvals</h3>
                      <p className="text-[11px] font-semibold text-amber-500">ACTION REQUIRED</p>
                    </div>
                  </div>
                </div>
                
                {/* Styled Task List */}
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2.5 group/item cursor-pointer">
                    <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center mt-0.5 group-hover/item:border-amber-400 transition-colors"></div>
                    <span className="text-[13px] text-slate-600 leading-snug group-hover/item:text-slate-900 transition-colors">Review 3 new technical proposals for the Waste Management RFP.</span>
                  </li>
                  <li className="flex items-start gap-2.5 group/item cursor-pointer">
                    <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center mt-0.5 group-hover/item:border-amber-400 transition-colors"></div>
                    <span className="text-[13px] text-slate-600 leading-snug group-hover/item:text-slate-900 transition-colors">Approve Milestone #2 deliverables for the TB Screening Pilot.</span>
                  </li>
                  <li className="flex items-start gap-2.5 group/item cursor-pointer">
                    <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center mt-0.5 group-hover/item:border-amber-400 transition-colors"></div>
                    <span className="text-[13px] text-slate-600 leading-snug group-hover/item:text-slate-900 transition-colors">Finalize the expert evaluation panel for the Crop Disease Detection challenge.</span>
                  </li>
                </ul>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-slate-500">3 tasks pending</span>
                  <a className="text-[12px] font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                    <span>Review Items</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* BEGIN: QuickActionsBar */}
          <section className="mt-8 pt-4 border-t border-[#E2E8F0]" data-purpose="quick-actions">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Primary CTA */}
              <a
                className="bg-[#2D5BE3] text-white font-semibold text-[14px] px-5 py-2.5 rounded-[10px] hover:bg-[#2449B8] shadow-sm flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D5BE3]"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
                <span>Post New Challenge</span>
              </a>
              {/* Secondary CTA 1 */}
              <a
                className="bg-white border border-[#2D5BE3] text-[#2D5BE3] font-medium text-[14px] px-5 py-2.5 rounded-[10px] hover:bg-blue-50 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D5BE3]"
                href="#"
              >
                Review Applications
              </a>
              {/* Secondary CTA 2 */}
              <a
                className="bg-white border border-[#2D5BE3] text-[#2D5BE3] font-medium text-[14px] px-5 py-2.5 rounded-[10px] hover:bg-blue-50 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D5BE3]"
                href="#"
              >
                View Pilots
              </a>
            </div>
          </section>
          {/* END: QuickActionsBar */}
        </main>
        {/* END: MainContent */}
      </div>
    </div>
  );
}
