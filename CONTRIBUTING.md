# Contributing to Everything Gemini CLI

First off, thank you for considering contributing to Everything Gemini CLI! It's people like you that make it a better tool for everyone.

## 🛠️ How to Contribute

### Adding a New Agent
Agents are specialized personas defined in Markdown files within the `agents/` directory.
1. Create a new `.md` file in `agents/`.
2. Define the agent's name, expertise, and specific instructions.
3. Use existing agents (like `react-lead.md`) as a template for structure and tone.
4. **Update `docs/AGENTS.md`** with the new agent's name and summary.

### Adding a New Skill
Skills are the core of this toolkit's knowledge.
1. Create a new directory in `skills/`.
2. Add a `SKILL.md` file inside that directory.
3. Define the skill's purpose, triggers, and step-by-step instructions.
4. (Recommended) Run a compliance test on your new skill using the instructions below.
5. **Update `docs/SKILLS.md`** with the new skill's name and description.

### Running Skill Compliance Tests
Before submitting a new skill, please verify its effectiveness:
```bash
python3 scripts/skill_comply/run.py skills/your-new-skill/SKILL.md
```
Review the generated report in `results/` to ensure Gemini understands and follows the skill correctly.

### Modifying Scripts or Hooks
If you're modifying the `scripts/` or `hooks/` directory:
1. Ensure your changes are compatible with both Linux and (if possible) macOS.
2. Update the README.md if you add new environment variables or commands.

## 📜 Code of Conduct
- Be respectful and professional.
- Focus on constructive feedback.
- Help others learn and grow.

## ⚖️ License
By contributing, you agree that your contributions will be licensed under the same license as the project.
