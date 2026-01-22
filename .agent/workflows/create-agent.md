---
description: Create a new specialized agent within the Antigravity system.
---

# /create-agent

**Agent Architect Activation Protocol**

## Task
Invoke the **Agent Architect** to design and implement a new agent.

## Workflow

1.  **Invoke `agent-architect`** with the user's request.
2.  **Architect** analyzes domain and constraints.
3.  **Architect** creates the agent file in `.agent/agents/`.
4.  **Architect** updates `ARCHITECTURE.md`.

## Interactive Prompt

```
/create-agent [name] [domain]
```

**Example:**
`/create-agent blockchain-expert "Smart contract auditing and Solidity development"`

---

## 🧪 Verification
After creation, the Architect should simulate a mock request to the new agent to verify routing triggers.
