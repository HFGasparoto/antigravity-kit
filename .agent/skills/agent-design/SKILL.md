---
name: agent-design
description: Advanced principles for designing expert AI agents. Covers persona engineering, semantic trigger optimization, boundary theory, and cognitive architecture.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Advanced Agent Design

> **"The difference between a chatbot and an agent is SPECIFICITY."**

## 1. The Trinity of Agent Architecture

To create an agent that feels like a senior engineer, you must design three pillars:

### I. The Voice of Authority (Persona)
It is not enough to say "act like an expert." You must give it a **worldview**.
- *Generic:* "Write clean code."
- *Specific:* "Treat duplicated code as unacceptable technical debt. Prefer readability over brevity."

### II. The Exclusion Mandate (Boundaries)
What the agent does **NOT** do is more important than what it does.
- If you don't tell the `backend-specialist` to ignore CSS, it will try to "help" and break the layout.
- **Rule:** Define explicit "Anti-Triggers" in the system prompt.

### III. The External Library (Skills)
Agents have short memories. Deep knowledge (docs, manuals, rules) must live in `SKILL.md` files loaded on demand.
- **Do not put:** The entire Pandas manual in the prompt.
- **Put:** Instructions on how to *use* the `data-analysis` skill.

---

## 2. Semantic Trigger Engineering (Router Optimization)

The Antigravity system uses semantic matching to choose which agent to invoke.

### How to Hack the Router:
1.  **Keyword Density:** Use technical synonyms.
    - *Ex for Database:* `sql`, `schema`, `migration`, `postgres`, `orm`, `prisma`.
2.  **Action Verbs:**
    - *Ex for Tester:* `test`, `validate`, `verify`, `audit`, `coverage`.
3.  **Avoid Overlap:**
    - If `frontend` and `backend` both have the word "javascript", the router might get confused. Keep "browser" in front and "node" in back.

---

## 3. High-Fidelity Agent Templates

### The "Domain Specialist"
```markdown
# [Role Name]

## Philosophy
[Strong, opinionated core belief]

## Your Standards
- [Gold Standard 1]
- [Gold Standard 2]

## What You Ignore (Boundaries)
- [Adjacent Domain A]
- [Low-Level Tasks]

## Self-Verification Checklist
Before answering, ask yourself:
1. Does this follow Standard X?
2. Does this violate Boundary Y?
```

### The "Critic / Auditor"
```markdown
# [Auditor Name]

## Your Role
You are not here to please. You are here to find flaws.

## Audit Protocol
1. Initial Scan
2. Risk Identification
3. Proof of Concept (Exploit)
4. Mitigation Report
```

---

## 4. Design Anti-Patterns (What to Avoid)

| Error | Symptom | Solution |
|-------|---------|----------|
| **"Do-It-All" Prompt** | Agent tries to fix CSS and Deploy at the same time | Create 2 separate agents |
| **"Friendly" Persona** | Agent apologizes too much and is verbose | Give instruction "Be concise and direct" |
| **Loose Instruction** | Agent invents libraries that don't exist | Link to a Skill with allowed libs |
| **Missing Tools** | Agent suggests code but doesn't edit file | Add `Edit` and `Write` to tools list |

---

## 5. Turing Test for Agents

Before releasing your agent, run the test:

1.  **Denial Test:** Ask for something out of its scope. Does it politely refuse? (If it tries to do it, it failed).
2.  **Opinion Test:** Ask for a technical recommendation. Does it defend a viewpoint or give a vague answer? (Must have an opinion).
3.  **Tool Test:** Ask to create a file. Does it use the tool or return a text code block? (Must use the tool).
