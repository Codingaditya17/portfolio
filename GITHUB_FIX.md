# Fix GitHub 403 Permission Error

## The Problem
You're getting a 403 error because GitHub no longer accepts passwords for authentication. You need to use a **Personal Access Token** instead.

---

## Solution: Use Personal Access Token

### Step 1: Create a Personal Access Token

1. **Go to GitHub Settings**
   - Open [https://github.com/settings/tokens](https://github.com/settings/tokens)
   - Or: GitHub → Your Profile Picture → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token**
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   - Give it a name: `portfolio-deployment`
   - Set expiration: Choose how long you want it to last (90 days, or no expiration)
   - **Select scopes**: Check **`repo`** (this gives full repository access)
   - Click **"Generate token"** at the bottom

3. **Copy the Token**
   - ⚠️ **IMPORTANT**: Copy the token immediately! You won't be able to see it again.
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Use Token Instead of Password

When you run `git push`, it will ask for:
- **Username**: `Codingaditya17` (your GitHub username)
- **Password**: **Paste your Personal Access Token here** (NOT your GitHub password)

---

## Alternative: Use SSH Instead (Recommended)

SSH is more secure and you won't need to enter credentials every time.

### Step 1: Check if you have SSH key
```bash
ls -al ~/.ssh
```

### Step 2: Generate SSH key (if you don't have one)
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
- Press Enter to accept default file location
- Press Enter twice for no passphrase (or set one if you want)

### Step 3: Add SSH key to GitHub
1. Copy your public key:
```bash
cat ~/.ssh/id_ed25519.pub
```
2. Copy the entire output (starts with `ssh-ed25519...`)
3. Go to GitHub → Settings → SSH and GPG keys → New SSH key
4. Paste the key and save

### Step 4: Change remote URL to SSH
```bash
git remote set-url origin git@github.com:Codingaditya17/portfolio.git
```

### Step 5: Test connection
```bash
ssh -T git@github.com
```
You should see: "Hi Codingaditya17! You've successfully authenticated..."

### Step 6: Push again
```bash
git push -u origin main
```

---

## Quick Fix: Update Remote URL

If your remote URL is wrong, fix it:

```bash
# Remove current remote
git remote remove origin

# Add correct remote (HTTPS)
git remote add origin https://github.com/Codingaditya17/portfolio.git

# Or use SSH (recommended)
git remote add origin git@github.com:Codingaditya17/portfolio.git
```

---

## Verify Repository Exists

Make sure the repository exists on GitHub:
1. Go to [https://github.com/Codingaditya17/portfolio](https://github.com/Codingaditya17/portfolio)
2. If it doesn't exist, create it first on GitHub

---

## Try Again

After setting up Personal Access Token or SSH:

```bash
git push -u origin main
```

If using HTTPS with token:
- Username: `Codingaditya17`
- Password: `ghp_your_token_here`

---

## Still Having Issues?

1. **Check repository exists**: Make sure `Codingaditya17/portfolio` exists on GitHub
2. **Check permissions**: Make sure you're the owner or have write access
3. **Try SSH method**: It's more reliable than HTTPS tokens
4. **Clear cached credentials**:
   ```bash
   git credential-osxkeychain erase
   host=github.com
   protocol=https
   ```
   (Press Enter twice after the last line)

