"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "AI Automation Workflow",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your automation request..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent to our automation engineers.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "AI Automation Workflow",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to send email.");
      }
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
      <div className="absolute -inset-10 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      
      <h3 className="font-headline-md text-2xl font-bold mb-2">Send an Automation Request</h3>
      <p className="text-on-surface-variant text-sm mb-8">
        Describe your manual workflow or the automation goals you want to achieve.
      </p>

      {status.type === "success" ? (
        <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-6 text-center text-emerald-300">
          <span className="material-symbols-outlined text-5xl mb-4 text-emerald-400">check_circle</span>
          <p className="font-semibold text-lg mb-2">Message Sent Successfully</p>
          <p className="text-sm opacity-90">{status.message}</p>
          <button
            onClick={() => setStatus({ type: "idle", message: "" })}
            className="mt-6 px-6 py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded-lg text-sm transition-all cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-on-surface-variant font-label-sm mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white placeholder-white/20 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-on-surface-variant font-label-sm mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white placeholder-white/20 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-xs uppercase tracking-wider text-on-surface-variant font-label-sm mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white placeholder-white/20 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-on-surface-variant font-label-sm mb-2">
                Primary Automation Need *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#111317] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white transition-colors"
              >
                <option value="AI Automation Workflow">AI Automation Workflow</option>
                <option value="Autonomous AI Agents">Autonomous AI Agents</option>
                <option value="Business Process Optimization">Business Process Optimization</option>
                <option value="Custom Enterprise AI Model">Custom Enterprise AI Model</option>
                <option value="Data Intelligence Pipeline">Data Intelligence Pipeline</option>
                <option value="System & API Integration">System & API Integration</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-on-surface-variant font-label-sm mb-2">
              Workflow Details / Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the processes you want to automate, tools you use, or metrics you want to improve..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white placeholder-white/20 transition-colors resize-none"
            />
          </div>

          {status.type === "error" && (
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 text-sm text-rose-300">
              {status.message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4">
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-on-primary-fixed font-bold rounded-xl hover:scale-105 active:scale-95 disabled:scale-100 disabled:opacity-50 transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              {status.type === "loading" ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-on-primary-fixed border-t-transparent" />
                  Sending Request...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">send</span>
                  Submit Request
                </>
              )}
            </button>
            <span className="text-xs text-on-surface-variant/50">* Required fields</span>
          </div>
        </form>
      )}
    </div>
  );
}
