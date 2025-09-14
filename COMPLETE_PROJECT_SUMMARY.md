# Coreate - Content Creator Productivity App

## 🎯 Core Concept
**The Box System:** Each "Box" = one complete piece of content from initial idea to published post.

## 📱 App Structure

### Main Features
1. **Box Management** - Complete content workflow in one place
2. **Idea Pool** - Brainstorming space that converts to Boxes
3. **Hashtag Research** - AI-powered discovery with collections
4. **Text Snippets** - Reusable templates (intros, CTAs, outros)
5. **Audio Recording** - Voice-to-text with offline transcription

### Box Workflow Stages
```
Idea → Scripted → Shot → Edited → Posted → Archived
```

Each Box Contains:
- Initial ideas (text/voice + auto-transcription)
- Multiple script drafts and AI-refined versions
- Bullet points for filming
- Platform-specific captions and hashtags
- Notes and reminders

### Navigation Structure
- **Tab Navigation:** Home, Boxes, Progress, Profile
- **Modal Screens:** Audio recording, subscription upgrades

## 💰 Business Model

### Free Tier (Strategic Limits)
- 2 Boxes maximum
- 12 AI conversions/month
- 8 Idea Pool items
- 4 hashtag queries/month

### Premium ($2.99/month or $24.99/year)
- Unlimited everything
- Export features (PDF/TXT)
- Copy hashtag collections
- Priority support

**Strategy:** Create friction at peak engagement to encourage upgrades

## 🛠 Technical Stack

### Frontend
- **React Native + Expo** (iOS-first)
- **Tamagui** - UI framework with purple theme (60:30:10 color rule)
- **React Navigation** - File-based routing

### State Management
- **React Query** - Server state + caching
- **MMKV** - Fast local storage
- **Context API** - Global UI state

### Backend (Firebase)
- **Firestore** - Database
- **Authentication** - Email, Google, Apple Sign-In
- **Cloud Functions** - Server logic
- **Analytics** - User tracking

### Key Services
- **Google Gemini API** - AI script refinement, hashtags, captions
- **iOS Speech Recognition** - Offline audio transcription
- **iOS In-App Purchases** - Subscription management
- **Resend** - Email service

## 🎨 Design System
- **Theme:** Purple accent with light/dark modes
- **Accessibility:** VoiceOver, Dynamic Type, voice control
- **Performance:** FlashList, Skia graphics, skeleton loaders

## 🔄 Key User Flows

### Content Creation Journey
1. Capture idea (voice/text)
2. AI script refinement
3. Generate bullet points for filming
4. Create platform-specific captions
5. Track progress through workflow stages

### Upgrade Triggers
- Hit limits during productive workflow
- Success-based messaging (not aggressive)
- Value demonstration before payment

## 🚀 Development Implementation Order

### Phase 1: Foundation ✅
- [x] Project setup with Expo
- [x] Tamagui installation and configuration

### Phase 2: Core Structure (Next)
- [ ] Navigation setup (React Navigation)
- [ ] Authentication system (Firebase Auth)
- [ ] Basic database structure (Firestore)

### Phase 3: Core Features
- [ ] Box CRUD operations
- [ ] Audio recording + transcription (iOS native)
- [ ] AI integration (Google Gemini)
- [ ] Idea Pool functionality

### Phase 4: Premium Features
- [ ] Hashtag research system
- [ ] Text snippets library
- [ ] Export functionality
- [ ] Subscription system (iOS In-App Purchases)

### Phase 5: Polish
- [ ] Offline synchronization
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Analytics integration

## 🎪 Unique Value Proposition
**Problem:** Content creators have scattered notes, voice memos across apps, and no clear workflow.

**Solution:** Structured Box system with AI assistance that takes creators from messy brainstorm to polished, publishable content in one centralized location.

**Target:** Content creators who want to be more organized and efficient in their creative process.