"use client";

import { useState } from "react";

// Skill categories with syntax highlighting colors
const skillCategories = [
    {
        id: "frontend",
        name: "Frontend",
        color: "#c084fc",
        skills: [
            "react-patterns",
            "nextjs-best-practices",
            "vue-expert",
            "frontend-design",
            "tailwind-patterns",
            "ui-ux-pro-max",
        ],
    },
    {
        id: "backend",
        name: "Backend",
        color: "#22c55e",
        skills: [
            "api-patterns",
            "nestjs-expert",
            "nodejs-best-practices",
            "python-patterns",
        ],
    },
    {
        id: "database",
        name: "Database",
        color: "#3b82f6",
        skills: [
            "database-design",
            "prisma-expert",
        ],
    },
    {
        id: "testing",
        name: "Testing",
        color: "#f97316",
        skills: [
            "testing-patterns",
            "webapp-testing",
            "tdd-workflow",
            "code-review-checklist",
            "lint-and-validate",
            "typescript-expert",
        ],
    },
    {
        id: "devops",
        name: "DevOps",
        color: "#22d3ee",
        skills: [
            "deployment-procedures",
            "docker-expert",
            "server-management",
            "bash-linux",
            "powershell-windows",
        ],
    },
    {
        id: "security",
        name: "Security",
        color: "#ef4444",
        skills: [
            "vulnerability-scanner",
            "red-team-tactics",
        ],
    },
    {
        id: "architecture",
        name: "Architecture",
        color: "#8b5cf6",
        skills: [
            "app-builder",
            "architecture",
            "plan-writing",
            "brainstorming",
            "clean-code",
        ],
    },
    {
        id: "specialized",
        name: "Specialized",
        color: "#eab308",
        skills: [
            "mobile-design",
            "game-development",
            "performance-profiling",
            "seo-fundamentals",
            "i18n-localization",
            "mcp-builder",
        ],
    },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("frontend");
    const currentCategory = skillCategories.find((c) => c.id === activeCategory);

    return (
        <section id="skills" className="py-20 px-4 border-t border-[var(--color-border)]">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-[#c084fc] font-mono text-sm mb-3">// SKILLS</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-[#22c55e]">41+</span> Domain Expert Skills
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                        The agent automatically identifies and applies the right skill for each task.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-mono transition-all cursor-pointer ${activeCategory === cat.id
                                ? "bg-[var(--color-bg-elevated)] border-2"
                                : "bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]"
                                }`}
                            style={{
                                borderColor: activeCategory === cat.id ? cat.color : undefined,
                                color: activeCategory === cat.id ? cat.color : undefined,
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Skills Display - Code Block Style */}
                <div className="bg-[#0d0d0d] rounded-xl border border-[var(--color-border)] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-xs text-[#64748b] font-mono">
                            .agent/skills/{activeCategory}/
                        </span>
                        <div className="w-12" />
                    </div>

                    {/* Skills List */}
                    <div className="p-6 font-mono text-sm">
                        {currentCategory?.skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-3 py-1.5">
                                <span className="text-[#64748b] w-4 text-right">{index + 1}</span>
                                <span className="text-[#64748b]">├──</span>
                                <span style={{ color: currentCategory.color }}>{skill}</span>
                                <span className="text-[#64748b] md:block hidden">/SKILL.md</span>
                            </div>
                        ))}
                        <div className="flex items-center gap-3 py-1.5 mt-2">
                            <span className="text-[#64748b] w-4" />
                            <span className="text-[#64748b] text-xs">
                                + {41 - (currentCategory?.skills.length || 0)} more skills...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
