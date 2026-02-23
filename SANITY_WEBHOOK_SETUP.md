# Sanity Auto-Deploy Setup Guide

## Problem
Your custom domain (nachikettherapy.com) serves static files, so Sanity content changes won't appear until the site is rebuilt and republished.

## Solution
Set up a Sanity webhook that automatically rebuilds and publishes your site whenever you make changes in Sanity Studio.

---

## Step 1: Create a GitHub Personal Access Token (PAT)

1. Go to GitHub → **Settings** (your profile settings, not repo settings)
2. Scroll down to **Developer settings** (bottom left)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Settings:
   - **Note**: `Sanity Webhook Deploy`
   - **Expiration**: `No expiration` (or choose a long duration)
   - **Scopes**: Check only `repo` (gives full repository access)
6. Click **Generate token**
7. **COPY THE TOKEN IMMEDIATELY** - you won't see it again!
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## Step 2: Configure Sanity Webhook

1. Go to [Sanity Dashboard](https://www.sanity.io/manage)
2. Select your project: **Nachiket Rao A. K.** (Project ID: `n8p42n8d`)
3. Click **API** tab in the left sidebar
4. Scroll to **Webhooks** section
5. Click **+ Add webhook**

### Webhook Configuration:

**Name**: `Auto-deploy to GitHub`

**URL**: 
```
https://api.github.com/repos/CounsellorPrenuer/Nachiket_Rao/dispatches
```

**Dataset**: `production`

**Trigger on**: 
- ✓ Create
- ✓ Update
- ✓ Delete

**HTTP method**: `POST`

**HTTP Headers**:
```
Accept: application/vnd.github+json
Authorization: Bearer YOUR_GITHUB_PAT_HERE
Content-Type: application/json
```
*Replace `YOUR_GITHUB_PAT_HERE` with the token you copied in Step 1*

**Payload**:
```json
{
  "event_type": "sanity_update",
  "client_payload": {
    "dataset": "production",
    "projectId": "n8p42n8d"
  }
}
```

**On failure**: `Retry failed requests`

6. Click **Save**

---

## Step 3: Test the Setup

### Option A: Make a Test Change in Sanity
1. Go to your Sanity Studio
2. Edit any content (e.g., change a service title)
3. Click **Publish**
4. Monitor the deployment:
   - Go to: https://github.com/CounsellorPrenuer/Nachiket_Rao/actions
   - You should see a new workflow run starting within seconds
   - Wait 1-3 minutes for it to complete
5. Check your live site: https://nachikettherapy.com
   - Changes should appear automatically!

### Option B: Manual Trigger (for testing)
If you want to test without changing content:

1. Go to: https://github.com/CounsellorPrenuer/Nachiket_Rao/actions
2. Click **Build Source and Publish Main** workflow
3. Click **Run workflow** dropdown
4. Select branch: `source-code`
5. Click **Run workflow**

---

## How It Works

```
Sanity Studio
    ↓ (you publish changes)
Webhook triggers GitHub
    ↓
GitHub Actions runs "Build Source and Publish Main"
    ↓
Builds static site from source-code branch
    ↓
Publishes HTML + assets to main branch
    ↓
GitHub Pages serves updated site
    ↓
nachikettherapy.com shows new content
```

**Typical deploy time**: 1-3 minutes from publish to live

---

## Troubleshooting

### Webhook isn't triggering
1. Check webhook logs in Sanity:
   - API tab → Webhooks → Click your webhook → **Deliveries** tab
   - Look for successful deliveries (green checkmark)
2. If you see errors:
   - Verify your GitHub PAT is correct
   - Ensure PAT has `repo` scope
   - Check the URL is exactly: `https://api.github.com/repos/CounsellorPrenuer/Nachiket_Rao/dispatches`

### Workflow fails
1. Go to https://github.com/CounsellorPrenuer/Nachiket_Rao/actions
2. Click the failed run
3. Click the failed job to see error details
4. Common fixes:
   - Ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` secrets are set in GitHub repo settings

### Changes don't appear on site
1. Hard refresh the page: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check if workflow completed successfully
3. Verify the content was actually published in Sanity (not just saved as draft)

---

## Quick Reference

- **Sanity Webhook URL**: `https://api.github.com/repos/CounsellorPrenuer/Nachiket_Rao/dispatches`
- **Event Type**: `sanity_update`
- **GitHub Actions**: https://github.com/CounsellorPrenuer/Nachiket_Rao/actions
- **Live Site**: https://nachikettherapy.com
- **Typical Deploy Time**: 1-3 minutes
