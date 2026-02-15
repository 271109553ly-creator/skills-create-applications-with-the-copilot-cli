# Copilot Instructions

## Project Overview

This is a GitHub Skills training exercise repository designed to teach developers how to use the standalone GitHub Copilot CLI (`@github/copilot` npm package) for building applications from the terminal.

Students work through structured exercises (`.github/steps/`) that guide them through:
1. Installing the standalone Copilot CLI
2. Creating GitHub issues using feature templates
3. Building a Node.js CLI calculator application interactively
4. Using custom agents and the `/delegate` command
5. Creating and managing pull requests from the CLI

The repository uses GitHub Actions workflows (`.github/workflows/`) to automatically check student progress and advance them through the exercise steps.

## Key Conventions

### Issue Template Usage

All feature requests for `calculator.js` (the student-created application) **must** use the template at `.github/ISSUE_TEMPLATE/feature_request.md`. This is explicitly enforced by the existing `.github/instructions/copilot-cli-ref.instructions.md` file.

### Student-Generated Files

Students will create the following files during the exercise:
- `calculator.js` - Node.js CLI calculator implementation
- Related files as needed for their solution

These files do not exist initially and will vary based on each student's implementation approach.

### Branch Structure

Students create feature branches (e.g., `create-calc-app`) to complete their work. The `main` branch contains only the exercise framework.

## Exercise Workflow

The training follows this progression:
1. **Step 1**: Install `@github/copilot` globally, authenticate, create an issue using the feature request template
2. **Step 2**: Create a branch, implement basic calculator operations (add, subtract, multiply, divide)
3. **Step 3**: Expand calculator with additional operations (modulo, exponentiation, square root)
4. **Step 4**: Create PR, link to issues, request Copilot code review, merge changes

## Key Commands

Students learn these Copilot CLI features:

```bash
# Start interactive session with all GitHub features enabled
copilot --allow-all --enable-all-github-mcp-tools

# Execute shell commands from within Copilot CLI
!<command>

# Useful slash commands
/login          # Authenticate with GitHub
/session        # Show session details
/context        # Show token usage visualization
/usage          # Show session statistics
/delegate       # Assign task to Copilot coding agent
/share          # Export session to markdown or gist
/exit           # Close session
```

## Important Notes

- The `--allow-all` flag enables `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` at once
- Students may need to re-authenticate if their codespace restarts
- The `/delegate` command uses premium requests from GitHub Copilot subscriptions
- Students should respond "yes" to permission prompts for `gh issue`, `git config`, etc.
- The existing instruction file at `.github/instructions/copilot-cli-ref.instructions.md` provides Copilot CLI reference material and is already loaded via the `applyTo: "**/**"` frontmatter

## Validation

GitHub Actions workflows automatically validate student progress by checking for:
- Proper issue creation with required labels
- Branch creation and file commits
- Pull request creation with appropriate issue links
