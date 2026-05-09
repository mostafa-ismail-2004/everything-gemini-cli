# Everything Gemini CLI 🚀

Everything Gemini CLI is an agentic toolkit designed to supercharge your development workflow with the Gemini CLI. Originally inspired by the [everything-claude-code](https://github.com/affaan-m/everything-claude-code) project, this repo is now fully optimized for Gemini, with a robust background learning engine and automated compliance testing.

## ✨ Features

- **🧠 Specialized Sub-Agents:** Access expert personas (e.g., `react-lead`, `seo-specialist`) directly within your Gemini sessions.
- **🛠️ Extensive Skills Library:** Over 50+ pre-defined skills covering API design, git workflows, accessibility, and more.
- **🛰️ Continuous Learning (Observer):** A background daemon that learns from your sessions and creates project-specific "instincts."
- **✅ Skill Compliance (`skill-comply`):** A unique framework to measure and improve how well Gemini follows your custom skills.
- **🔌 Native MCP Integration:** Pre-configured with GitHub MCP for issue tracking, PR management, and code search.
- **🪝 Automated Hooks:** Integrated hooks that trigger the observer and suggest optimizations like `/compact`.

## 🤖 Featured Agents

| Agent                   | Expertise                                                |
| :---------------------- | :------------------------------------------------------- |
| `react-lead`            | Senior Next.js, TypeScript, and Tailwind architecture.   |
| `code-reviewer`         | Expert quality, security, and maintainability audits.    |
| `seo-specialist`        | Technical SEO, Core Web Vitals, and structured data.     |
| `database-reviewer`     | PostgreSQL optimization and schema design.               |
| `security-reviewer`     | Vulnerability detection (OWASP Top 10, injection, etc.). |
| `performance-optimizer` | Bottleneck identification and bundle size reduction.     |
| `a11y-architect`        | WCAG 2.2 compliance and inclusive UI design.             |

## 🚀 Getting Started

### Prerequisites

- [Gemini CLI](https://github.com/google/gemini-cli) installed.
- Git & Python 3 (for advanced features).

### Installation

Install directly from GitHub:

```bash
gemini extension install https://github.com/mostafa-ismail-2004/everything-gemini-cli
```

Alternatively, for local development:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mostafa-ismail-2004/everything-gemini-cli.git
   cd everything-gemini-cli
   ```
2. **Register the Extension:**
   Point your Gemini CLI to the local directory in `gemini-extension.json`.

### Configure Environment

```bash
export GITHUB_TOKEN=your_token_here
export GEMINI_LEARNING_OBSERVER_ENABLED=true
```

## 🧠 Continuous Learning & Instincts

The **Observer Agent** (`scripts/start-observer.sh`) runs in the background, analyzing `observations.jsonl` to detect recurring patterns.

- **Instincts:** Automatically generated rules stored in `instincts/personal/`. Gemini loads these to adapt to your specific coding style.
- **Manual Control:**
  ```bash
  ./scripts/start-observer.sh start   # Start learning
  ./scripts/start-observer.sh status  # View progress
  ./scripts/instinct-cli.py list      # View learned instincts
  ```

## ✅ Skill Compliance Testing

Use `skill-comply` to verify if Gemini is actually following your custom `SKILL.md` files.

```bash
python3 scripts/skill_comply/run.py skills/my-new-skill/SKILL.md
```

This runs a multi-model simulation (using `gemini-3-flash-preview` for generation and `gemini-3.1-pro-preview` for execution) to grade compliance and generate a detailed report in `results/`.

## 📂 Project Structure

- [`agents/`](docs/AGENTS.md): Markdown personas invoked via `invoke_agent`.
- [`skills/`](docs/SKILLS.md): The core knowledge base of development workflows.
- `hooks/`: Lifecycle scripts (Pre/Post tool use).
- `scripts/`: The engine room (Observer, Instinct CLI, Compliance Runner).
- `gemini-extension.json`: Native manifest for Gemini CLI.

## 🤝 Upstream Credits

This project is a downstream evolution of [everything-claude-code](https://github.com/affaan-m/everything-claude-code). While it maintains compatibility with many upstream patterns, it is fully optimized for Gemini's tool-calling capabilities and introduces the `skill-comply` and `instincts` systems.

## 📄 License

MIT - Use freely, modify as needed, contribute back if you can.
Please see the original upstream repo for credits.
