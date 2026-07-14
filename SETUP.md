# Git / GitHub Setup — guillaume-ux-portfolio

One-time credential setup, then a reusable commit/push routine for the rest of the 8-week build. Repo already exists and is empty: **https://github.com/gg28god-max/guillaume-ux-portfolio** (public, owned by your account — no separate collaborator/permission step needed, your token/login *is* your write access).

---

## 1. Install Git (skip if already installed)

Open **PowerShell** and check first:

```powershell
git --version
```

If that errors ("not recognized"), install it:

```powershell
winget install --id Git.Git -e --source winget
```

Close and reopen PowerShell after install so `git` is on your `PATH`.

> Git for Windows bundles **Git Credential Manager (GCM)**, which is what makes step 3 painless — you won't be pasting your token by hand more than once.

---

## 2. Configure your identity

Git stamps every commit with a name/email — do this once, globally, before your first commit:

```powershell
git config --global user.name "Guillaume Goder"
git config --global user.email "gg28.god@gmail.com"
```

(Use whichever email is tied to your `gg28god-max` GitHub account, if different from the one on file here.)

---

## 3. Create a Personal Access Token (PAT)

GitHub no longer accepts your account password for git operations — you push using a token instead.

1. Go to **github.com → your avatar (top right) → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. Name it something like `portfolio-site-push`.
3. **Repository access:** "Only select repositories" → choose `guillaume-ux-portfolio`.
4. **Permissions:** under Repository permissions, set **Contents: Read and write**. (That's the only permission you need — don't grant more.)
5. Set an expiration (90 days is reasonable for an 8-week build; you can regenerate later).
6. Click **Generate token** and **copy it immediately** — GitHub only shows it once. Paste it somewhere temporary (not committed to the repo).

**Never commit this token to the repo or paste it into any file that gets pushed.** Treat it like a password.

---

## 4. First push (Week 0 code → GitHub)

From inside the `guillaume-ux-portfolio` folder in PowerShell:

```powershell
cd path\to\guillaume-ux-portfolio
git init
git add .
git commit -m "Week 0: site shell, IA, visual system, dark mode"
git branch -M main
git remote add origin https://github.com/gg28god-max/guillaume-ux-portfolio.git
git push -u origin main
```

On `git push`, a window/prompt will ask you to sign in to GitHub:

- If Git Credential Manager pops up a **browser window** — sign in there, approve, done. GCM caches it in Windows Credential Manager and you won't be asked again on this machine.
- If it prompts for **username/password** in the terminal instead — enter your GitHub **username**, then paste the **token** (not your account password) as the password.

After this, `git push` from this machine won't ask again unless the token expires or is revoked.

---

## 5. Reusable workflow for every future update

You'll repeat this same loop for Case Study 2, Case Study 3, and the polish pass — no new credential setup needed after step 4.

```powershell
cd path\to\guillaume-ux-portfolio
git status                          # see what changed
git add .
git commit -m "Weeks 3-4: Case Study 2 (agent trust) build"
git push
```

**Suggested commit message convention** (matches the brief's staging so history reads as a build log):

- `Week 0: site shell, IA, visual system, dark mode`
- `Weeks 1-2: Case Study 1 — real pipeline capture + writeup`
- `Weeks 3-4: Case Study 2 — agent trust case study`
- `Weeks 5-6: Case Study 3 — EHR documentation case study`
- `Weeks 7-8: polish + consistency pass`

**Working solo, on `main` directly is fine** — no branch protection or PR workflow needed for a personal portfolio repo. If you ever want a safety net before a big rewrite, `git checkout -b draft` first and merge back when happy, but it's not required.

---

## 6. Vercel import

Once step 4's push succeeds, go to **vercel.com → Add New → Project → Import Git Repository**, select `guillaume-ux-portfolio`. No build command needed — it's a static site (leave build settings as default/"Other", output directory as root). Every future `git push` to `main` will auto-redeploy.

---

## Troubleshooting

- **"Support for password authentication was removed"** → you pasted your account password instead of the PAT. Regenerate a token (step 3) and use that.
- **`fatal: remote origin already exists`** → you ran `git remote add origin` twice; fix with `git remote set-url origin https://github.com/gg28god-max/guillaume-ux-portfolio.git`.
- **Token expired** → repeat step 3, then next `git push` will re-prompt for credentials with the new token.
