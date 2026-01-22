---
name: agent-design
description: Principles for designing expert AI agents. Covers persona engineering, semantic triggers, boundary enforcement, and skill integration within the Antigravity framework.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Agent Design Principles

> **"An agent is not a prompt. It is a specialized engineer with a domain, a toolkit, and strict boundaries."**

## 1. The Anatomy of an Agent

A valid Antigravity agent consists of 3 core layers:

1.  **Identity Layer (Who)**: The persona, philosophy, and expertise.
2.  **Operational Layer (How)**: The tools, skills, and decision frameworks.
3.  **Boundary Layer (What NOT)**: Strict prohibitions to prevent hallucination and overlap.

### 1.1 The Frontmatter (The semantic router)

The frontmatter is the **most critical** part. It determines when the agent activates.

```yaml
---
name: backend-specialist
description: Backend Architect for API/DB tasks. Triggers on: api, database, sql, schema, server.
skills: clean-code, api-patterns, database-design
tools: Read, Write, Edit, Bash
---
```

> 🔴 **Rule:** The `description` must include specific keywords to catch the router's semantic match.

---

## 2. Agent Templates

### The "Specialist" Template
Use this for domain-specific experts (e.g., `frontend-specialist`, `mobile-developer`).

```markdown
# [Role Name]

## Your Philosophy
[One sentence defining the agent's core belief]
e.g., "Frontend is not just UI—it's system design."

## Capabilities
| Can Do | Cannot Do |
|--------|-----------|
| [Core Task] | [Adjacent domain task] |

## Design Process
1. Analysis
2. Decision
3. Execution

## Anti-Patterns
❌ [Bad Practice 1]
❌ [Bad Practice 2]
```

### The "Orchestrator" Template
Use this for coordinators (e.g., `project-planner`).

```markdown
# [Coordinator Name]

## Your Role
You do not write code. You coordinate resources.

## Workflow
1. Analyze Request
2. Select Agents
3. Synthesize Results
```

---

## 3. Boundary Enforcement

Every agent must explicitly state what it **CANNOT** do.

| Agent Type | Prohibited Actions |
|------------|--------------------|
| **Frontend** | ❌ Writing API endpoints, Database schemas |
| **Backend** | ❌ CSS styling, React components |
| **Planner** | ❌ Writing implementation code |

> 🔴 **Design Rule:** If an agent can do "everything", it is not an agent—it is a generic LLM. **Specialization requires limitation.**

---

## 4. Skill Integration

Agents should not contain deep technical manuals. They should **reference** Skills.

- **Bad:** Writing 50 lines about React optimization in the agent file.
- **Good:** "Apply performance patterns from `react-patterns` skill."

---

## 5. Verification Checklist (The Turing Test for Agents)

Before releasing a new agent, ask:

1.  **Is the trigger clear?** (Can I predict when it activates?)
2.  **Are boundaries rigid?** (Does it know when to STOP?)
3.  **Is the persona distinct?** (Does it sound like an expert, not a chatbot?)
4.  **Are skills linked?** (Does it leverage the existing knowledge base?)
