28 / 7 /  2025 ---- starting new project ---- 
# haven't decided the name yet but pretty clear on the idea 
  
  
         ┌─────────────────────────┐
         │        Frontend          │
         │  (Next.js + Tailwind)    │
         └───────────┬─────────────┘
                     │
   ┌─────────────────┴──────────────────┐
   │             API Layer               │
   │   (Next.js API routes / Express)     │
   └──────┬───────────────┬──────────────┘
          │               │
          │               │
 ┌────────▼─────┐   ┌─────▼──────────┐
 │ Authentication│   │   Test Service │
 │ (NextAuth)    │   │ (Handles audio │
 │ JWT/Session   │   │ upload + calls │
 └─────┬─────────┘   │ Whisper/AI)    │
       │             └─────┬──────────┘
       │                   │
┌──────▼────────┐     ┌────▼──────────┐
│   Database     │     │  AI Services  │
│ (PostgreSQL)   │     │  Whisper, GPT │
│ Prisma ORM     │     │  Speechace    │
└──────┬─────────┘     └────┬──────────┘
       │                    │
       └───────┬────────────┘
               │
       ┌───────▼──────────┐
       │   Study Plan      │
       │ Generation Logic  │
       └──────────────────┘
